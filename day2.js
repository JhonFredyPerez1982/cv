function exerciseEleventh(){
        let phras=false;
        let enterNum=prompt("enter number");
        if(enterNum%3==0){
            respuesta="bing";
            phras=true;
        }
        if(enterNum%5==0){
            respuesta="bong";
            phras=true;
        }
       if((enterNum%3==0)&&(enterNum%5==0)) {
        respuesta="bing bong";
        }
            else if(!phras){
                document.write(enterNum);
                console.log(enterNum);
                        }
                        
        document.write(numberExercise(11)+respuesta);
        console.log(numberExercise(11)+respuesta);
        line();
    }
    

    function exerciseTenth(){
        let weigth=prompt("enter weigth");
        let heigth=prompt("enter heigth");
    const BMI=weigth/Math.pow(heigth,2);
    if(BMI<18.5){
        document.write(numberExercise(10)+"you weigth is low" );
        console.log(numberExercise(10)+"you weigth is low" );
    }
    else if((BMI>=18.5)||(BMI<=24.9)){
        document.write(numberExercise(10)+"you weigth is normal" );
        console.log(numberExercise(10)+"you weigth is normal" );
    }
    else if((BMI>=25)||(BMI<=29.9)){
        document.write(numberExercise(10)+"you weigth have overhight " );
        console.log(numberExercise(10)+"you weigth have overhight " );
    }
    else if(BMI>=30){
        document.write(numberExercise(10)+"you are fat " );
        console.log(numberExercise(10)+"you are fat " );
    
    }
    line();
}
function exerciseNineth(){
    let pedirN=prompt("number to known greather or lower");
    if(pedirN<10){
        document.write(numberExercise(9)+"you number is lower than ten");
       console.log(numberExercise(9)+"you number is lower than ten");
}
if(pedirN>10){
    document.write(numberExercise(9)+"you number is greater than ten");    
    console,log(numberExercise(9)+"you number is greater than ten");

}
if(pedirN==10){
    document.write(numberExercise(9)+"you number is equal than ten");
    console.log(numberExercise(9)+"you number is equal than ten");
}
line();
}
function exerciseEighth(){
    let ingresarN=prompt("enter number to a multiplo");
    if(ingresarN%5==0){
        document.write(numberExercise(8)+"number multiplo ");
        console.log(numberExercise(8)+"number multiplo ");
    }
    if(ingresarN%5!=0){
        document.write(numberExercise(8)+ingresarN+" isn´t number   multiplo of five");
        console.log(numberExercise(8)+ingresarN+" isn´t number   multiplo of five");
    }
    line();
    }

    function exerciseSeventh(){
        let numeroSecreto=aleatoria();
    let getNumber=prompt("enter number to play lotery");
if(getNumber==numeroSecreto){    
document.write(numberExercise(7)+"congratulations is that number luck");
console.log(numberExercise(7)+"congratulations is that number luck");
}
 if(getNumber!=numeroSecreto){    
    document.write(numberExercise(7)+"I sorry ...try again");
    console.log(numberExercise(7)+"I sorry ...try again");
 }
line();
}

function aleatoria(){
    return Math.round(Math.random()*2);
}
function exerciseSixth(){
    let pedirNumero=prompt("enter number to known greather or lower");
if(pedirNumero>10){
    document.write(numberExercise(6)+"you number is greater than ten");
    console.log(numberExercise(6)+"you number is greater than ten");
  }
if(pedirNumero<10){
    document.write (numberExercise(6)+"you number is lower than \"ten\"");
    console.log (numberExercise(6)+"you number is lower than \"ten\"");

    line();
}
}
function numberExercise(leccion){
    this.leccion=leccion;
    return "exercise :"+leccion+" = ";
    line();
}
function line() {
    document.write("<br><br>");
console.log("<br><br>");
    }


