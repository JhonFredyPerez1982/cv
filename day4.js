

function exerciseEighteenth(){
    let nombres=["pedro","pablo","maria","juan","diana"];
let appendsName=prompt("appends a name");
nombres.push(appendsName);
document.write(ExerciseN(18)+nombres);
console.log(ExerciseN(18)+nombres);
line();
let appendsName2=prompt("appends a name");
nombres.fill(appendsName2,2,3);
document.write(ExerciseN(18)+nombres);
console.log(ExerciseN(18)+nombres);
line()
}
function exerciseNineteenth(){
    let numbers=[];
    let enterNumber=prompt("enterNumber");
    for(i=1;i<=enterNumber;i++){
    numbers[i]=numbers.push(i);    

       document.write(ExerciseN(19)+numbers[i]);
       console.log(ExerciseN(19)+numbers[i]);
    line();
}
}
 for(i=1;i<=enterNumber;i++){
        numbers[i].splice(2,1);
        
           document.write(ExerciseN(19)+numbers[i]);
           console.log(ExerciseN(19)+numbers[i]);
           line();
        }    
    function exerciseTwentieth(){
        const mat = [
            ["Pablo", "Maria", "Pedro"],
            ["Diana", "Juan", "Federico"],
            ["Roberto", "Daniel", "Sandra"]
          ];
          
          for (let i=0; i < mat.length; i++) {
            console.log(ExerciseN(20)+"Grupo " + (i+1) + ":");
            document.write(ExerciseN(20)+"Grupo " + (i+1) + ":"); 
            line();      
            for (let j=0; j < mat[i].length; j++) {
              console.log(ExerciseN(20)+"  " + mat[i][j]);
              document.write(ExerciseN(20)+"  " + mat[i][j]);
              line();
            }
          }
        }
    
    function exerciseTwentyFirts(){
 let numMay=[];
const nums = [10, 2, 5, 8, 0, 12, 2, 67, 24, 9, 39]
for(i=0;i<nums.length;i++){
    if(nums[i]>=10){
 numMay=nums[i];
    
    document.write(ExerciseN(21)+numMay);
    console.log(ExerciseN(21)+numMay);
      line();
    }
}
}
function exerciseTwentySecond(){
  const nums = [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1];
contador=0;
for(i=0;i<nums.length;i++){
if(nums[i]==1){
    contador++;
}
}
document.write(ExerciseN(22)+contador);
console.log(ExerciseN(22)+contador);
line()
}


function ExerciseN(numero){
    return "Exercise "+numero+" = ";
}
function line(){
    document.write("<br><br>");
}
