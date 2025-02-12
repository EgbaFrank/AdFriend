document.addEventListener("DOMContentLoaded", () => {
  const replacementType = document.getElementById("replacementType");
  const customMessageInput = document.getElementById("customMessage");
  const saveBtn = document.getElementById("saveBtn");

  // Load saved settings
  chrome.storage.sync.get(["replacementType", "customMessage"], (data) => {
    if (data.replacementType) {
      replacementType.value = data.replacementType;
      if (data.replacementType === "custom") {
        customMessageInput.style.display = "block";
        customMessageInput.value = data.customMessage || "";
      }
    }
  });

  // Show/hide custom message input
  replacementType.addEventListener("change", () => {
    customMessageInput.style.display = (replacementType.value === "custom") ? "block" : "none";
  });

  // Save settings
  saveBtn.addEventListener("click", () => {
    const selectedType = replacementType.value;
    const customMessage = customMessageInput.value.trim();

    chrome.storage.sync.set({ replacementType: selectedType, customMessage }, () => {
      console.log("Settings saved.");
      window.close();
    });
  });
});

