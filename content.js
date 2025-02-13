// AdFriend Content Script

// Define an array of ad selectors that target common ad element patterns.
const adSelectors = [
  'iframe[class*="ads"]',
  'iframe[src*="ads"]',
  'iframe[id*="ads"]',
  'iframe[aria-label*="ad"]',
  'img[class*="ads_"]',
  'img[id*="ads_"]',
  'img[id*="ads-"]',
  'img[src*="_ads_"]',
];

// Define an array of motivational quotes for replacement content.
const quotes = [
  "Believe in yourself!",
  "Stay positive, work hard, make it happen.",
  "You are capable of amazing things!",
  "Dream big and dare to fail.",
  "Every day is a new beginning.",
  "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  "Do something today that your future self will thank you for.",
  "The best way to predict your future is to create it.",
  "Life is 10% what happens to you and 90% how you react to it.",
  "The biggest adventure you can take is to live the life of your dreams.",
  "You miss 100% of the shots you don't take.",
  "Believe you can and you're halfway there."
];

const funFacts = [
  "Bananas are berries, but strawberries aren't!",
  "Honey never spoils. Archaeologists have found pots of it in ancient Egyptian tombs still safe to eat!",
  "Octopuses have three hearts and blue blood!",
  "Wombat poop is cube-shaped to stop it from rolling away!",
  "There’s a species of jellyfish that can live forever by reverting to its juvenile form!",
  "A cloud can weigh more than a million pounds!",
  "The Eiffel Tower can grow taller in the summer due to heat expansion!",
  "A group of flamingos is called a 'flamboyance'!",
  "Sharks predate trees—they've been around for over 400 million years!",
  "Butterflies can taste with their feet!",
  "Water can boil and freeze at the same time under the right conditions—this is called the 'triple point'!",
  "Sloths can hold their breath longer than dolphins—up to 40 minutes!"
];

const riddles = [
  { question: "The more you take, the more you leave behind. What am I?", answer: "Footsteps" },
  { question: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?", answer: "An echo" },
  { question: "The more of me you take, the more you leave behind. What am I?", answer: "A hole" },
  { question: "What has to be broken before you can use it?", answer: "An egg" },
  { question: "I am always hungry, I must always be fed. The thing I touch will soon turn red. What am I?", answer: "Fire" },
  { question: "What has cities, but no houses; forests, but no trees; and rivers, but no water?", answer: "A map." },
  { question: "The more you use me, the more you leave behind. What am I?", answer: "An eraser." },
  { question: "I have hands but no arms, a face but no eyes. What am I?", answer: "A clock." },
  { question: "I am not alive, but I can grow. I don’t have lungs, but I need air. What am I?", answer: "A fire" },
  { question: "I have keys but open no locks. I have space but no room. You can enter but not go outside. What am I?", answer: "A keyboard." },
  { question: "I’m light as a feather, yet the strongest person can’t hold me for much longer than a minute. What am I?", answer: "Your breath." },
  { question: "What’s always coming but never arrives?", answer: "My motivation to exercise." }
];

const jokes = [
  { setup: "Why don’t skeletons fight each other?", punchline: "They don’t have the guts!" },
  { setup: "Why couldn’t the bicycle stand up by itself?", punchline: "It was two-tired!" },
  { setup: "What do you call fake spaghetti?", punchline: "An impasta!" },
  { setup: "Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field!" },
  { setup: "Why don’t eggs tell jokes?", punchline: "Because they might crack up!" },
  { setup: "What did the zero say to the eight?", punchline: "Nice belt!" },
  { setup: "What do you call cheese that isn’t yours?", punchline: "Nacho cheese!" },
  { setup: "Why can’t you give Elsa a balloon?", punchline: "Because she will let it go!" },
  { setup: "What kind of shoes do ninjas wear?", punchline: "Sneakers!" },
  { setup: "Why did the golfer bring an extra pair of pants?", punchline: "In case he got a hole in one!" },
  { setup: "How does the ocean say hi?", punchline: "It waves!" },
  { setup: "Why did the coffee file a police report?", punchline: "Because it got mugged." }
];

// Utility: Get a random item from the array.
function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function getRandomFact() {
  return funFacts[Math.floor(Math.random() * funFacts.length)];
}

function getRandomRiddle() {
  return riddles[Math.floor(Math.random() * riddles.length)];
}

function getRandomJoke() {
  return jokes[Math.floor(Math.random() * jokes.length)];
}

// Replace the ad element with positive content.
// We use a data attribute to mark elements already processed.
function replaceAd(element) {
  if (element.dataset.adfriendReplaced) {
      console.log("Skipping:", element);
      return; // Skip if already replaced.
  }
  console.log("Replacing Ad Element:", element);
  element.dataset.adfriendReplaced = "true";

  // Replace the inner content with a simple widget.
  chrome.storage.sync.get(["replacementType", "customMessage"], (data) => {
      let replacementContent = "";

      switch (data.replacementType) {
        case "quotes":
          replacementContent = `
          <div class="quote-container" style="font-family: Arial, sans-serif; padding: 10px; text-align: center; background-color: #f9f9f9; border-left: 5px solid #007BFF;">
          <div class="quote-title" style="font-size: 14px; font-weight: bold; color: #007BFF;">QUOTE OF THE DAY</div>
          <p class="quote-text" style="font-size: 16px; font-style: italic; margin: 10px 0;">“${getRandomQuote()}”</p>
         </div>
        `;
         break;

        case "facts":
          replacementContent = `
         <div class="funfact-container">
         <div class="funfact-header">🤔 DID YOU KNOW?</div> 
         <p class="funfact-text">${getRandomFact()}</p>
      
         </div>
        `;
          break;
        case "riddles":
          const riddle = getRandomRiddle();
          replacementContent = `
          <div class="riddle-box">
          <div class="riddle-header">🤔 CAN YOU SOLVE THIS?</div>
          <p class="riddle-question">${riddle.question}</p>
          <p class="riddle-answer">Show answer <span>${riddle.answer}</span></p>
          </div>`;
          break;
        case "jokes":
          const joke = getRandomJoke();
          replacementContent = `
          <div class="joke-container">
          <div class="joke-header">😂 LAUGH BREAK 😂</div>
          <p class="joke-setup">${joke.setup}</p>
          <p class="joke-punchline">${joke.punchline}</p>
          </div>`;
    break;
        case "empty":
          replacementContent = "";
          break;
        case "solid":
          replacementContent = `
    <div class="solid-placeholder"></div>`;
          break;
        case "custom":
          replacementContent = `
          <div class="custom-message-box">
      <div class="custom-message-title">🌟🌟🌟</div>
      <p class="custom-message-content">${data.customMessage || "Your personalized content goes here!"}</p>
    </div>`;
          break;
        default:
          replacementContent = `<p style="font-size: 16px; line-height: 1.5; font-weight: 500; color: #111827; background-color: #F9FAFB;">Ad Blocked</p>`;
      };
      element.innerHTML = `<div class="adfriend-replacement" style="font-family: Arial, sans-serif; text-align: center; padding: 10px;">${replacementContent}</div>`;
    });
}

// Scan the document for ad elements and replace them.
function detectAds() {
  console.log("Detecting Ads...");
  adSelectors.forEach(selector => {
      console.log("Checking selector:", selector);
      const adElements = document.querySelectorAll(selector);
      adElements.forEach(element => {
          parent = element.closest('div');
          console.log("Ad Element Detected:", element, "Parent:", parent);
          if (parent) {
              replaceAd(parent);
          }
      });

      const adContainers = document.querySelectorAll('div[class*="ad"] > iframe, div[class*="ad"] > img');
      adContainers.forEach(adDiv => {
          if (adDiv && !adDiv.dataset.adfriendReplaced) {
              console.log("Detected ad container with iframe/img:", adDiv);
              replaceAd(adDiv);
          }
      });
  });
}

// Set up a MutationObserver to monitor for new ad elements inserted into the DOM.
function setupMutationObserver() {
  let timeout;

  const observer = new MutationObserver(() => {
      console.log("Mutation detected, debouncing detectAds call...");

      clearTimeout(timeout);
      // Debounce to avoid running detectAds too frequently
      timeout = setTimeout(() => {
          console.log("Debounce timeout reached, calling detectAds()");
          detectAds();
      }, 100);
  });
  observer.observe(document.body, { childList: true, subtree: true });
  console.log("Mutation Observer is now observing document.body");
}

// Run detection and set up the observer.
console.log("AdFriend content script loaded");
detectAds();
setupMutationObserver();
console.log("Ad detection and observer initialized.");
