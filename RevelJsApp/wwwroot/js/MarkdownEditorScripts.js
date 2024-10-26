
//Funcion que captura el contenido del textarea y lo descarga 
buttonSave = document.getElementById("button-download");
buttonSave.addEventListener("click", saveContent);
let easyMDE = new EasyMDE({ element: document.getElementById('myTextarea') });
function saveContent() {

    //capturo el contenido del textArea    
    let content = easyMDE.value();

    var blob = new Blob([content], { type: 'text/markdown' });
    var url = URL.createObjectURL(blob);

    var a = document.createElement('a');
    a.href = url;
    a.download = "miArchivo.md";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url); // Clean up the URL object

}