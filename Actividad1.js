console.log("=========== COMIENZO MEDIA DE 10 NUMEROS==============")

function mediaArray(){

    /*Realiza un programa en JavaScript que recorra un array de 10 números y 
calcule la media aritmética de diez números. Los números deben de estar 
comprendidos entre el 0 y 100, si se detectará algún número fuera de ese 
rango no se tendría en cuenta para su cálculo.*/
	
    var media = 0;
    var suma = 0;
    array = []
    array.length = 10;

    for(var i = 0; i < array.length; i++){

        array[i] = Math.random() * 100 + 1

        suma += array[i];
      
    }

     media = suma/10
	

	console.log("la media de los 10 números es: "+media);
}

mediaArray();

function obtenerModa(){






}

function ObtenerMediana(){

    var mediana = 0;
    var pos1 
    var pos2
    var num1
    var num2
    var pos_central

    if (array.length%2==0) {
        pos1=array.length/2

        pos2=pos1-1
        num1=array[pos1]
        num2=array[pos2]
        mediana=(num1+num2)/2
    } else {
        pos_central=(array.length-1)/2
        mediana=array[pos_central]
    }
    console.log("La mediana es:"+mediana)

}
ObtenerMediana();