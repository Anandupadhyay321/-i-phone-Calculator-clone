let Result = document.getElementById('shubham');
  
  function insertvalue(value){Result.value += value;}
  
  function erase(){Result.value = "";}
  
  function delvalue(){Result.value = Result.value.slice(0,-1);}
  
  
  function calculate(){
    
    try{
    Result.value = eval(Result.value);
      
    }
    
    catch(error){Result.value = "error";
    }
  }