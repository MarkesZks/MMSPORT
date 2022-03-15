gsap.registerPlugin(ScrollTrigger);



gsap.from(".animate_header2", {
  scrollTrigger: ".animate_header2",
    duration: 1,
    opacity: 0,
    y: -50,
    stagger: 0.5,
    
});
