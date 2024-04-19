const btn = document.querySelector(".container__share-btn");
const share = document.querySelector(".container__share");
const bodyElem = document.querySelector("body");
const svgElem = document.querySelector(".container__share-btn svg");
btn.addEventListener("click", () => {
  share.classList.toggle("show-share");
  styling();
});
bodyElem.addEventListener("click", (event) => {
  if (!btn.contains(event.target)) {
    share.classList.remove("show-share");
  }
  styling();
});
function styling() {
  if (share.classList.contains("show-share")) {
    btn.style.backgroundColor = "hsl(214, 17%, 51%)";
    svgElem.style.fill = " hsl(0, 0%, 100%)";
  } else {
    btn.style.backgroundColor = "hsl(210, 46%, 95%)";
    svgElem.style.fill = "hsl(214, 17%, 51%)";
  }
}
