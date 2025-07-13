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
const micBtn = document.getElementById('mic-btn');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
    alert("Tarayıcınız bu özelliği desteklemiyor. Lütfen Chrome kullanın.");
} else {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'tr-TR';
    recognition.continuous = false;
    recognition.interimResults = false;

    micBtn.addEventListener('click', () => {
        recognition.start();
        micBtn.disabled = true;
        micBtn.textContent = '🎙️...';
    });

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.trim();
        userInput.value = transcript;
        sendBtn.click();
    };

    recognition.onend = () => {
        micBtn.disabled = false;
        micBtn.textContent = '🎤';
    };

    recognition.onerror = (event) => {
        console.error("Ses algılama hatası:", event.error);
        micBtn.disabled = false;
        micBtn.textContent = '🎤';
        alert("Ses algılama hatası: " + event.error);
    };
}
