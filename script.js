// JS icon gif on nav hover
function isMobile() {
  return (
    /Android|iPhone/i.test(navigator.userAgent) || navigator.maxTouchPoints > 0
  );
}
const nav = document.querySelector("nav");
const docTitle = document.querySelector("#doc-title");
console.log(isMobile());
if (!isMobile()) {
  nav.onmouseenter = (e) => {
    docTitle.classList.add("nav-hover");
  };

  nav.onmouseout = (e) => {
    if (!nav.contains(e.relatedTarget)) {
      docTitle.classList.remove("nav-hover");
    }
  };
}
