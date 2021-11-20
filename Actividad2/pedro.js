
    function textArea (){
    
        p = document.createElement("p")
        p.id = "p"
        ptext = document.createTextNode("Escriba sugerencias: ")
        p.appendChild(ptext)
        formulario.appendChild(p)
    
        elem = document.createElement('textarea');
        elem.className = "textarea"
        elem.cols = 40;
        elem.rows = 10;
        elem.placeholder = "Por favor, escriba aqui sus comentarios"
        formulario.appendChild(elem);

    }

  