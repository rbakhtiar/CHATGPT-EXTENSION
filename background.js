
"use strict";

// Open ChatGPT when the extension is installed.
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === "install") {
    chrome.tabs.create({
      url: "https://chatgpt.com/"
    });
  }
});
