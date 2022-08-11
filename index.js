let isTrun = true;
let isLeft = true;
let count = 1.5;

let style = `<style>video{transform:scale(${count}) rotate(${
  isLeft ? "270deg" : "90deg"
})}</style>`;
const setStyle = () => {
  style = `<style>video{transform:scale(${count}) rotate(${
    isLeft ? "270deg" : "90deg"
  })}</style>`;
};

document.head.insertAdjacentHTML("beforeend", style);

chrome.storage.onChanged.addListener(function (changes) {
  if (changes.isTrun) {
    isTrun = changes.isTrun.newValue;
    if (isTrun) {
      document.head.insertAdjacentHTML("beforeend", style);
    } else {
      document.head.insertAdjacentHTML(
        "beforeend",
        `<style>video{transform:scale(1) rotate(0deg)}</style>`
      );
    }
  }
  if (changes.count) {
    count = changes.count.newValue;
    setStyle();

    isTrun && document.head.insertAdjacentHTML("beforeend", style);
  }
  if (changes.isLeft) {
    isLeft = changes.isLeft.newValue;
    setStyle();
    isTrun && document.head.insertAdjacentHTML("beforeend", style);
  }
});
