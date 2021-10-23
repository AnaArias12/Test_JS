


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


    elem = document.createElement('textarea');
    elem.cols = 50;
    elem.rows = 20;
    table.appendChild(elem);
      
}