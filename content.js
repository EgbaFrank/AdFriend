// Select all possible ad containers (modify if needed)
const adSelectors = [
    "iframe", "div[id*=ads]", "div[class*=ads]", "ins", "section[class*=advert]"
  ];
  
  function replaceAds() {
    adSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(ad => {
        if (!ad.classList.contains("adfriend-replaced")) {
          let replacement = document.createElement("div");
          replacement.classList.add("adfriend-message");
  
          // Add a set of random quotes or positive messages
          const quotes = [
            "✨ Stay Inspired! ✨",
            "🌟 Keep going, you're doing great! 🌟",
            "💪 Believe in yourself and keep pushing forward! 💪",
            "🌈 The best is yet to come! 🌈",
            "🌻 Let your light shine! 🌻",
            "✨ You are capable of amazing things! ✨"
          ];
  
          // Select a random quote
          const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
          replacement.innerText = randomQuote;
  
          // Apply inline styles for consistent appearance
          replacement.style.backgroundColor = "#A7C7E7"; // Soft Blue background
          replacement.style.color = "#333"; // Dark text for readability
          replacement.style.padding = "15px";
          replacement.style.borderRadius = "10px";
          replacement.style.textAlign = "center";
          replacement.style.fontSize = "16px";
          replacement.style.fontWeight = "bold";
          replacement.style.width = ad.clientWidth + "px";
          replacement.style.height = ad.clientHeight + "px";
          replacement.style.display = "flex";
          replacement.style.alignItems = "center";
          replacement.style.justifyContent = "center";
          replacement.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)"; // Soft shadow
  
          ad.replaceWith(replacement);
          replacement.classList.add("adfriend-replaced"); // Prevent duplicates
        }
      });
    });
  }
  
  // Run the function initially and on page updates
  replaceAds();
  setInterval(replaceAds, 3000); // Keep checking for new ads
  