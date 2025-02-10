document.getElementById("changeMessage").addEventListener("click", () => {
    const messages = [
      "Keep pushing forward! 🚀",
      "You're stronger than you think! 💪",
      "Stay positive and focused! ✨",
      "One step at a time! 👣",
      "Dream big and go for it! 🌟"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("currentMessage").innerText = randomMessage;
  });
  