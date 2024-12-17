function toggleReviews(hideRatings) {
    const ratingsHistogram = document.querySelector(".section.ratings-histogram-chart");
    const ratingSpans = document.querySelectorAll("span.rating");
  
    if (hideRatings) {
      if (ratingsHistogram) ratingsHistogram.style.display = "none";
      if (ratingSpans) ratingSpans.forEach(span => span.style.display = "none");
    } else {
      if (ratingsHistogram) ratingsHistogram.style.display = "";
      if (ratingSpans) ratingSpans.forEach(span => span.style.display = "");
    }
  }
  
  function observePage() {
    const observer = new MutationObserver(() => {
      chrome.storage.sync.get(["hideRatings"], (data) => {
        toggleReviews(data.hideRatings);
      });
    });
  
    observer.observe(document.body, { childList: true, subtree: true });
  }
  
  chrome.storage.sync.get(["hideRatings"], (data) => {
    toggleReviews(data.hideRatings);
    observePage();
  });
  