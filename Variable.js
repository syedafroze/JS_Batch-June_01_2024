//variable 

//var let const 


//global scope   var 

//block scope   let and const 

// {} ->braces    ()-> paranthesis

{
    //code   ///block
}


{
let age1 =undefined;
age1= 29;

const age =30;

let myName = 'syed';
 // age=age+1;

const city = 'Hyd';
console.log(age);//28
}

//           0
const arr = [2,5,6]; // reference vlue 


console.log(arr);


//Datatypes

/*
PrimitveDatatype

Number 
String
Boolean
Undefined
Null


Symbol
BigInt 

Non primitive Datatype ( Reference Datatype)
Object<- Array
Function

*/



//primitve -> its stores the values
//reference -> its stores the reference vlue 


let num = 5;

let num2 = num ;

//the values get copied 

num2++;  //increment by 1 

console.log(num,num2);  //5,6

//reference datatype

//          0 1 2 3 
let arr1 = [2,3,4,5];


// let arr2 = arr1;// address get copied 

//let arr2 = [].concat(arr1);

//let arr2 = arr1.slice(0);

let arr2= [...arr1]


arr2[0]=1;

console.log(arr1,arr2);// [2,3,4,5] [1,3,4,5]
