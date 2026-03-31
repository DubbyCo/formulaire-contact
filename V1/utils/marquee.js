export function initMarquee() {
  const marqueeItems = [
    "Vue.js",
    "·",
    "Nuxt.js",
    "·",
    "OWASP",
    "·",
    "Hebergement",
    "·",
    "Green IT",
    "·",
    "AppSec",
    "·",
    "Souveraineté",
    "·",
    "RGPD",
    "·",
  ];
  const band = [...marqueeItems, ...marqueeItems];
  const track = document.getElementById("marquee-track");
  band.forEach((word) => {
    const span = document.createElement("span");
    span.textContent = word;
    if (word === "·") span.classList.add("dot");
    track.appendChild(span);
  });

  const fragment = document.createDocumentFragment();

  [...track.children].forEach((node) => {
    fragment.appendChild(node.cloneNode(true));
  });

  track.appendChild(fragment);
}
