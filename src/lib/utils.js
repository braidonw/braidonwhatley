export const scrollTo = (selector) => {
  const yOffset = -40;
  if (selector !== "top") {
    const element = document.querySelector(selector);
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  } else {
    const y = 0 + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};
