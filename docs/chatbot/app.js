const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatMessages = document.getElementById("chat-messages");

sendBtn.addEventListener("click", () => {
    const message = userInput.value.trim();
    if (message) {
        const userMsg = document.createElement("div");
        userMsg.className = "user-message";
        userMsg.textContent = message;
        chatMessages.appendChild(userMsg);

        const botMsg = document.createElement("div");
        botMsg.className = "bot-message";
        botMsg.textContent = "Bunu aldım: " + message;
        chatMessages.appendChild(botMsg);

        chatMessages.scrollTop = chatMessages.scrollHeight;
        userInput.value = "";
    }
});
