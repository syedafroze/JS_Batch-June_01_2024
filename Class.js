




function fun(name,color){
    this.carName=name;
    this.carColor=color;
  }
  
  fun('city','black')
  // console.log(window)
  
  
  




function fun(name,color){
    this.carName=name;
    this.carColor=color;
  }
  
  fun('city','black')
  // console.log(window)
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // let car ={
  //   name:"civic",
  //   color:"white",
  //   fuelType:"petrol"
  // }
  
  
  
  // console.log(window)
  
  //code reusability
  
  class generateCar{
  constructor(name,color,fuelType){ 
    this.name=name;
    this.color=color;
    this.fuelType= fuelType;
  }
    getName(){
      return this.name;
    }
    
    
  }
  
  
  
  
  
  //constructor 
  
   let car1 =  new  generateCar('innova','black','petrol');
  
   let car2 =  new generateCar('city','black','petrol');
  
  
  
  
  
  console.log(car1.getName(),car2.getName())
  


  class Address{
    constructor(city,state,country){
      this.city=city;
      this.state=state;
      this.country=country;
    }
  }
  
  class Employee extends Address{
    constructor(name,age,role,city,state,country){
      super(city,state,country)
      this.name=name;
      this.age=age;
      this.role=role;
    }
  }
  
  
  const emp1 = new Employee("syed","30","dev","hyd","Tel","India");
  
  
  console.log(emp1.city);
  

  
  
function factorial(n) {
  if (n === 0) {
  return 1;
  }
return n*factorial(n-1)
  
 }

//let n=5;
//let result = factorial(n);
console.log(factorial(4));

//return 4*6
//return 3*2
//return 2 * 1
//return 1 * 1
//return 1
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // let car ={
  //   name:"civic",
  //   color:"white",
  //   fuelType:"petrol"
  // }
  
  
  
  // console.log(window)
  
  //code reusability
  
  class generateCar{
  constructor(name,color,fuelType){ 
    this.name=name;
    this.color=color;
    this.fuelType= fuelType;
  }
    getName(){
      return this.name;
    }
    
  }
  
  
  
  //constructor 
  
   let car1 =  new  generateCar('innova','black','petrol');
  
   let car2 =  new generateCar('city','black','petrol');
  
  
  
  
  
  console.log(car1.getName(),car2.getName())
  
  
  
  
  
  