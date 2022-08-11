document.head.insertAdjacentHTML(
  "beforeend",
  `<style>video{transform:scale(1.5) rotate(270deg)}</style>`
);
chrome.storage.onChanged.addListener(function (changes, namespace) {
  const count = changes.count.newValue;
  console.log(count, changes);

  document.head.insertAdjacentHTML(
    "beforeend",
    `<style>video{transform:scale(${count}) rotate(270deg)}</style>`
  );
});
