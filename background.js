chrome.runtime.onMessage.addListener((message) => {
    if (message.hasOwnProperty("hideRatings")) {
      chrome.storage.sync.set({ hideReviews: message.hideReviews });
      chrome.tabs.query({ url: "https://letterboxd.com/*" }, (tabs) => {
        tabs.forEach((tab) => {
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ["content.js"],
          });
        });
      });
    }
  });
  