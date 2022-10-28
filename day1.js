let letters = document.querySelector("#btn1");
document.getElementById("AnswerMakeitrealExercise1").style.display = "none";
document.getElementById("volver").style.display = "none";
document.getElementById("exercise1").style.display = "none";
document.getElementById("btn1").addEventListener("click", exerciseOne);
document.getElementById('exerciseN1').style.display='none';


var box = document.getElementById("btn1");
box.document.querySelector("btn1");

function exerciseOne() {
    let answer = "the phrase that appends you is... ";
    letters.style.color = "blue";
    let put = prompt("name");
    box.value = answer.toUpperCase() + ` ${put}`;
}
function exerciseFirts() {
    document.getElementById("botton1").style.display = "block";
    document.getElementById("botton2").style.display = "none";
    document.getElementById("exercise1").style.display = "block";
    document.getElementById("botonesExercise1").style.display = "none";
    document.getElementById("exercisesMakeItReal").style.display = "none";
    document.getElementById("volver").style.display = "block";
    document.getElementById("AnswerMakeitrealExercise1").style.display = "block";
    document.getElementById('exerciseN1').style.display='none';
}
function exerciseThird() {
    let e = parseInt(prompt("appends number"));
    let f = parseInt(prompt("appends other number"));
    let result = (e + f);
    document.write(numberExercise(3) + "result  is..." + result);
    console.log(numberExercise(3) + "result  is..." + result);
    line();
}

function exerciseFourth() {
    let yearBorn = prompt("appends your year of born");
    let age = new Date().getFullYear() - yearBorn;
    document.write(numberExercise(4) + "result  is..." + age);
    console.log(numberExercise(4) + "result  is..." + age);
    line();
}

function exerciseFifth() {
    let weigth = prompt("enter how weigth you");
    let heigth = prompt("enter how heigth you");
    let bmi = weigth / Math.pow(heigth, 2);
    document.write(numberExercise(5) + "you \"BMI\" is..." + bmi);
    console.log(numberExercise(5) + "you \"BMI\" is..." + bmi);
    line();
}
function line() {
    document.write("<br><br>");
}
function numberExercise(leccion) {
    this.leccion = leccion;
    return "exercise " + leccion + " = ";
    line();
}
