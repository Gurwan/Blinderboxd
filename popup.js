document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("toggle");
  
    chrome.storage.sync.get(["hideRatings"], (data) => {
      toggle.checked = data.hideRatings || false;
    });
  
    toggle.addEventListener("change", () => {
      const hideRatings = toggle.checked;
      chrome.storage.sync.set({ hideRatings }, () => {
        chrome.runtime.sendMessage({ hideRatings });
      });
    });
  });
  