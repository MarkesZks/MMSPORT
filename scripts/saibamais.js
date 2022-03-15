gsap.registerPlugin(ScrollTrigger);

gsap.from(".animacao_text_secao", {
    duration: 0.6,
    opacity: 0,
    y:-150,
    stagger: 0.4,
    delay: 0.5,
});

gsap.from(".animate_interior", {
  scrollTrigger: ".animate_interior",
    duration: 0.9,
    opacity: 0,
    x: -250,
    stagger: 0.4,
});

gsap.from(".animate_img", {
  scrollTrigger: ".animate_interior",
    duration: 0.8,
    opacity: 0,
    x: 200,
    stagger: 0.2,
    delay: 1
});

gsap.from(".anime_motor", {
    scrollTrigger: ".anime_motor",
    duration: 0.8,
    opacity: 0,
    x: -200,
    delay: 0.3,
    stagger: 0.2
});
gsap.from(".animate_txt_motor", {
  scrollTrigger: ".animate_txt_motor",
  duration: 0.8,
  opacity: 0,
  x: 200,
  delay: 0.3,
  stagger: 0.2
});