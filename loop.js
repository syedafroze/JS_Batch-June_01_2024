/*
while loop
do while 
for loop
*/

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// while(condition){
//     //code 
// }

let startValue = 1;

// while(startValue>=5){//6<=5
//     startValue++;
//     console.log(startValue);//12345
//    }






//    do{
//     //code
//    }while(condition)

    //   do{      
    //     console.log(startValue);//12345
    //     startValue++;
    //    } while(startValue>=5)
    

        //for loop 
//   synatx        1             2               4
        // for(intialization; condition ; incremnt/decrement){
        //     //code   //3
        // }

        for( ;startValue>=1; ){
            console.log(startValue);
            startValue--;
        }


        /*
        1
        123
        1234
        12345
        */
 //             1     2    4
        for(let i= 0;i<5; i++){
            //for each ietration of outer loop ,the inner loop executes or completes all iteration in inner loop
            //     1      2    4
            for(let j=1 ;j<5;j++){
                console.log(i,j) //3
            }
           }

/*
0,1
0,2
0,3
0,4
.
.
.
4,1
4,2
4,3
4,4


*/













