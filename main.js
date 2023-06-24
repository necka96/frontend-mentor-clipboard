gsap.fromTo(
  "#logo",
  { x: -400, rotate: -360, opacity: 0 },
  { x: 0, rotate: 0, opacity: 1, duration: 1.5 }
);
gsap.fromTo("h1", { x: 400, opacity: 0 }, { x: 0, opacity: 1, duration: 1.5 });
gsap.fromTo(
  "header p",
  { scale: 0.7, opacity: 0 },
  { scale: 1, opacity: 1, duration: 1.5 }
);
gsap.fromTo(
  "header .button",
  { y: 400, opacity: 0 },
  { y: 0, opacity: 1, duration: 1.5 }
);
let timelineHeader = gsap.timeline({
  scrollTrigger: {
    trigger: "header",
    start: "300",
    end: "100%",
    scrub: 2,
  },
});

timelineHeader.fromTo(
  ".track h2",
  { x: 400, opacity: 0 },
  { x: 0, opacity: 1, duration: 1.5 }
);
timelineHeader.fromTo(
  ".track p",
  { scale: 0.7, opacity: 0 },
  { scale: 1, opacity: 1, duration: 1.5 }
);
timelineHeader.fromTo(
  ".track-image img",
  { width: "0" },
  { width: "100%", duration: 2 }
);
timelineHeader.fromTo(
  ".track-flex div",
  { x: "100%", opacity: 0 },
  { x: "0", opacity: 1, duration: 2, stagger: 0.5 }
);
let timelinTrack = gsap.timeline({
  scrollTrigger: {
    trigger: ".track",
    start: "500",
    end: "100%",
    scrub: 2,
  },
});
timelinTrack.fromTo(
  ".clipboard h2",
  { x: 400, opacity: 0 },
  { x: 0, opacity: 1, duration: 2 }
);
timelinTrack.fromTo(
  ".clipboard p",
  { scale: 0.7, opacity: 0 },
  { scale: 1, opacity: 1, duration: 1.5 }
);
timelinTrack.fromTo(
  ".clipboard img",
  { scale: 0.7, opacity: 0 },
  { scale: 1, opacity: 1, duration: 1.5 }
);
let timelineCliboard = gsap.timeline({
  scrollTrigger: {
    trigger: ".workflow",
    start: "top 80%",
    end: "bottom 100%",
    scrub: 2,
  },
});
timelineCliboard.fromTo(
  "#wf >  h2",
  { x: 400, opacity: 0 },
  { x: 0, opacity: 1, duration: 2 }
);

timelineCliboard.fromTo(
  ".workflow p",
  { scale: 0.7, opacity: 0 },
  { scale: 1, opacity: 1, duration: 2 }
);
timelineCliboard.fromTo(
  ".workflow .workflow-icons div",
  { y: -400, opacity: 0 },
  { y: 0, opacity: 1, duration: 2, stagger: 0.5 }
);

let timelineCliboardText = gsap.timeline({
  scrollTrigger: {
    trigger: "#cb",
    start: "top 100%",
    end: "bottom 90%",
    scrub: 2,
  },
});
timelineCliboardText.fromTo(
  "#cb h2",
  { x: 400, opacity: 0 },
  { x: 0, opacity: 1, duration: 2 }
);

timelineCliboardText.fromTo(
  "#cb p",
  { scale: 0.7, opacity: 0 },
  { scale: 1, opacity: 1, duration: 2 }
);
timelineCliboardText.fromTo(
  "#cb .button",
  { y: 400, opacity: 0 },
  { y: 0, opacity: 1, duration: 2 }
);

let timelineFooter = gsap
  .timeline({
    scrollTrigger: {
      trigger: "footer",
      start: "top 100%",
      end: "bottom 90%",
      scrub: 2,
    },
  })
  .fromTo(
    ".footer-container",
    { scale: 0.7, opacity: 0 },
    { scale: 1, opacity: 1, duration: 2, stagger: 0.5 }
  );
