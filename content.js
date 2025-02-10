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

// Utility: Get a random quote from the array.
function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
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

    const quote = getRandomQuote();
    // Replace the inner content with a simple widget.
    element.innerHTML = `
    <div class="adfriend-replacement" style="border: 1px solid #ccc; padding: 10px; background: #f9f9f9; text-align: center;">
      <p style="margin: 0; font-size: 16px;">${quote}</p>
    </div>`;

    // Adjust styles further if needed (e.g., remove background images, adjust height, etc.)
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
