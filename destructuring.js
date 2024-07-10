//destructuring 

let res = [1,2,3,4];

let [a,c,...d] = [1,2,3,4,5];

// let a= res[0]
    
// let b = res[1]

console.log(a,c,d)



/*
[]  spread

3,4,5 -> rest 

*/
let add ={
  city:"hyd",
  country:"india"
}

let obj ={
  name:"syed",
  id:5,
  age:'30',
   ...add
}
console.log(obj)

// let name = obj.name
// let id= obj.id


let {name,id ,city } = obj ;

console.log(name,id,city )