// JASON WEB - WITH COMMANDS + MEMORY (v1.0)

const input = document.getElementById("input");
const chat = document.getElementById("chat");
const API_KEY = "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"; // <- GANTI INI
const API_URL = "https://openrouter.ai/api/v1/chat/completions";
const model = "deepseek/deepseek-chat:free";
const voiceActivation = false;

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
    if (voiceActivation) {
      handleJasonReply(reply);
    } else {
      addMessage(reply, "bot")
    }

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

// ===== JASON VOICE MODE (v2.0) - With Pop-up Mic Mode =====

let isMuted = false;

function speak(text) {
  const utter = new SpeechSynthesisUtterance(text);
  utter.voice = speechSynthesis.getVoices().find(v => v.lang === "en-US"); // Ganti suara
  speechSynthesis.speak(utter);
  animateTalking(text);
}

function animateTalking(text) {
  const face = document.getElementById("jason-face");
  if (!face) return;
  face.src = "jason_talk.gif";
  setTimeout(() => {
    face.src = "jason_idle.png";
  }, Math.min(text.length * 50, 4000));
}

function toggleMute() {
  isMuted = !isMuted;
  const btn = document.getElementById("mute-btn");
  btn.innerText = isMuted ? "Unmute Voice" : "Mute Voice";
}

function handleJasonReply(reply) {
  addMessage(reply, "bot");
  speak(reply);
  const text = document.getElementById("subt");

  const wordCount = text.trim().split(/\s+/).length;

  if (wordCount > 50) {
  // Do something if the text has more than 50 words
    text.value = "Too Much Word To Be Shown";
  } else {
    text.value = reply;
  }
}

// ===== MIC MODE POPUP =====
function openMicPopup() {
  document.getElementById("mic-popup").style.display = "flex";
}

function closeMicPopup() {
  document.getElementById("mic-popup").style.display = "none";
}

function startListeningInPopup() {
  if (!('webkitSpeechRecognition' in window)) {
    alert("Speech recognition not supported in this browser.");
    return;
  }

  const recognition = new webkitSpeechRecognition();
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
  };

  recognition.onerror = function (event) {
    alert("Speech error: " + event.error);
    closeMicPopup();
  };

  recognition.start();
}

// ===== EXPORT/IMPORT MEMORY =====
function exportMemory() {
  const memory = localStorage.getItem("jason_memory") || "";
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
  reader.onload = function(e) {
    const content = e.target.result;
    localStorage.setItem("jason_memory", content);
    alert("Memory imported!");
  };
  reader.readAsText(file);
}