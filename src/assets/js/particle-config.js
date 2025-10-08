const particleConfig = {
  particles: {
    number: {
      value: 60,
      density: { enable: true, value_area: 800 },
    },
    color: { value: "#ffffff" },
    shape: {
      type: "rectangle",
      stroke: { width: 0, color: "#000000" },
    },
    opacity: { value: 0.5, random: false },
    size: { value: 5, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.5,
      width: 1,
    },
    move: {
      enable: true,
      speed: 4,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 },
    },
  },
  retina_detect: true,
};

export default particleConfig;