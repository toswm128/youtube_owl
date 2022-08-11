const number = document.querySelector(".number");
const Escroll = document.querySelector(".scroll");
const scrollTitle = document.querySelector(".scroll-title");
const trun = document.querySelector(".turn");
const trunTitle = document.querySelector(".turn-title");
const left = document.querySelector(".left");
const leftTitle = document.querySelector(".left-title");

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
const onTrun = (e) => {
  chrome.storage.sync.set({ isTrun: e.target.checked });
  trunTitle.innerText = e.target.checked ? "켜짐" : "꺼짐";
};
const onLeft = (e) => {
  chrome.storage.sync.set({ isLeft: e.target.checked });
  leftTitle.innerText = e.target.checked ? "켜짐" : "꺼짐";
};

number.addEventListener("input", onNumber);
Escroll.addEventListener("input", onScroll);
trun.addEventListener("change", onTrun);
left.addEventListener("change", onLeft);
