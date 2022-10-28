var imagenes = [];
imagenes["Facebook"] = "imagenes/facebook.png";
imagenes["Linkend"] = "imagenes/linkend.png";
imagenes["Twitter"] = "imagenes/twitter.png";
imagenes["Youtube"]=   "imagenes/youtube.png";
class RedesSociales
{
  constructor(nombre)
  {
    this.imagen=new Image();
    this.nombre = nombre;
    
this.imagen.src= imagenes[this.nombre];
}
   mostrar(){
    
        document.body.appendChild(this.imagen).style.border="solid";
       document.body.appendChild(this.imagen).style.margin="6%";
         // document.body.appendChild(this.imagen).onclick=location.href="https://jhonfredyperez1982.github.io/encriptador/"
}
}
var twitter=new RedesSociales("Linkend");
var facebook=new RedesSociales("Facebook");
var linkend=new RedesSociales("Twitter");
var youtube=new RedesSociales("Youtube");



 

   

   
