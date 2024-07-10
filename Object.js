//Object 

//real time entity 


//Onject is a Data structure in which is values are store in key value pairs 


let dog = {
    color:'brown',
    name:"skuby",
    bark:function(){console.log('Barking....');},
    food:['bread','meat']
  }
  
  
  console.log(dog.color)

  let car ={
    name:"civic",
    color:"white silver",
    seatingCapacity:5,
    fuelType:"petrol",
    acc : ['media player','revCam' ,{display:"LCD",size:'8inches'}]
  }
  
  
  
  
  // console.log(car.name ,car.acc , car.acc[2].display);
  let keys =[];
  let values=[];
  
  for(let i in car){
  keys.push(i);
    values.push(car[i])
  }
  
  console.log(keys,values);
  
  //Object.keys(objectName)
  
  console.log(Object.keys(car))
  
  console.log(Object.values(car))


  let obj={
    name:"syed",
    id:25,
    age:26,
    name:"vikas",
    role:"devOps"
  }
  
  let obj2 = Object.assign({role:"dev"} , obj);
  
  let obj3 ={
    city:"hyd",
    ...obj
  }
  
  console.log(obj3);
  
  
  
  
//let obj={}  ;//object literal


//let obj = Object.create()

//let obj = new Object()
  

let obj={
  name:"syed",
  id:25,
  age:26,
  name:"vikas",
  role:"devOps"
}


//Object.entries

console.log(Object.entries(obj))

//[[name,syed] ,[id,25]]
let res=[]
for(let I in obj){
   res.push([I,obj[I]])
}

// console.log(res)