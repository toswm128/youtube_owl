const number = document.querySelector(".number");
const Escroll = document.querySelector(".scroll");
const scrollTitle = document.querySelector(".scroll-title");

let count = 1.5;

const onScroll = (e) => {
  count = e.target.value / 25;
  scrollTitle.innerHTML = count;
  number.value = count;
  chrome.storage.sync.set({ count });
};

const onNumber = (e) => {
  count = e.target.value;
  Escroll.value = count * 25;
  scrollTitle.innerHTML = count;
  chrome.storage.sync.set({ count });
};

Escroll.addEventListener("input", onScroll);
number.addEventListener("input", onNumber);
