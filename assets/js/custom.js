gsap.registerPlugin(ScrollTrigger);

const steps = document.querySelectorAll(".step");
const img = document.getElementById("scrolly-img");

steps.forEach(step => {
  ScrollTrigger.create({
    trigger: step,
    start: "top center",
    end: "bottom center",
    onEnter: () => activate(step),
    onEnterBack: () => activate(step)
  });
});

function activate(step) {
  const imgName = step.dataset.img;
  img.src = `/assets/images/${imgName}`;

  steps.forEach(s => s.classList.remove("active"));
  step.classList.add("active");
}
