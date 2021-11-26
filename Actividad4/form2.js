
/*const URL_DESTINO = "http://localhost:5500/09_AJAX/"*/

const RECURSO = "pizzas.json"

function cargarTamaños(){
    //Cuando se produzca el evento pulsar en tamaños

let xmlHttp = new XMLHttpRequest()  //lo primero que hace es crear el elemento xmlhttp. Se encarga de hacer las peticiones al servidor.

    //función de callback

    //Esta funcion se va a ejecutar CADA VEZ que haya un cambio en la propiedad
    //"readyState"
    xmlHttp.onreadystatechange = function(){        
            if( this.readyState == 4){
            if(this.status == 200){//OK
                procesarRespuesta(this.responseText)
            } else {
                alert("[ERROR]")
            }
        }
    }

    xmlHttp.open('GET', URL_DESTINO + RECURSO, true); // utilizamos la función open (le decimos get porque vamos a hacer una petcion, accedemos a una URL y a un recurso concreto)
    xmlHttp.send("null")//no mandamos nada, estamos haciendo una peticion get.
    console.log("responseText: "+xmlHttp.responseText);
  
 }




 /*function cargarIngredientes(){



    let xmlHttp = new XMLHttpRequest()  

    xmlHttp.open

    xmlHttp.send
}*/

