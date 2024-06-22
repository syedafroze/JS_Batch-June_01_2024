///indeex  0 1 2 3 4
let arr = [2,3,4,5,4];
//length   1 2 3 4


console.log(arr.length);


//access

console.log(arr[0]);


//add a element 

//push -> adds to last index

arr.push(6);

console.log(arr);


/////unshift -> add to first index

arr.unshift(1);

console.log(arr);

//pop() -> it removes last element 

arr.pop();

console.log(arr)

arr.shift() //-> removes first elemnt 

console.log(arr)


//indexOf -> returns the index where the elemtn occured for first 

console.log('indexOf',arr.indexOf(4));//2

//lastIndexOf -> return lastIndex where element occured for last time in array 

console.log('lastindexOf',arr.lastIndexOf(4))

//slice
//array.slice(startIndex,endIndex+1)

let arr5 = [2,1,3,5,4];

//[1,3,5];
let sliced = arr5.slice(1,4)

console.log(sliced);


//splice -> remove /add values in at index of array 

//array.splice(startIndex, no of values to remove, values to add)

arr5.splice(2,1,7,9,16);

console.log(arr5)


//includes -> returns true if array contains the value passed

console.log(arr5.includes(21))







// Write a program that squares alternate numbers in an array?
// given array [2,3,5,1,7,4]

          // 0 1 2 3 4 5   
let arr2 =  [2,3,5,1,7,4];

//[2,9,5,1,7,16];

// for(let i=0 ;i<arr2.length ;i++){
//     if(i%2!==0){
//         arr2[i]= arr2[i]*arr2[i]
     
//     }
//     console.log(arr2);
//     //[2,3,5,1,7,4]
//     //[2,9,5,1,7,4]
//     //[2,9,5,1,7,4]
//     //[2,9,5,1,7,4]
//     //[2,9,5,1,7,4]
//     //[2,9,5,1,7,16]
// }



// Given an array [1,3,2,4,5]
// Output : [15,14,11,9,5] 
// Return an array with the sum of all elements starting from each particular position (index).


// Write a program that returns true only when all elements in array satisfy a particular condition?/
// for eg [5,10,25,100] condition return true when all elements of the array are multiples of 5?


let arr3 = [3,4,5,6];

// for(let i=0;i,arr3.length ;i++){
//     arr3[i]=arr3[i]*arr3[i]
// }


//map  predefined array method 

// let squares = arr3.map(function(val){return val*val;})

let squares = arr3.map(function(val){return val*val;})


 
//[9,16,25,36]

console.log(squares)



let arr4 = ['chaitanya','syed','vikas','muskan'];

let filteredArray = [];
for(let i=0;i<arr4.length;i++){
    if(arr4[i].length>=5){
        filteredArray.push(arr4[i])
    }
  
}
console.log('filterArray',filteredArray)




const filterArray = arr4.filter((val)=> val.length>=5)

console.log(filterArray)

//[]

// for(let i=0;i<arr4.length ;i++){

//     let rev = ''
//     for(let j=arr4[i].length-1 ;j>=0;j--){
// rev = rev+arr4[i][j];

//     }
//     arr4[i]=rev;
// }
// console.log(arr4);

const revStr = arr4.map((str)=> str.split('').reverse().join(''));

//filter 


console.log(revStr);


//every -> it return true only if all the values in array satisfies the condition

let arr6 = [5,10,15,120,22];

//action

let everyRes= arr6.map((num,ind)=> num*ind);


//   ArrayMap(arr,(num,ind)=>num*ind)


console.log('mapRes',everyRes)




//some -> return true if atleast ine value satisfies the condition

let arr7 = [12,21,31,40,32]

let someRes= arr6.some(function(val){return val%5==0});//
console.log(someRes);


//reduce 





