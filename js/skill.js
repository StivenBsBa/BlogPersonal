window.onload = function () {
  // Datos de certificados
  const certificates = [
    {
      name: "Desarrollo de Aplicaciones con Manejo de Datos en la Memoria - JAVA",
      institution: "SENA",
      year: "2023",
      description:
        "Aprender a crear aplicaciones Java que almacenan y manipulan datos en la memoria principal del computador, mejorando el rendimiento de la aplicación.",
      modality: "Virtual",
    },
    {
      name: "Manejo de Herramientas Microsoft Office 2016 - Excel",
      institution: "SENA",
      year: "2022",
      description:
        "Este curso proporciona las habilidades necesarias para dominar Excel 2016. Aprenderás a crear hojas de cálculo, utilizar fórmulas y funciones, generar gráficos y realizar otras tareas útiles.",
      modality: "Virtual",
    },
    {
      name: "Técnico en Sistemas",
      institution: "SENA",
      year: "2019",
      description:
        "Curso enfocado en mantener, brindar soporte y gestionar sistemas informáticos para asegurar su correcto funcionamiento y seguridad.",
      modality: "Presencial",
    },
    // Agrega más objetos si es necesario
  ];

  const certificatesContainer = document.getElementById("CertificacionId");

  // Crear y mostrar cada certificado
  certificates.forEach((certificate) => {
    const certificateItem = document.createElement("div");
    certificateItem.classList.add("certificate-item");

    certificateItem.innerHTML = `
      <h3 style="text-align: center;">${certificate.name}</h3>
      <p><strong>Institución:</strong> ${certificate.institution}</p>
      <p><strong>Año de Obtención:</strong> ${certificate.year}</p>
      <p><strong>Descripción:</strong> ${certificate.description}</p>
      <p><strong>Modalidad:</strong> ${certificate.modality}</p>
    `;

    certificatesContainer.appendChild(certificateItem);
  });
};
