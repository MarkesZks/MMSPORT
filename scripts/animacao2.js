gsap.registerPlugin(ScrollTrigger);



gsap.from(".animate_header3", {
  scrollTrigger: ".animate_header3",
    duration: 1,
    opacity: 0,
    y: -50,
    stagger: 0.5,
    
});
