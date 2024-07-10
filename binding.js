function  getName(greet,msg){
    return greet + " "+ this.name+" "+msg;
  }
  
  
  let emp ={
    name:"syed",
    id:25, 
  }
  
  let admin ={
    name:"vikas",
    id:2, 
  }
  
  //call() ,apply() ,bind()
  
  
  let res= getName.apply(emp,["hello","How are you?"]);
  
  let res2 = getName.call(admin,"Hi" ,"Thank you");
  
  let res4 = getName.call(emo,"Hi" ,"Thank you")
  
  
  
  let res3 = getName.bind(admin);
  
  res3("hey","GM")
  
  
  
  console.log(res,res2,res3("hi","good afternnoon"))