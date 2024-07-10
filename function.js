//function 

//Code reusability 
/*
function functionName(){
// code  ///function definition

}

functionName();// function call

functionName();


*/

//function declaration method 
/*
function Add (a,b){ //parameters
let res = a+b; //8
  console.log(res); //8  
  return res; //8
  
  //unreachable code 
  
}
*/

//Anonymous function 
//function expression 
/*
const Add = function(a,b){
  let res = a+b; //8
  console.log(res); //8  
  return res; //8
  
  //unreachable code 
}

*/

let result = Add(5,3) ;//arguments


//Arrow function

const Add = (a,b)=>{
  let res = a+b; //8
  console.log(res); //8  
  return res; //8
  
  //unreachable code 
}







console.log(result);

function A(num1){
   
  function B(num2){
   return num1*num2
  }
  
  return B
 
}



let res2 =  A(2)(3);  ///currying functions

console.log(res2);//


/*
in A 2 
in B 3
in C 4



*/


function A(fun){
  let num = 5;
    console.log("in A");
    fun(num)
}




function B(n){  
  console.log("in B",n);  
}


A(B)

//A function which is passed to another function and called later is called callback function

//A function that accepts another function as its argument is called Higher Order Function.