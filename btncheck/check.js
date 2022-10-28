let box=document.querySelector('.box');
    addEventListener("click",funcion);
    let box1=document.getElementById('checkbox1');
    let box2=document.getElementById('checkbox2');
    let box3=document.getElementById('checkbox3');
    let box4=document.getElementById('checkbox4');
    let box5=document.getElementById('checkbox5');
    let box6=document.getElementById('checkbox6');
function funcion(){
    let color="blue";
    if((box1.checked)&&(box5.checked)){

    box.style.color=color;
    box.innerText="la primavera comienza el 1 de marzo ";
    }
    else if((box1.checked)&&(box6.checked)){

        box.style.color=color;
        box.innerText="la primavera comienza en septiembre";
        }
else if((box3.checked)&&(box5.checked)){

        box.style.color=color;
        box.innerText="el otoño comienza el 1 de septiembre ";
        }
            else if((box2.checked)&&(box6.checked)){
        
                box.style.color=color;
                
                box.innerText="el otoño comienza en marzo";
                }

                else if((box2.checked)&&(box5.checked)){

                    box.style.color=color;
                    box.innerText="el verano comienza el 1 de junio";
                    }
                        else if((box3.checked)&&(box6.checked)){
                    
                            box.style.color=color;
                            
                            box.innerText="el verano comienza en diciembre,";
                            }
                            
                else if((box4.checked)&&(box5.checked)){

                    box.style.color=color;
                    box.innerText="el invierno comienza el 1 de diciembre";
                    }
                        else if((box4.checked)&&(box6.checked)){
                    
                            box.style.color=color;
                            
                            box.innerText="el invierno comienza en junio.,";
                            }
                            }
                            let nIntervId;

nIntervId = setInterval(flashText, 100);

function flashText() {
const Elem = document.getElementById("msj1");
Elem.className === "checkbox5" ? Elem.className = "checkbox6" :Elem.className = "checkbox5";
}

