const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("start-animation");
    } else {
      entry.target.classList.remove("start-animation");
    }
  });
});

const elements = document.querySelectorAll(".fade-up");
elements.forEach((element) => observer.observe(element));

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.setAttribute('trigger', 'in');
    } else {
      entry.target.setAttribute('trigger', 'hover');
    }
  });
});

const lordIcons = document.querySelectorAll("lord-icon");
lordIcons.forEach((el) => observer2.observe(el));
