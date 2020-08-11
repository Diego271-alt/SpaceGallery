const TypeWriter = function (txtElement,words,wait= 3000) {
    this.txtElement = txtElement;
    this.words=words;
    this.txt = '';
    //dado que es una matriz de esta forma vamos a controlar el indice
    this.wordIndex=0;
    this.wait= parseInt(wait,10);
    //este será el metodo encargado de practicamente todo el trabajo de tipear
    this.type();
    //con esto vamos a controlar si la palabra se esta borrando o no 
    this.isDeleting= false;

}



//Type
TypeWriter.prototype.type=function () {

   

    /*lo primero que tenemos que hacer es obtener el indice actual
    de las palabras por que casi que cada palabra tiene un indice dado que es un arreglo */

    const current= this.wordIndex % this.words.length;
   
    
    //obtienendo el texto completo 
    const fullTxt= this.words[current]


    //checamos la impresión 
    if(this.isDeleting){
        //borramos un caracter 
        this.txt= fullTxt.substring(0,this.txt.length-1)

    }else{
        //agregamos un caracter
        /*Vamos a tomar el txt que representa lo que sea que haya 
        en este momento tomamos el texto completo y formamos una subcadena y luegp 
        en esta parte sin importar sea cual sea la longitud que vayamos a manekar
        queremos argegaele uno asi que cuando comience el corrido sea  argegarñe uno y así sucesivamente */
        this.txt= fullTxt.substring(0,this.txt.length+1)

    }
    //insert txt into ELEMENT
    //lo que estamos haciendo ahora es que cuando nosotros ya obtuvimos el txt lo vamos a insertar en un nuevo elemento span 
    // de esta manera es que por cada vuelta que se esta haciendo en eñ sset time out entonces 
    //se actualiza elemento por elemento 

    this.txtElement.innerHTML= `<span class="txt" >${this.txt}</span>` 



    /*lo qu sigue es que  necesitamos la velocidad para cambiar inicialmente entre por ejemplo 3000 imilisegundos 
    pero quiero que cuando se este borrando vaya más rapido y cuando vaya al final se pare un segundo y eso se hará 
      */

      let typeSpeed= 300;

      if(this.isDeleting){
          typeSpeed /=2;

      }
      // necesitamos revisar si la palabra ya esta completa 

      if(!this.isDeleting && this.txt === fullTxt){
          //haciendo una pequeña pausa al final 
          typeSpeed=this.wait;
          //cambiando el valor del delete
          this.isDeleting=true


      }else if(this.isDeleting && this.txt===''){
          this.isDeleting= false;
          //move
          this.wordIndex++;
          //pausa antes de comenzar
          typeSpeed=500;
      }
    setTimeout(() => this.type(),typeSpeed) 

}

// oara inicializarlo que necesitamos es que el DOM se cargue o lo que está dentro del DOM


//init 

function init(){
    // tomamos todas las cosas que vamos a necesitar de nuestro DOM
    const txtElement= document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait= txtElement.getAttribute('data-wait');
    new TypeWriter(txtElement,words,wait);
}



export default init;