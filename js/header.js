window.onload = function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  // Asegúrate de que los elementos existen
  if (!menuToggle || !navLinks) {
    console.error("Elementos no encontrados: ", { menuToggle, navLinks });
    return; // Salir si no se encuentran los elementos
  }

  // Función para manejar el cambio de tamaño de la ventana
  function handleResize() {
    if (window.innerWidth > 600) {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", false);
    }
  }

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
    menuToggle.setAttribute(
      "aria-expanded",
      navLinks.classList.contains("active")
    );
  });

  const navItems = document.querySelectorAll(".nav-links li a");
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", false);
    });
  });

  // Agregar el listener para el evento resize
  window.addEventListener("resize", handleResize);
};
