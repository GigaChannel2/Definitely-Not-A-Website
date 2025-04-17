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

function rotateApiKey() {
  currentKeyIndex++;
  const keys = getApiKeys();
  if (currentKeyIndex >= keys.length) {
    currentKeyIndex = 0; // Reset to first key
    addMessage("Jason: All API keys exhausted, rotating back...", "bot");
  }
  return keys[currentKeyIndex];
}

function getApiKeys() {
  const stored = localStorage.getItem("jason_apiKey");
  return stored ? stored.split(',').map(k => k.trim()) : apiKeys;
}

function getCurrentApiKey() {
  return getApiKeys()[currentKeyIndex];
}

function handleJasonReply(reply) {
  addMessage(reply, "bot");
  speak(reply);
}

async function fetchJasonReply(userInput) {
  try {
    const apiKey = getCurrentApiKey();
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-chat:free",
        messages: [{ role: "user", content: userInput }],
      }),
    });
    
    if (response.status === 401 || response.status === 429) {
        addMessage("Token Error: Fixing...", "bot");
        const nextKey = rotateApiKey();
        fetchJasonReply(userInput); // panggil ulang pake key baru
        return;
      }
    
    console.log("Current API key:", apiKey);
    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "(no reply)";
    handleJasonReply(reply);
  } catch (err) {
    addMessage("Jason error: " + err.message, "bot");
  }
}

document.getElementById("next-key-btn").addEventListener("click", () => {
  currentKeyIndex++;
  const keys = getApiKeys();
  if (currentKeyIndex >= keys.length) currentKeyIndex = 0;

  const newKey = getCurrentApiKey();
  console.log("Switched to API key:", newKey);
  addMessage("System: Changed To Next API Key", "bot");
});
/*
function getCurrentApiKey() {
  return API_KEYS[currentKeyIndex];
}

function rotateApiKey() {
  currentKeyIndex++;
  if (currentKeyIndex >= API_KEYS.length) {
    addMessage("Jason: Semua API key habis, bos.", "bot");
    return null;
  }
  addMessage("Jason: Mengganti ke API key cadangan...", "bot");
  return getCurrentApiKey();
}

async function fetchJasonReply(userInput) {
  const apiKey = getCurrentApiKey();
  const url = "https://api.openai.com/v1/chat/completions";

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  };

  const body = JSON.stringify({
    model: model,
    messages: [{ role: "user", content: userInput }],
  });

  try {
    const response = await fetch(API_URL, {
      method: "POST", headers, body
    });
    const data = await response.json();

    if (data.choices && data.choices[0]?.message?.content) {
      const reply = data.choices[0].message.content.trim();
      handleJasonReply(reply); // <-- PENTING
    }
  } catch (error) {
    const rotated = rotateApiKey();
    if (rotated) {
      fetchJasonReply(userInput); // coba lagi pake API key berikutnya
    } else {
      addMessage("Jason error: " + error.message, "jason");
    }
  }
}*/
// ===== Main Chat Handler =====
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const userInput = input.value.trim();
    if (!userInput) return;
    
    localStorage.getItem("jason_apiKey")

    addMessage(userInput, "user"); // tampilkan input di chat
    input.value = "";

    const messages = [
      { role: "user", content: userInput }
    ];
    
    const chat = document.getElementById("chat");
    chat.style.opacity = 1;

    fetchJasonReply(userInput); // ← Panggil Jason!
    handleCommand(userInput); // Cukup ini aja
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

function getGentlemanVoice() {
  const voices = speechSynthesis.getVoices();
  return voices.find(v =>
    v.name.toLowerCase().includes("brian") ||
    v.name.toLowerCase().includes("jarvis") ||
    (v.lang === "en-GB" && v.name.toLowerCase().includes("male"))
  ) || voices.find(v => v.lang === "en-GB") || voices[0];
}

function getDeepBritishVoice() {
  const voices = speechSynthesis.getVoices();

  // Urutan prioritas suara pria British
  return (
    voices.find(v => v.name.toLowerCase().includes("brian")) ||
    voices.find(v => v.name.toLowerCase().includes("ryan")) ||
    voices.find(v => v.name.toLowerCase().includes("jarvis")) ||
    voices.find(v => v.lang === "en-GB" && v.name.toLowerCase().includes("male")) ||
    voices.find(v => v.lang === "en-GB") ||
    voices[0]
  );
}

function speak(text, onFinish = null) {
  if (isMuted) return;

  const utter = new SpeechSynthesisUtterance(text);
  utter.voice = getDeepBritishVoice();
  utter.pitch = 0.75;    // Lebih berat
  utter.rate = 0.85;     // Tenang
  utter.volume = 1.0;

  if (onFinish && typeof onFinish === "function") {
    utter.onend = onFinish;
  }

  utter.onend = function() {
    startListeningInPopup();
    face.src = "visual/jason_idle.png";
  }
  speechSynthesis.speak(utter);
}

function toggleMute() {
  isMuted = !isMuted;
  const btn = document.getElementById("mute-btn");
  btn.innerText = isMuted ? "Unmute Voice" : "Mute Voice";
}

function handleJasonReply(reply) {
  addMessage(reply, "bot");
  if (voiceActivation) {
    speak(reply);
    const text = document.getElementById("subt");
    const wordCount = reply.trim().split(/\s+/).length;

    if (wordCount > 50) {
        text.textContent = "Too much word to be shown";
    } else {
        text.textContent = reply;
    }
  }
}

// ===== MIC MODE POPUP =====
function openMicPopup() {
  document.getElementById("mic-popup").style.display = "flex";
  voiceActivation = true;

  // Random response
  const line = voiceModeResponses[Math.floor(Math.random() * voiceModeResponses.length)];
  speak(line);
}

function closeMicPopup() {
  document.getElementById("mic-popup").style.display = "none";
  voiceActivation = false;

  if (recognition) {
    recognition.abort();
    recognition = null;
    console.log("Speech recognition aborted.");
  }
}

window.speechSynthesis.onvoiceschanged = () => {
  const voices = speechSynthesis.getVoices();

  if (typeof addMessage !== "function") {
    console.warn("addMessage not ready yet.");
    return;
  }
/*
  if (voices.length === 0) {
    addMessage("Jason: Tidak ada suara ditemukan.", "bot");
    return;
  }

  addMessage("Jason: Suara yang tersedia:", "bot");
  voices.forEach((voice, i) => {
    addMessage(`${i + 1}. ${voice.name} (${voice.lang})`, "bot");
  });*/
};

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
  };

  recognition.onerror = function (event) {
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