FROM ollama/ollama:latest

RUN apt-get -o Acquire::ForceIPv4=true -o Acquire::Retries=5 update \
    && DEBIAN_FRONTEND=noninteractive apt-get -o Acquire::ForceIPv4=true -o Acquire::Retries=5 install -y --no-install-recommends openssh-server curl \
    && rm -rf /var/lib/apt/lists/* \
    && mkdir -p /run/sshd /root/.ssh \
    && chmod 700 /root/.ssh \
    && printf '%s\n' \
       'PermitRootLogin prohibit-password' \
       'PasswordAuthentication no' \
       'KbdInteractiveAuthentication no' \
       'PubkeyAuthentication yes' \
       'AuthorizedKeysFile .ssh/authorized_keys' \
       >> /etc/ssh/sshd_config

COPY docker-entrypoint-ssh.sh /usr/local/bin/docker-entrypoint-ssh.sh
RUN sed -i 's/\r$//' /usr/local/bin/docker-entrypoint-ssh.sh \
    && chmod 755 /usr/local/bin/docker-entrypoint-ssh.sh

EXPOSE 22 11434
ENTRYPOINT ["/usr/local/bin/docker-entrypoint-ssh.sh"]