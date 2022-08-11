let count = 1;
let isLeft = true;
let isTrun = true;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ count });
  chrome.storage.sync.set({ isLeft });
  chrome.storage.sync.set({ isTrun });
});
