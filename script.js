function animateLogo() {
  const nav = document.querySelector("nav");
  const docTitle = document.querySelector("#doc-title");
  nav.onmouseenter = (e) => docTitle.classList.add("nav-hover");
  nav.onmouseout = (e) => {
    const mouseOutNav = !nav.contains(e.relatedTarget);
    if (mouseOutNav) {
      docTitle.classList.remove("nav-hover");
    }
  };
}

function addClipboardBtns() {
  const containerCodeArr = Array.from(
    document.querySelectorAll(".container-code")
  );

  containerCodeArr.forEach((containerCode) => {
    containerCode.innerHTML += `<button class="clipboard-btn" title="Copy to clipboard">Copy</button>`;

    const clipboardBtn = containerCode.children[1];
    const preTagContent = containerCode.children[0].innerText;
    addClipboardEvent(clipboardBtn, preTagContent);
  });
}

function addClipboardEvent(clipboardBtn, preTagContent) {
  clipboardBtn.onclick = () => {
    navigator.clipboard.write(preTagContent);
    clipboardBtn.innerText = "Copied!";
    setTimeout(() => {
      clipboardBtn.innerText = "Copy";
    }, 3000);
  };
}

function setScrollEvents() {
  const scrollToTopBtn = document.querySelector("#scroll-to-top-btn");
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 800) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });
}

function addToggleThemeEvent() {
  const toggleThemeBtn = document.querySelector("#toggle-theme-btn");
  let darkMode = localStorage.getItem("darkMode");

  const enableDarkMode = () => {
    document.body.classList.add("dark-mode");
    toggleThemeBtn.classList.add("light-mode-icon");
    localStorage.setItem("darkMode", "enabled");
  };
  const disableDarkMode = () => {
    document.body.classList.remove("dark-mode");
    toggleThemeBtn.classList.remove("light-mode-icon");
    toggleThemeBtn.style.content = "dark_mode";
    localStorage.setItem("darkMode", null);
  };

  // Check local storage when page is loaded
  if (darkMode === "enabled") {
    enableDarkMode();
  }

  toggleThemeBtn.addEventListener("click", () => {
    // Update local storage variable before
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
}

function main() {
  setScrollEvents();
  addClipboardBtns();
  addToggleThemeEvent();

  const isMobileOrTouch =
    /Android|iPhone|Tablet|iPhone/i.test(navigator.userAgent) ||
    navigator.maxTouchPoints > 0;
  if (!isMobileOrTouch) {
    animateLogo();
  }
}
main();
