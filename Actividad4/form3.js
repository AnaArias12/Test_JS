
const URL_DESTINO = "http://localhost:5501/Actividad4/";

const RECURSO = "pizzas.json"

document.onload =  cargarTamaños(), cargarIngredientes()

function cargarTamaños(){
    //Cuando se produzca el evento pulsar en tamaños

let xmlHttp = new XMLHttpRequest()  //lo primero que hace es crear el elemento xmlhttp. Se encarga de hacer las peticiones al servidor.

    //función de callback

    //Esta funcion se va a ejecutar CADA VEZ que haya un cambio en la propiedad
    //"readyState"
    xmlHttp.onreadystatechange = function(){        
            if( this.readyState == 4){
            if(this.status == 200){//OK
                procesarRespuestaTa(this.responseText) //siempre nos va a llegar en formato texto
            } else {
                alert("[ERROR]")
            }
        }
    }

    xmlHttp.open('GET', URL_DESTINO + RECURSO, true); // utilizamos la función open (le decimos get porque vamos a hacer una petcion, accedemos a una URL y a un recurso concreto)
    xmlHttp.send(null)//no mandamos nada, estamos haciendo una peticion get.
  
  
 }

 function procesarRespuestaTa(jsonDoc) {
   
    var objetoJson =JSON.parse(jsonDoc); //parsemos el texto a json
    console.log(objetoJson);
    //formamos la tabla
    var table = "<tr><th>Tamaño</th><th>Precio</th></tr>";
    var arrayTamaño = objetoJson.CATALOG.TAMAÑO; //accedemos al catolo y al tamaño del objeto json
    for (let tam of arrayTamaño) {
        table += "<tr><td>" + tam.TAMANO + "</td>" + 
                   "<td>" + tam.PRECIO + "<tr><td>";
    }

    resultadoTamaño.innerHTML = table;
}


 function cargarIngredientes(){

    let xmlHttp = new XMLHttpRequest()  

    xmlHttp.onreadystatechange = function(){        
            if( this.readyState == 4){
            if(this.status == 200){
                procesarRespuestaIn(this.responseText) 
            } else {
                alert("[ERROR]")
            }
        }
    }

    xmlHttp.open('GET', URL_DESTINO + RECURSO, true); // utilizamos la función open (le decimos get porque vamos a hacer una petcion, accedemos a una URL y a un recurso concreto)
    xmlHttp.send(null)//no mandamos nada, estamos haciendo una peticion get.
  
  
 }

function procesarRespuestaIn(jsonDoc) {
   
    var objetoJson =JSON.parse(jsonDoc); //parsemos el texto a json
    console.log(objetoJson);
    //formamos la tabla
    var table = "<tr><th>Ingredientes</th><th>Precio</th></tr>";
    var arrayIngre = objetoJson.CATALOG.INGREDIENTES; //accedemos al catolo y al tamaño del objeto json
    for (let ing of arrayIngre) {
        table += "<tr><td>" + ing.INGREDIENTE + "</td>" + 
                   "<td>" + ing.PRECIO + "<tr><td>";
    }

    resultadoIngredientes.innerHTML = table;
}

function refrescarDatos(){



}

   


