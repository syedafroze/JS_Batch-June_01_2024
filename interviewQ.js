
let valuesCount = arr2.reduce((Obj,val)=>{
  
    if(Obj[val]){
      Obj[val] = Obj[val]+1;
    }
    else{
      Obj[val]=1;    
    }
    
    return Obj;
    
  }  ,{} )
  
  
  console.log(valuesCount)