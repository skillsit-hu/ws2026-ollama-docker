#!/bin/sh
set -eu

if [ ! -s /ssh-keys/authorized_keys ]; then
  echo "ERROR: ./authorized_keys is missing or empty" >&2
  exit 1
fi

cp /ssh-keys/authorized_keys /root/.ssh/authorized_keys
chmod 700 /root/.ssh
chmod 600 /root/.ssh/authorized_keys
ssh-keygen -A
/usr/sbin/sshd

ollama serve &
OLLAMA_PID=$!

cleanup() {
  kill "$OLLAMA_PID" 2>/dev/null || true
  wait "$OLLAMA_PID" 2>/dev/null || true
}
trap cleanup INT TERM

until curl -fsS http://127.0.0.1:11434/api/tags >/dev/null 2>&1; do
  if ! kill -0 "$OLLAMA_PID" 2>/dev/null; then
    echo "ERROR: ollama serve stopped during startup" >&2
    exit 1
  fi
  sleep 1
done

MODEL_NAME="${MODEL_NAME:-qwen3:4b-q4_K_M}"
MODEL_ALIAS="${MODEL_ALIAS:-$MODEL_NAME}"
CONTEXT_LENGTH="${OLLAMA_CONTEXT_LENGTH:-8192}"

has_model() {
  ollama list | awk 'NR > 1 { print $1 }' | grep -Fxq "$1"
}

if has_model "$MODEL_ALIAS"; then
  echo "Model alias already available: $MODEL_ALIAS"
else
  if has_model "$MODEL_NAME"; then
    echo "Source model already downloaded: $MODEL_NAME"
  else
    echo "Downloading model: $MODEL_NAME"
    ollama pull "$MODEL_NAME"
  fi

  if [ "$MODEL_ALIAS" != "$MODEL_NAME" ]; then
    echo "Creating alias: $MODEL_ALIAS -> $MODEL_NAME"
    ollama cp "$MODEL_NAME" "$MODEL_ALIAS"
  fi
fi

echo "Loading model: $MODEL_ALIAS (context: $CONTEXT_LENGTH)"
curl -fsS http://127.0.0.1:11434/api/generate \
  -H 'Content-Type: application/json' \
  -d "{\"model\":\"$MODEL_ALIAS\",\"prompt\":\"\",\"stream\":false,\"keep_alive\":-1,\"options\":{\"num_ctx\":$CONTEXT_LENGTH}}" \
  >/dev/null
echo "Model ready: $MODEL_ALIAS"

wait "$OLLAMA_PID"
