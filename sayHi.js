let leaf = document.getElementById('exerciseN2');
let canvas1 = leaf.getContext("2d");
document.getElementById('exerciseN1').style.display = 'none';
document.getElementById("AnswerMakeitrealExercise1").style.display = "none";
const hello = document.querySelector('#hi1');
hello.style.color = "green";
hello.style.margin = "-600px 600px";

let nIntervId;
nIntervId = setInterval(flashText, 1000);

function flashText() {
    const Elem = document.getElementById("hi1");
    if (Elem.className === "p") {
        Elem.className = "l";
    } else {
        Elem.className = "p";
    }
}
let imagen = {
    url: "imagenes/fondo.png",
    OK: false
}

let imagen2 = {
    url: "imagenes/saludo1.png",
    OK: false
}
let imagen3 = {
    url: "imagenes/hola3.png",
    OK: false
}
imagen.object = new Image();
imagen.object.src = imagen.url;

imagen2.object = new Image();
imagen2.object.src = imagen2.url;

imagen3.object = new Image();
imagen3.object.src = imagen3.url;

imagen.object.addEventListener("load", cargar1);
imagen2.object.addEventListener("load", cargar2);
imagen3.object.addEventListener("load", cargar3);


function cargar1() {
    imagen.OK = true;
    show1();
}

function cargar2() {
    imagen2.OK = true;
    show1();
}
function cargar3() {
    imagen3.OK = true;
    show1();
}
function show1() {
    if (imagen.OK == true) {
        canvas1.drawImage(imagen.object, 0, 0);
    }
    if (imagen2.OK == true) {
        canvas1.drawImage(imagen2.object, 150, 155);
    }
    if (imagen3.OK == true) {
        canvas1.drawImage(imagen3.object, 150, 155);
        dibujarCirculo(300, 73, 70, "yellow");
        dibujarCirculo(300, 73, 50, "blue");
        dibujarCirculo(300, 73, 30, "red");
    }
}
function exerciseSecond() {
    document.getElementById('exerciseN1').style.display = 'block';
    document.getElementById('botton1').style.display = 'none';
    document.getElementById('botton2').style.display = 'none';
    document.getElementById("AnswerMakeitrealExercise1").style.display = "block";
    document.getElementById("volver").style.display = "block";

}
document.getElementById("hi1").addEventListener("click", ok);
let input = document.querySelector('input');

function ok() {
    let b = "hello !";
    let c = prompt("¿hello...what is you name?");
    let d = b.substring(0, 6) + c + b.substring(6, 7);
    document.querySelector("h1").innerText = d;
    document.getElementById('exercise2').style.display = 'none';
    document.getElementById('botton1').style.display = 'block';
    let a = document.querySelector(".galeria");
    a.style.margin = ("0px");
}
