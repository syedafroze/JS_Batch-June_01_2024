function A(num1){
    let num =5;
   
   function B(num2){
    return num*num1*num2
   }
   
   return B
  
 }
 
 
 
 let res  =  A(2); //
 
 console.dir(res)
 
 console.log(res(3))
 
 
 
 
 // let res2 =  res(3);  
 
 // console.log(res2);  
 
 
 /*
 in A 2 
 in B 3
 in C 4
 
 
 
 */

 const arr = [3,4,8,2,5];

//filter values divisble by 2

//[4,8,2];


//[4,8,2]

//[false,true,true,true,false]

// const res = arr.filter(function(val,ind){return val%2==0;})


//arrayFilter(arr,function(val,ind){return val%2==0;})
//[4,8,2];



let  arrayFilter = (arrayPassed , fun) => {
  let resArr=[];
  
  for(let i=0 ;i<arrayPassed.length ; i++){
   let res =  fun(arrayPassed[i]);
    
    if(res){
      resArr.push(arrayPassed[i]);
    }    
  }
  
  return resArr;
  
} 

console.log(arrayFilter(arr,function(val,ind){return val%2==0;}));


let arr = [2,2,3,4,5,4];

//[2,4]

let res = [... new Set (arr.filter((val)=>arr.indexOf(val)!=arr.lastIndexOf(val)))]
// let setRes = new Set(res)
// let finalRes = Array.from(setRes)

console.log(res)

//set 


let newSet = new Set(arr);

console.log(Array.from(newSet))

console.log([...newSet])


//copying of array 


//concat 

let arr2= [].concat(arr)
console.log(arr2);


let arr3 = arr.slice(0);
console.log(arr3)

//spread operator 
// ...
let arr4 = [...arr];

console.log(arr4);  // [[2,2,3,4,5,4]]