///indeex  0 1 2 3
let arr = [2,3,4,5];
//length   1 2 3 4


console.log(arr.length);


//access

console.log(arr[0]);


//add a element 

//push -> adds to last index

arr.push(6);

console.log(arr);


/////unshift

arr.unshift(1);

console.log(arr);

//pop() -> it removes last element 

arr.pop();

console.log(arr)

arr.shift() //-> removes first elemnt 

console.log(arr)



// Write a program that squares alternate numbers in an array?
// given array [2,3,5,1,7,4]

          // 0 1 2 3 4 5   
let arr2 =  [2,3,5,1,7,4];

//[2,9,5,1,7,16];

for(let i=0 ;i<arr2.length ;i++){
    if(i%2!==0){
        arr2[i]= arr2[i]*arr2[i]
     
    }
    console.log(arr2);
    //[2,3,5,1,7,4]
    //[2,9,5,1,7,4]
    //[2,9,5,1,7,4]
    //[2,9,5,1,7,4]
    //[2,9,5,1,7,4]
    //[2,9,5,1,7,16]
}



// Given an array [1,3,2,4,5]
// Output : [15,14,11,9,5] 
// Return an array with the sum of all elements starting from each particular position (index).


// Write a program that returns true only when all elements in array satisfy a particular condition?/
// for eg [5,10,25,100] condition return true when all elements of the array are multiples of 5?