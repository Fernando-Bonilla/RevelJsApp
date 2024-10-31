
//Funcion que captura el contenido del textarea y lo descarga 
buttonSave = document.getElementById("button-download");
buttonSave.addEventListener("click", saveContent);
//let easyMDE = new EasyMDE({ element: document.getElementById('myTextarea') });

function saveContent() {

    //capturo el contenido del textArea    
    let content = easyMDE.value();

    if (content.length == 0) {
        alert("Editor vacio");
        return

    } else {        

        var blob = new Blob([content], { type: 'text/markdown' });
        var url = URL.createObjectURL(blob);

        console.log(blob);

        var a = document.createElement('a');
        a.href = url;
        a.download = "miArchivo.md";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url); // Clean up the URL object

    }   

}


let buttonLoad = document.getElementById("button-load");
buttonLoad.addEventListener("click", loadContent);

function loadContent() {

    console.log("entra a la func");

    let fileInput = document.getElementById("file-input");
    let file = fileInput.files[0];

    if (file) {
        let reader = new FileReader();
        reader.onload = function(e) {
            let content = e.target.result;
            easyMDE.value(content);
        }

        reader.readAsText(file);

        fileInput.value = "";

    } else {
        alert("Por favor, selecciona un archivo .md primero.");
    }



}