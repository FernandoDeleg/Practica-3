arreglo=[{"id":1,"imagen":"images/1.jpg"},
         {"id":2,"imagen":"images/2.png"},
         {"id":3,"imagen":"images/3.jpg"},
         {"id":4,"imagen":"images/4.jpg"},
         {"id":5,"imagen":"images/5.jpg"},
         {"id":6,"imagen":"images/6.jpg"},
         {"id":7,"imagen":"images/7.jpg"},
         {"id":8,"imagen":"images/8.png"},
         {"id":9,"imagen":"images/9.jpg"},
         {"id":10,"imagen":"images/10.jpg"}];
imagenes = [1,2,3,4,5,6,7,8,9,10];
var posicion=0;

function Inicio(){
    for (i=0 ; i<5; i++){
        
        imagenes[i] = Math.floor(Math.random() * (10));    
        
    }
    posicion = 0;
    
    validaPosicion();
    muestraImagen();
}

function muestraImagen(){

    var texto = "<img src="+arreglo[imagenes[posicion]].imagen+">";
   
     window.document.getElementById("imagen").innerHTML =texto;
    
}







function validaPosicion(){
    //Verfica que este en la ultima imagen para deshabilitar el boton siguiente
    if(posicion==4){
         window.document.getElementById("siguiente").disabled = true;
        window.document.getElementById("anterior").disabled = false;
   
    }

    else if(posicion== 0){
              window.document.getElementById("anterior").disabled = true;
            window.document.getElementById("siguiente").disabled = false;
   
    }else{
         window.document.getElementById("siguiente").disabled = false;
              window.document.getElementById("anterior").disabled = false;
        
   
    }
}

function Anterior(){
    posicion--;
    validaPosicion();
    muestraImagen();
    
}
function Siguiente(){
    
    posicion++;
    validaPosicion();
    muestraImagen();
    
    
}
    
    