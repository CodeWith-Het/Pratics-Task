// Animate navbar and logo
gsap.from(".jesper", {
  y: -50,
  opacity: 0,
  duration: 1
});

gsap.from(".nav-link ul li", {
  y: -30,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  delay: 0.3
});


// Animate hero image and text
gsap.from(".image", {
  x: -100,
  opacity: 0,
  duration: 1,
  delay: 0.5
});

gsap.from(".jesper-team h5", {
  x: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  delay: 0.6
});

gsap.from(".jesper-team p", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 1
});

gsap.from(".watching-stream h4", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  delay: 1.3
});
