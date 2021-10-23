/*Campos de texto donde poner el DNI, el nombre y los apellidos, la dirección y el teléfono.
Dos radio button, con 4 opciones a elegir
Cinco checkbox diferentes
2 imágenes
Un campo select
Un text area*/

function cargar(){
     
    var form = document.createElement("form") //creamos element form
    form.id = "form" //<form></form>
    form.name = "form"
    form.method = "post"
    form.action= ""

    document.body.appendChild(form);//agrego el element form a la pagina

    var table = document.createElement("table")//creamos tabla donde esta todo el cuerpo del form
    table.id = "table"

    form.appendChild(table); //agrego table como hjo del form

    


        //CAMPOS DE TEXTO

        //creo DNI
        var pdni = document.createElement("p")//creo p
        pdni.id = "pdni"
        table.appendChild(pdni)
        var tdni = document.createTextNode("DNI: ")
        pdni.appendChild(tdni)
        var input = document.createElement("input");
        input.type = "text";
        input.placeholder = "DNI"
        pdni.appendChild(input);
        
        //creo nombre
        var pnombre = document.createElement("p")//creo p
        pnombre.id = "pnombre"
        table.appendChild(pnombre)
        var tnombre = document.createTextNode("Nombre: ")
        pnombre.appendChild(tnombre)
        var input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Nombre"
        input.className = "css-class-name"; // set the CSS class
        pnombre.appendChild(input);
    

        //creo apellidos
        var pape = document.createElement("p")//creo p
        pape.id = "pape"
        table.appendChild(pape)
        var tape = document.createTextNode("Apellidos: ")
        pape.appendChild(tape)
        var input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Apellidos"
        pape.appendChild(input);

        //creo direccion
        var pdi = document.createElement("p")//creo p
        pdi.id = "pdi"
        table.appendChild(pdi)
        var tdi = document.createTextNode("Dirección: ")
        pdi.appendChild(tdi)
        var input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Dirección"
        pdi.appendChild(input);

        //creo telefono
        var pte = document.createElement("p")//creo p
        pte.id = "pte"
        table.appendChild(pte)
        var tte = document.createTextNode("Teléfono: ")
        pte.appendChild(tte)
        var input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Teléfono"
        pte.appendChild(input);

    

   /* RADIO1*/

    var p = document.createElement("p")
    p.id = "p"
    table.appendChild(p)
    var radiotext = document.createTextNode("Escoja su destino favorito: ")
    p.appendChild(radiotext)

    //buton1
    var input = document.createElement("input");
    input.type ="radio"
    p.appendChild(input);
    var p1 = document.createElement(p1) //creo p
    p1.id = "p1"
    p.appendChild(p1)
    var opcion1 = document.createTextNode("Singapur")
    p1.appendChild(opcion1)


    //buton 2
    var input = document.createElement("input");
    input.type ="radio"
    p.appendChild(input);
    var p2 = document.createElement(p2) //creo p
    p2.id = "p2"
    p.appendChild(p2)
    var opcion2 = document.createTextNode("Suecia")
    p2.appendChild(opcion2)


    //buton3
    var input = document.createElement("input");
    input.type ="radio"
    p.appendChild(input);
    var p3 = document.createElement(p3) //creo p
    p3.id = "p3"
    p.appendChild(p3)
    var opcion3 = document.createTextNode("Australia")
    p3.appendChild(opcion3)

    //buton4

    var input = document.createElement("input");
    input.type ="radio"
    p.appendChild(input);
    var p4 = document.createElement(p4) //creo p
    p4.id = "p1"
    p.appendChild(p4)
    var opcion4 = document.createTextNode("México")
    p4.appendChild(opcion4)




    /* RADIO2*/

    var p = document.createElement("p")
    p.id = "p"
    table.appendChild(p)
    var radiotext = document.createTextNode("Escoja duración de su viaje: ")
    p.appendChild(radiotext)

    //buton1
    var input = document.createElement("input");
    input.type ="radio"
    p.appendChild(input);
    var p5 = document.createElement(p5) //creo p
    p5.id = "p1"
    p.appendChild(p5)
    var opcion5 = document.createTextNode("1 semana")
    p5.appendChild(opcion5)


    //buton 2
    var input = document.createElement("input");
    input.type ="radio"
    p.appendChild(input);
    var p6 = document.createElement(p6) //creo p
    p6.id = "p6"
    p.appendChild(p6)
    var opcion6 = document.createTextNode(" 1 mes")
    p6.appendChild(opcion6)


    //buton3
    var input = document.createElement("input");
    input.type ="radio"
    p.appendChild(input);
    var p7 = document.createElement(p7) //creo p
    p7.id = "p7"
    p.appendChild(p7)
    var opcion7 = document.createTextNode(" 3 meses")
    p7.appendChild(opcion7)

    //buton4

    var input = document.createElement("input");
    input.type ="radio"
    p.appendChild(input);
    var p8 = document.createElement(p8) //creo p
    p8.id = "p8"
    p.appendChild(p8)
    var opcion8 = document.createTextNode(" +365 ;)")
    p8.appendChild(opcion8)

    /*checkbox*/

    /*select*/



   
}



















