function exerciseTwelfth(){
    let ask;
    for(i=1;i<10;i++){
    ask=prompt("appends phrase");
document.write(numberExercise(12)+ask);
console.log(numberExercise(12)+ask);
        line();
}
}
line();
function exerciseThirtieth(){
    let contador=0;
let phrase;
contador=prompt("enter number to show them \"xTime\"");
for(let i=0;i<contador;i++){
    phrase=prompt("appends phrase");
    document.write(numberExercise(13)+phrase);
    console.log(numberExercise(13)+phrase);
            line();
    }
}
line();
function exerciseFourteenth(){
    let contador1=0;
    let askNumber=prompt("enter number to write until where this indicates the times");
while(contador1<askNumber){
contador1++;
        document.write(numberExercise(14)+contador1);
        console.log(numberExercise(14)+contador1);
line();
}
}
line();
function exerciseFifteenth(){
let ask;
let sum=0;
ask=prompt("enter number to sum them ");
for(let i=0;i<=ask;i++){
sum+=i;
}
document.write(numberExercise(15)+sum);
console.log(numberExercise(15)+sum);
line();
}
line();
function exerciseSixteenth(){
    let ask1;
    let contador=0;
    let ask2;
    ask1=prompt("enter number to start");
    ask2=prompt("enter number to game over");
    contador= ask1;
    while( contador<=ask2){
        document.write(numberExercise(16)+contador);
        console.log(numberExercise(16)+contador);
             contador++;
    line();
}
}
line();
function exerciseSeventeenth(){
    let luck=Math.round(Math.random()*3);
    let flag=true;
    while(flag){
        let enterNumber=prompt("enter number to play ");
    
    if(enterNumber!=luck){
        document.write(numberExercise(17)+"bed luck"+"<br>");
     console.log(numberExercise(17)+"bed luck"+"<br>");
    }
        if(enterNumber==luck){
    document.write(numberExercise(17)+"good luck"+"<br>");
    console.log(numberExercise(17)+"goog luck"+"<br>");
      flag=false;
      
    }
}}
   
   


   function numberExercise(leccion){
    this.leccion=leccion;
    return "exercise :"+leccion+" = ";
    line();
}function line() {
    document.write("<br><br>");
console.log("<br><br>");
    }
    
