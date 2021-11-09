/*Nombre
Dirección
Teléfono
Email
Un radio button con el tamaño de la pizza, pudiendo ser pequeña, mediana o grande
4 Checkbox con los diferentes ingredientes de la pizza
Un botón de procesar el pedido*/

function cargar(){
     
    form = document.createElement("form") //creamos element form
    form.id = "form" //<form></form>
    form.name = "form"
    form.method = "post"
    form.action= "URL"

    document.body.appendChild(form);//agrego el element form a la pagina

    table = document.createElement("table")//creamos tabla donde esta todo el cuerpo del form
    table.id = "table"

    form.appendChild(table); //agrego table como hijo del form
           
        //creo nombre
        var pnombre = document.createElement("p")//creo p
        pnombre.id = "texto"
        table.appendChild(pnombre)
        var tnombre = document.createTextNode("Nombre: ")
        pnombre.appendChild(tnombre)
        var input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Nombre"
        input.className = "css-class-name"; // set the CSS class
        pnombre.appendChild(input);
    

        //creo direccion
        var pdi = document.createElement("p")//creo p
        pdi.id = "texto"
        table.appendChild(pdi)
        var tdi = document.createTextNode("Dirección: ")
        pdi.appendChild(tdi)
        var input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Dirección"
        pdi.appendChild(input);

        //creo telefono
        var pte = document.createElement("p")//creo p
        pte.id = "texto"
        table.appendChild(pte)
        var tte = document.createTextNode("Teléfono: ")
        pte.appendChild(tte)
        var input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Teléfono"
        pte.appendChild(input);
        
        //creo email
        var pem = document.createElement("p")//creo p
        pte.id = "texto"
        table.appendChild(pem)
        var tem = document.createTextNode("E-mail: ")
        pem.appendChild(tem)
        var input = document.createElement("input");
        input.type = "text";
        input.placeholder = "E-mail"
        pem.appendChild(input);
    

   /* RADIO*/

    var p = document.createElement("p")
    p.id = "p"
    table.appendChild(p)
    var radiotext = document.createTextNode("Tamaño: ")
    p.appendChild(radiotext)

    //button1
    var input = document.createElement("input");
    input.type ="radio"
    input.value = "pequeño"
    input.name = "tamaño"
    input.id = "tamaño_pe"
    p.appendChild(input);
    var p1 = document.createElement(p1) //creo p
    p1.id = "p1"
    p.appendChild(p1)
    var opcion1 = document.createTextNode("Pequeño")
    p1.appendChild(opcion1)


    //button 2
    var input = document.createElement("input");
    input.type ="radio"
    input.value = "mediano"
    input.name = "tamaño"
    input.id = "tamaño_me"
    p.appendChild(input);
    var p2 = document.createElement(p2) //creo p
    p2.id = "p2"
    p.appendChild(p2)
    var opcion2 = document.createTextNode("Mediano")
    p2.appendChild(opcion2)


    //button3
    var input = document.createElement("input");
    input.type ="radio"
    input.value = "grande"
    input.name = "tamaño"
    input.id = "tamaño_gr"
    p.appendChild(input);
    var p3 = document.createElement(p3) //creo p
    p3.id = "p3"
    p.appendChild(p3)
    var opcion3 = document.createTextNode("Grande")
    p3.appendChild(opcion3)

   
   //checkbox

    var pin = document.createElement("p")
    pin.id = "pin"
    table.appendChild(pin)
    var checkboxtext = document.createTextNode("Ingredientes: ")
    pin.appendChild(checkboxtext)

    //checkbox1

    var input = document.createElement("input");
    input.type ="checkbox"
    input.name = "ingredientes"
    input.value = "tomate"
    pin.appendChild(input);
    var p4 = document.createElement(p4) //creo p
    p4.id = "p4"
    pin.appendChild(p4)
    var ingre1 = document.createTextNode("Tomate")
    p4.appendChild(ingre1)

    //checkbox2

    var input = document.createElement("input");
    input.type ="checkbox"
    input.name = "ingredientes"
    input.value = "atun"
    pin.appendChild(input);
    var p5 = document.createElement(p5) //creo p
    p5.id = "p5"
    pin.appendChild(p5)
    var ingre2 = document.createTextNode("Atún")
    p5.appendChild(ingre2)

    //checkbox3
    var input = document.createElement("input");
    input.type ="checkbox"
    input.name = "ingredientes"
    input.value = "aceitunas"
    pin.appendChild(input);
    var p6 = document.createElement(p6) //creo p
    p6.id = "p6"
    pin.appendChild(p6)
    var ingre3 = document.createTextNode("Aceitunas")
    p6.appendChild(ingre3)

    //checkbox4
    var input = document.createElement("input");
    input.type ="checkbox"
    input.name = "ingredientes"
    input.value = "Albahaca"
    pin.appendChild(input);
    var p7 = document.createElement(p7) //creo p
    p7.id = "p7"
    pin.appendChild(p7)
    var ingre4 = document.createTextNode("Albahaca")
    p7.appendChild(ingre4)

    //procesar

    var input = document.createElement("input");
    input.type = "submit"
    input.value = "Enviar información"
    table.appendChild(input);

    

}
    //VALIDACION

    function validacion (){ 
        
        //validacion campos de texto
        console.log("validando los datos del formulario...")
        if (texto.value.trim() == "") {
            // Si no se cumple la condicion...
            alert('[ERROR] El campo debe de estar relleno');
            return false;
        }


        //validacion button

        tamaño = document.getElementsByName("tamaño");
            var seleccionado = false //partimos de que no ha seleccionado ninguno
            for(var i = 0; i < tamaño.length; i++){

                if(tamaño[i].checked){
                    seleccionado = true;
                    break;
                }
            }    

            if(!seleccionado) {
                alert('[ERROR] Debe seleccionar un tamaño');
                return false;
            }

        //validacion checkbox

        ingredientes = document.getElementsByName("ingredientes");
            for( var i= 0; i<ingredientes.length; i++){
                if(ingredientes[i].checked){
                    return true;
                }
                    
                alert("Debe seleccionar al menos 1 ingrediente");
                    return false;
            }

            alert("Mandamos el formulario!")
            return true;

    }

    window.onload = function(){
        form.onsubmit = validacion;

    }



    

    






    




















