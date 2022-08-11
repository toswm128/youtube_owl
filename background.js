let count = 1;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ count });
});
