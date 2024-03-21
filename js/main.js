const cursorInner = document.getElementById("cursor-inner");
const cursorOuter = document.getElementById("cursor-outer");
const links = document.querySelectorAll("a,label,button");

document.addEventListener("mousemove", (e) => {
  const { clientX: posX, clientY: posY } = e;

  cursorInner.style.left = `${posX}px`;
  cursorInner.style.top = `${posY}px`;

  cursorOuter.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 500, fill: "forwards" }
  );

  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      cursorInner.classList.add("hover");
      cursorOuter.classList.add("hover");
    });
    link.addEventListener("mouseleave", () => {
      cursorInner.classList.remove("hover");
      cursorOuter.classList.remove("hover");
    });
  });
});



let emptyArea = document.getElementById("emptyarea");
let mobileTogglemenu = document.getElementById("mobiletogglemenu");
const hamburgerMenu = () => {
  document.body.classList.toggle("stopscrolling");
  mobileTogglemenu.classList.toggle("show-toggle-menu");
  document
    .getElementById("burger-bar1")
    .classList.toggle("hamburger-animation1");
  document
    .getElementById("burger-bar2")
    .classList.toggle("hamburger-animation2");
  document
    .getElementById("burger-bar3")
    .classList.toggle("hamburger-animation3");
};

const hidemenubyli = () => {
  document.body.classList.toggle("stopscrolling");
  mobileTogglemenu.classList.remove("show-toggle-menu");
  document
    .getElementById("burger-bar1")
    .classList.remove("hamburger-animation1");
  document
    .getElementById("burger-bar2")
    .classList.remove("hamburger-animation2");
  document
    .getElementById("burger-bar3")
    .classList.remove("hamburger-animation3");
};

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(
  ".navbar .navbar-tabs .navbar-tabs-ul li"
);
const mobilenavLi = document.querySelectorAll(
  ".mobiletogglemenu .mobile-navbar-tabs-ul li"
);

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  mobilenavLi.forEach((li) => {
    li.classList.remove("activeThismobiletab");
    if (li.classList.contains(current)) {
      li.classList.add("activeThismobiletab");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("activeThistab");
    if (li.classList.contains(current)) {
      li.classList.add("activeThistab");
    }
  });
});

const openURL = () => {
  const url = "src/pdf/Shivam-Sharma.pdf";
  window.open(url, "_blank");
};

let mybutton = document.getElementById("backtotopbutton");
window.onscroll = () => {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

const scrolltoTopfunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

document.addEventListener(
  "contextmenu",
  (e) => {
    if (e.target.nodeName === "IMG") {
      e.preventDefault();
    }
  },
  false
);
