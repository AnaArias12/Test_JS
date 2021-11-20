


function textArea (){

    var form = document.createElement("form") //creamos element form
    form.id = "form" //<form></form>
    form.name = "form"
    form.method = "post"
    form.action= ""

    document.body.appendChild(form);//agrego el element form a la pagina

    var table = document.createElement("table")//creamos tabla donde esta todo el cuerpo del form
    table.id = "table"

    form.appendChild(table); //agrego table como hjo del form


    p = document.createElement("p")
    p.id = "p"
    ptext = document.createTextNode("Escriba sugerencias: ")
    table.appendChild(p)
    p.appendChild(ptext)

    elem = document.createElement('textarea');
    elem.cols = 40;
    elem.rows = 10;
    table.appendChild(elem);


   

}






