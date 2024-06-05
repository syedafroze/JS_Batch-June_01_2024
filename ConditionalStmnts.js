/*
if else-if  else 
synatx 
if(condition){
    //code
}
else if(condtion2){
    //code 
}
else{
    //code
}

switch case 
*/

let num =9;

if(num<10){
    console.log('lesser');
}
else if(num>10){
    console.log('greater');
}
else{
    console.log("equal");
}



/*

switch(option){
    case 1 : //code; break ;
    case 2 : //code ; break ;
    case 3 : //code ; break;
    default : code 
}

*/

let num1= 5;
let num2 =30;
let opr = "/";

// 1+2 -> expression   + -> operator    1,2 operands 

// + * - /

switch(opr){
    case '+': console.log(num1+num2); break;
    case '-': console.log(num1-num2);break;
    case '*': console.log(num1*num2);break;
    default : console.log("invalid operation");
}


//ternary operator 

//synatx (condition)?(stmnt1):(stmnt2)

(num2<20)?console.log("lesser"):console.log("greater")
