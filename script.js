document.addEventListener("DOMContentLoaded", () => {
  const profile = {
    name: "Cristian De Avila",
    location: "Barranquilla, Colombia",
    description: `"Front-end developer, HTML, CSS, JAVASCRIPT"`,
    photo: "./assets/images/FOTO WSE CRISTIAN.png"
  };

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/candresdeavila" },
    { name: "Frontend Mentor", url: "https://www.frontendmentor.io/profile/candresdeavila" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/cristiandeavilacd/" },
    { name: "Tiktok", url: "https://www.tiktok.com/@cristiandeavila.cd?_t=ZS-8wbBaUy2r7S&_r=1" },
    { name: "Instagram", url: "https://www.instagram.com/cristiandeavila.cd/#" }
  ];

  const container = document.querySelector(".main-container");

  if (!container) {
    console.error("No se encontró .main-container");
    return;
  }

  const textContainer = document.createElement("div");
  textContainer.classList.add("main-text-container");

  const picContainer = document.createElement("div");
  picContainer.classList.add("pic-container");

  const img = document.createElement("img");
  img.src = profile.photo;
  img.alt = "photo";
  picContainer.appendChild(img);

  const h1 = document.createElement("h1");
  h1.textContent = profile.name;

  const span = document.createElement("span");
  span.textContent = profile.location;

  const p = document.createElement("p");
  p.textContent = profile.description;

  textContainer.appendChild(picContainer);
  textContainer.appendChild(h1);
  textContainer.appendChild(span);
  textContainer.appendChild(p);

  const socialContainer = document.createElement("div");
  socialContainer.classList.add("social-links-container");

  socialLinks.forEach(link => {
    const button = document.createElement("button");
    button.textContent = link.name;
    button.addEventListener("click", () => {
      window.location.href = link.url;
    });
    socialContainer.appendChild(button);
  });

  container.appendChild(textContainer);
  container.appendChild(socialContainer);
});
