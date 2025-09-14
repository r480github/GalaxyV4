gsap.fromTo(
  ".app1",
  {
    opacity: 0,
    x: -40,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1.2,
    ease: "expo.inOut",
  }
);
gsap.fromTo(
  ".app2",
  {
    opacity: 0,
    y: -20,
  },
  {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "expo.inOut",
  }
);
gsap.fromTo(
  ".app3",
  {
    opacity: 0,
    y: 30,
  },
  {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "expo.inOut",
  }
);
gsap.fromTo(
  ".app4",
  {
    opacity: 0,
    x: -50,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1.2,
    ease: "expo.inOut",
  }
);
gsap.to(".games", {
  opacity: 1,
  duration: 0.5,
  delay: 0.8,
});
gsap.fromTo(
  ".game",
  {
    opacity: 0,
    y: 20,
  },
  {
    delay: 0.5,
    stagger: 0.1,
    opacity: 1,
    y: 0,
    duration: 1,
  }
);
