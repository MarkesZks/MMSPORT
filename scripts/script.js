var splide = new Splide('.splide', {
    direction: 'ttb',
    height: '100vh',
    wheel: true,

});
splide.mount();
//animate
gsap.registerPlugin(ScrollTrigger);

gsap.from(".animate_carrs", {
    duration: 2,
    opacity: 0.1,
});



gsap.from(".animate_header", {
  scrollTrigger: ".animate_header",
    duration: 0.8,
    opacity: 0,
    y: -50,
    stagger: 0.3,
    
});

