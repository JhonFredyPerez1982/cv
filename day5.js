
function exerciseTwentyEight(){
    let array1="aegi fs";
    let array2="xaybfckeois";
    let array3="abce";
    let array4=[];
    
    array1=array1.replaceAll(" ","");
for(i=0;i<array1.length;i++){
    if(array3.includes(array1[i])){
array4.push(array1[i]);
}
}
let array5=[];

for(i=0;i<array2.length;i++){
    if(array1.includes(array2[i])){
        array5.push(array2[i]);
    }
    }
if(array5.length===0){
    document.write("not letters");
}
else{
document.write(array4,"<p>"); 
document.write(array5); 
}


}    

function exerciseTwentySeventh(){
const frase = prompt("appends a phrase to jump line by finish word:");
console.log(day(5,27)+frase.split(' ').join("<br>"));
document.write(day(5,27)+frase.split(' ').join("<br>"));
line();
}

function  exerciseTwentySixth(){
        let mensaje = prompt("write msj to change firts letter by heigher case");
        let first = true;
        for(letra of mensaje){
          if(first==true){
            mensaje=mensaje.replace(letra,letra.toUpperCase());
            first=false;
          }
          if(letra===" "){
            first=true;
          }
        }
        document.write(day(5,26)+mensaje);
        line();
    }

function exerciseTwentyFifth(){
 let demandPhrase=prompt("write a phrase and your letters change");

let matrizCodigo = [[" ",""],["a", "4"], ["e", "3"], ["i", "1"], ["o","0"]];
demandPhrase=demandPhrase.toLowerCase();
    for(let i=0; i < matrizCodigo.length; i++) {
        demandPhrase=demandPhrase.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
return day(5,25)+demandPhrase;
    }

    function exerciseTwentyFourth(){
   let contador=0;
    let demandPhrase=prompt("write a phrase");
for(i=0;i<demandPhrase.length;i++){
    if(demandPhrase[i]==('a')){
        contador++;
    }
}
document.write(day(5,24)+contador);
line();
}
  
function exerciseTwentyThird(){
let demandPhrase=prompt("write a phrase");
document.write(day(5,23)+demandPhrase.toUpperCase());   
line();
}

function line(){
    document.write("<br><br>");
}
function day(date,exercise){
    return "day : "+date+" "+" exercise "+exercise+" = ";
}

//let mensaje1 = prompt("Escriba un mensaje");
//let mensaje = prompt("Escriba un mensaje");
