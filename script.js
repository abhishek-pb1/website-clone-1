var cursor = document.querySelector(".cursor");
var cursorBlur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove", (event) => {
  // console.log(event.x)
  cursor.style.left = event.x - 15 + "px";
  cursor.style.top = event.y - 15 + "px";
  cursorBlur.style.left = event.x - 150 + "px";
  cursorBlur.style.top = event.y - 150 + "px";
});

var allNavLinks = document.querySelectorAll("nav a");

allNavLinks.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    cursor.style.scale = 2;
    cursor.style.border = "1px solid white";
    cursor.style.backgroundColor = "transparent";
  });

  item.addEventListener("mouseleave", () => {
    cursor.style.scale = 1;
    cursor.style.border = "none";
    cursor.style.backgroundColor = "#a4d421";
  });
});

gsap.to("nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    markers: false,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "body",
    scroller: "body",
    markers: false,
    start: "top -25%",
    end: "top -60%",
    scrub: 2,
  },
});
