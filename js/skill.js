
window.onload = function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links li a');

  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
    
    // Verificar si el texto del enlace excede el ancho del contenedor después de hacer clic en el botón de menú
    navItems.forEach(item => {
      if (item.offsetWidth > navLinks.offsetWidth) {
        item.style.display = 'none';
      }
    });
  });

  navItems.forEach(item => {
    item.addEventListener('click', function() {
      navLinks.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });
};




//certificados
const certificates = [
  {
    name: "DESARROLLO DE APLICACIONES CON MANEJO DE DATOS EN LA MEMORIA- JAVA",
    institution: "SENA",
    year: "2023",
    description: "Aprender a crear aplicaciones Java que almacenan y manipulan datos en la memoria principal del computador, mejorando el rendimiento de la aplicación.",
    modality: "Virtual",
    pdfUrl: "../pdf/DESARROLLO DE APLICACIONES CON MANEJO DE DATOS EN LA MEMORIA- JAVA.pdf",
  },
  {
    name: "MANEJO DE HERRAMIENTAS MICROSOFT OFFICE 2016_EXCEL",
    institution: "SENA",
    year: "2022",
    description: "Manejo de Herramientas Microsoft Office 2016 Excel del SENA te proporciona las habilidades necesarias para dominar Excel 2016. Aprenderás a crear hojas de cálculo, utilizar fórmulas y funciones, generar gráficos y realizar muchas otras tareas útiles. Este curso es una herramienta invaluable para organizar, analizar y presentar datos de manera eficiente y efectiva.",
    modality: "Virutal",
    pdfUrl: "../pdf/MANEJO DE HERRAMIENTAS MICROSOFT OFFICE 2016_EXCEL.pdf",
  },
  {
    name: "Tecnico en sistema",
    institution: "Sena",
    year: "2019",
    description: "Curso enfoca en mantener, brindar soporte y gestionar sistemas informáticos para asegurarse de que funcionen correctamente y de manera segura",
    modality: "Modalidad del curso (presencial, virtual, semipresencial, etc.)",
    pdfUrl: "../pdf/TecnicoSistema.pdf"
  },
  // Agrega más objetos para más certificados
];

const certificatesContainer = document.getElementById("CertificacionId");

certificates.forEach(certificate => {
  const certificateItem = document.createElement("div");
  certificateItem.classList.add("certificate-item");

  certificateItem.innerHTML = `
    <h2 style="text-align: center;">${certificate.name}</h2>
    <p><strong>Institución:</strong> ${certificate.institution}</p>
    <p><strong>Año de Obtención:</strong> ${certificate.year}</p>
    <p><strong>Descripción:</strong> ${certificate.description}</p>
    <p><strong>Modalidad:</strong> ${certificate.modality}</p>
    <button class="preview-button" onclick="openModal('${certificate.pdfUrl}')">Ver Certificado</button>
  `;

  certificatesContainer.appendChild(certificateItem);
});

function openModal(pdfUrl) {
  var modal = document.getElementById("modal");
  var pdfViewer = document.getElementById("pdf-viewer");
  pdfViewer.src = pdfUrl;
  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}