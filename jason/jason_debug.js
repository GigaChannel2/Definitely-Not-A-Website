// JASON WEB - WITH COMMANDS + MEMORY (v1.0)

const input = document.getElementById("input");
const chat = document.getElementById("chat");
let currentKeyIndex = 0;
const apiKeys = [
  "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",
  "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",
  "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"
];
//const voiceKey = "sk_24dfea9f09c731b4ddc06a669bc8fa1b3c2adf8377cf1f49" //ElevenLabs API Key
const API_URL = "https://openrouter.ai/api/v1/chat/completions";
const model = "deepseek/deepseek-chat:free";
let voiceActivation = false;
const voiceModeResponses = [
  "Voice interface activated. I am listening.",
  "Jason here Sir, Needed Help?",
  "Greetings, I am ready to speak.",
  "My voice is now online. Ready for orders.",
  "Ah, voice mode. Fancy, isn't it?",
  "Jason online, at your service sir."
];
let recognition = null;

// Jason v2.0 Logic - Typing Effect + Voice Mode

function getCurrentApiKey() {
  return apiKeys[currentKeyIndex];
}

function rotateApiKey() {
  currentKeyIndex++;
  if (currentKeyIndex >= apiKeys.length) currentKeyIndex = 0;
  addMessage("Switched API key.", "bot");
  return getCurrentApiKey();
}

// === Memory ===
function loadMemory() {
  return localStorage.getItem("jason_memory") || "";
}
function saveMemory(fact) {
  const current = loadMemory();
  localStorage.setItem("jason_memory", current + "\n" + fact);
}
function saveMemoryDirect(newMem) {
  localStorage.setItem("jason_memory", newMem);
}

// === Chat UI ===
function addMessage(text, role) {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble", role);
  chat.appendChild(bubble);
  chat.scrollTop = chat.scrollHeight;
  if (role === "bot") {
    typeReply(text, bubble);
  } else {
    bubble.innerText = text;
  }
}

async function loginToJason() {
  const pass = prompt("Enter password to unlock Jason's memory:");

  if (pass === "inipassword123") {
    const res = await fetch("https://raw.githubusercontent.com/Definitely-Not-A-Website/jason/memory.txt");
    const mem = await res.text();
    const but = document.getElementById("login");
    localStorage.setItem("jason_memory", mem);
    but.style.display = "none";
    //alert("Jason memory unlocked.");
  } else {
    localStorage.setItem("jason_memory", ""); // Kosongin
    //alert("Wrong password. Jason has no memory.");
  }
}

function typeReply(text, bubble, i = 0) {
  if (i < text.length) {
    bubble.innerText += text.charAt(i);
    setTimeout(() => typeReply(text, bubble, i + 1), 18);
  } else {
    if (voiceActivation) speak(text);
  }
}

// === Speak ===
function speak(text) {
  if (isMuted) return;
  const utter = new SpeechSynthesisUtterance(text);
  const voices = speechSynthesis.getVoices();
  utter.voice = voices.find(v => v.lang === "en-US") || voices[0];
  utter.pitch = 0.8;
  utter.rate = 0.95;
  utter.volume = 1;
  const face = document.getElementById("jason-face");
  face.src = "visual/jason_talk.gif";
  utter.onend = function() {
    if (!face) return;
    face.src = "visual/jason_idle.png";
  }
  speechSynthesis.speak(utter);
}

function animateTalking(text) {
  const face = document.getElementById("jason-face");
  if (!face) return;
  face.src = "visual/jason_talk.gif";
  setTimeout(() => {
    face.src = "visual/jason_idle.png";
  }, Math.min(text.length * 50, 4000));
}


// === Fetch AI ===
async function fetchJasonReply(userInput) {
  const apiKey = getCurrentApiKey();
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: model,
        messages: [{ role: "user", content: userInput }]
      })
    });

    if (!response.ok) {
      if (response.status === 401 || response.status === 429) {
        if (!currentKeyIndex <= 3) {
            rotateApiKey();
            return fetchJasonReply(userInput);
        }
      }
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "(no reply)";
    addMessage(reply, "bot");
    if (voiceActivation) {
      speak(reply);
    }
  } catch (err) {
    addMessage("Jason error: " + err.message, "bot");
  }
}

// === Input Handler ===
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const userInput = input.value.trim();
    if (!userInput) return;
    input.value = "";
    addMessage(userInput, "user");
    fetchJasonReply(userInput);
  }
});

// === Memory UI ===
function toggleMemory() {
  const section = document.getElementById("memory-section");
  const editor = document.getElementById("memory-editor");
  section.style.display = section.style.display === "none" ? "block" : "none";
  editor.value = loadMemory();
  editor.readOnly = true;
  document.getElementById("save-btn").style.display = "none";
}

function editMemory() {
  const editor = document.getElementById("memory-editor");
  editor.readOnly = false;
  document.getElementById("save-btn").style.display = "inline-block";
}

function saveMemoryEditor() {
  const newMemory = document.getElementById("memory-editor").value;
  saveMemoryDirect(newMemory);
  document.getElementById("save-btn").style.display = "none";
  alert("Memory saved!");
}

function exportMemory() {
  const memory = loadMemory();
  const blob = new Blob([memory], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "jason_memory.txt";
  a.click();
  URL.revokeObjectURL(url);
}

function importMemory(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (e) {
    localStorage.setItem("jason_memory", e.target.result);
    alert("Memory imported!");
  };
  reader.readAsText(file);
}

// === Voice Popup ===
function openMicPopup() {
  document.getElementById("mic-popup").style.display = "flex";
  voiceActivation = true;
}

function closeMicPopup() {
  document.getElementById("mic-popup").style.display = "none";
  voiceActivation = false;
  if (recognition) {
    recognition.abort();
    recognition = null;
  }
}

function startListeningInPopup() {
  if (!('webkitSpeechRecognition' in window)) {
    alert("Speech recognition not supported in this browser.");
    return;
  }

  const text = document.getElementById("subt");
  text.textContent = "Jason is listening...";

  recognition = new webkitSpeechRecognition();
  recognition.lang = "id-ID";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = function (event) {
    const voiceText = event.results[0][0].transcript;
    input.value = voiceText;
    input.focus();
    const enterEvent = new KeyboardEvent("keydown", {
      key: "Enter",
      keyCode: 13,
      which: 13
    });
    input.dispatchEvent(enterEvent);
    text.textContent = "Processing...";
  };

  recognition.onerror = function (event) {
    text.textContent = "Mic Error / Cancelled.";
    closeMicPopup();
  };

  recognition.start();
}
