function goBack() {
        window.location.href = "index.html";
}

window.onload = () => {
const disabilities = JSON.parse(localStorage.getItem("disabilities")) || [];
const contentArea = document.getElementById("content-area");

if (disabilities.includes("normal")) {
    contentArea.innerHTML += `
    <div class="section">
        <h2>👨‍🎓 Normal Mode</h2>
        <p>Welcome! Here’s your interactive content with text, images and quizzes.</p>
        <img src="https://www.svgrepo.com/show/354312/online-learning.svg" width="200"/>
    </div>
    `;
}

if (disabilities.includes("blind")) {
    contentArea.innerHTML += `
    <div class="section">
        <h2>👩‍🦯 Blind Mode</h2>
        <p>This section is designed for blind users using voice narration.</p>
        <button onclick="speak('Welcome to LearnAble! Audio mode enabled for blind users.')">🔊 Play Audio</button>
    </div>
    `;
}

if (disabilities.includes("deaf")) {
    contentArea.innerHTML += `
    <div class="section">
        <h2>🧏 Deaf Mode</h2>
        <p>Here’s your lesson in text form and a sign language video below:</p>
        <p><strong>Lesson:</strong> Photosynthesis is the process by which green plants make food using sunlight.</p>
        <video width="300" controls>
        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4">
        Your browser does not support the video tag.
        </video>
    </div>
    `;
}

if (disabilities.includes("mute")) {
    contentArea.innerHTML += `
    <div class="section">
        <h2>🗣️ Mute Mode</h2>
        <p>Type your message and we'll speak it aloud for you!</p>
        <input type="text" id="muteText" placeholder="Type your message here" />
        <button onclick="speakTyped()">🔊 Speak</button>
    </div>
    `;
}
};

function speak(text) {
const utter = new SpeechSynthesisUtterance(text);
speechSynthesis.speak(utter);
}

function speakTyped() {
const text = document.getElementById("muteText").value;
if (text.trim() !== "") {
    speak(text);
}
}
