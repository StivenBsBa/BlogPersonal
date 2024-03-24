document.getElementById("descargarBtn").addEventListener("click", function() {
    // URL del archivo PDF que deseas descargar
    var pdfUrl = "/js/Brayan.pdf";
    
    // Nombre del archivo PDF
    var pdfNombre = "Hola de vida Brayan.pdf";

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
