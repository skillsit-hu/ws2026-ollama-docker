const SYSTEM_PROMPT = "You are a professional coding assistant. Generate code in your response only, DO NOT CREATE COMMENTS IN THE CODE and DO NOT GENERATE ANY ADDITIONAL TEXT INCLUDING CODE BLOCK MD TEXT. You are given a file content and you need to write a code to update the content. You have to give back the whole new content of the file, not only the modification.";
// const MODEL = "gemma4:e4b-it-qat";
const MODEL = "gemma4:e4b";
const URI = "http://jasz36.fork.hu:11435/api/chat";

export async function getOllamaChatResponse(userPrompt) {

    console.log(`\nSending prompt to Ollama using model: ${MODEL}...`);

    const body = {
        model: MODEL,
        messages: [
            {
                role: "system",
                content: SYSTEM_PROMPT
            },
            {
                role: "user",
                content: userPrompt
            }
        ],
        stream: false,
        think: false,
        options: {
            num_ctx: 4096,

        }
    };

    try {
        const response = await fetch(URI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP error! status: ${response.status}\nDetails: ${errorText}`);
        }

        const data = await response.json();

        // console.log("\n" + "=".repeat(50));
        const assistantMessage = data.message.content.trim();

        return assistantMessage;

    } catch (error) {
        console.error("Error:", error.message);
    }
}

