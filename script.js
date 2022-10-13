console.log("Entro al archivo JS");
const bodyre = document.querySelector("body");

function btnCambiarColor()
{
    console.log("Entro al Boton");
    //setTimeout(cambiacolor,2000);
    setInterval(cambiacolor,3000);
}

function cambiacolor()
{
    console.log("Entro al Boton 2");
    const randomcolor = Math.floor(Math.random()*16777215).toString(16);
    bodyre.style.backgroundColor=`#${randomcolor}`;
}

