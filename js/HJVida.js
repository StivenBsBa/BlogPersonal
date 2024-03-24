document.getElementById("descargarLink").addEventListener("click", function(event) {
    // Evita el comportamiento predeterminado del enlace
    event.preventDefault();

    // URL del archivo PDF en Google Drive
    var pdfUrl = this.getAttribute("href");
    
    // Nombre del archivo PDF (puedes configurarlo si deseas)
    var pdfNombre = "documento.pdf";

    // Crea un enlace temporal
    var a = document.createElement("a");
    
    // Configura el enlace para el archivo PDF
    a.href = pdfUrl;
    a.download = pdfNombre;
    
    // Añade el enlace al cuerpo del documento
    document.body.appendChild(a);
    
    // Haz clic en el enlace para descargar el archivo
    a.click();
    
    // Elimina el enlace del cuerpo del documento
    document.body.removeChild(a);
});
