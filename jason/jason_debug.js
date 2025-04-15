// JASON WEB - WITH COMMANDS + MEMORY (v1.0)

const input = document.getElementById("input");
const chat = document.getElementById("chat");
const API_KEY = "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"; // <- GANTI INI
const API_URL = "https://openrouter.ai/api/v1/chat/completions";
const model = "deepseek/deepseek-chat:free";

// ===== Memory Management =====
function loadMemory() {
  return localStorage.getItem("jason_memory") || "";
}

function saveMemory(fact) {
  const current = loadMemory();
  const updated = current + "\n" + fact;
  localStorage.setItem("jason_memory", updated);
}

function saveMemoryDirect(newMemory) {
  localStorage.setItem("jason_memory", newMemory);
}

function findRemember(text) {
  const pattern = /remember:(.*?)(?:$|\n)/gi;
  const matches = [...text.matchAll(pattern)];
  return matches.map(m => m[1].trim());
}

// ===== Message UI =====
function addMessage(text, role) {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble", role);
  bubble.innerText = text;
  chat.appendChild(bubble);
  chat.scrollTop = chat.scrollHeight;
}

// ===== Command Handler =====
function handleCommand(commandText) {
  if (commandText.startsWith("/remember ")) {
    const fact = commandText.replace("/remember ", "").trim();
    if (fact) {
      saveMemory("AI Memory: " + fact);
      addMessage("Got it! [MEMORY SAVED]", "bot");
    } else {
      addMessage("Nothing to remember.", "bot");
    }
    return true;
  }
  return false;
}

// ===== Main Chat Handler =====
input.addEventListener("keydown", async (e) => {
  if (e.key === "Enter") {
    const userText = input.value.trim();
    if (!userText) return;

    addMessage(userText, "user");
    input.value = "";
      
      const border = document.getElementById("chat");
      border.style.opacity = 1;

    if (handleCommand(userText)) return; // Handle command

    const memory = loadMemory();
    const messages = [
      {
        role: "system",
        content: `You are Jason. Talk casually. Here's your memory:\n${memory || "No memory yet."}`
      },
      { role: "user", content: userText }
    ];

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ model: model, messages: messages })
    });

    const data = await response.json();
    const reply = data?.choices?.[0]?.message?.content || "Jason failed to reply.";
    addMessage(reply, "bot");

    const memories = findRemember(reply);
    memories.forEach(fact => saveMemory("AI Memory: " + fact));
  }
});

// ===== Memory UI =====
function toggleMemory() {
  const section = document.getElementById("memory-section");
  const editor = document.getElementById("memory-editor");
  const saveBtn = document.getElementById("save-btn");
  section.style.display = section.style.display === "none" ? "block" : "none";
  editor.value = loadMemory();
  editor.readOnly = true;
  saveBtn.style.display = "none";
}

function editMemory() {
  const editor = document.getElementById("memory-editor");
  const saveBtn = document.getElementById("save-btn");
  editor.readOnly = false;
  saveBtn.style.display = "inline-block";
}

function saveMemoryEditor() {
  const editor = document.getElementById("memory-editor");
  const newMemory = editor.value;
  saveMemoryDirect(newMemory);
  editor.readOnly = true;
  document.getElementById("save-btn").style.display = "none";
  alert("Memory saved!");
}

// ===== JASON VOICE MODE (v1.0) =====

let isMuted = false;

function speak(text) {
  if (isMuted) return;
  const utter = new SpeechSynthesisUtterance(text);
  utter.voice = speechSynthesis.getVoices().find(v => v.lang === "en-US");
  speechSynthesis.speak(utter);
  animateTalking(text);
}

function animateTalking(text) {
  const face = document.getElementById("jason-face");
  if (!face) return;

  face.src = "visual/jason_talk.gif"; // Ganti ke animasi bicara
  setTimeout(() => {
    face.src = "visual/jason_idle.png"; // Balik ke idle setelah selesai
  }, Math.min(text.length * 50, 4000));
}

function toggleMute() {
  isMuted = !isMuted;
  const btn = document.getElementById("mute-btn");
  btn.innerText = isMuted ? "Unmute Voice" : "Mute Voice";
}

function startListening() {
  if (!('webkitSpeechRecognition' in window)) {
    alert("Speech recognition not supported in this browser.");
    return;
  }

  const recognition = new webkitSpeechRecognition();
  recognition.lang = "id-ID"; // ganti ke en-US kalau mau English
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = function (event) {
    const voiceText = event.results[0][0].transcript;
    input.value = voiceText; // Masukkan ke input
    input.focus(); // Fokus ke input
  };

  recognition.onerror = function (event) {
    alert("Speech error: " + event.error);
  };

  recognition.start();
}

// Panggil fungsi ini setelah Jason menjawab
function handleJasonReply(reply) {
  handleJasonReply(reply); // ← biar Jason langsung ngomong
  speak(reply);
}
isMuted = false;