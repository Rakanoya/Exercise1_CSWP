function  startClock() {  
  //In the  function below, replace the words anonymous_function 
  //with an actual anonymous function using arrow notation then  
  //make startClock run using IIFE. 
  //Note that ALL your code must be in the anonymous function. 
  //Do not add any code to startClock.  See below for a more detailed explanation. 
  setInterval((() => { startClock();})(), 1000); 
} 
function  startClock() {  
  //In the  function below, replace the words anonymous_function 
  //with an actual anonymous function using arrow notation then  
  //make startClock run using IIFE. 
  //Note that ALL your code must be in the anonymous function. 
  //Do not add any code to startClock.  See below for a more detailed explanation. 
  setInterval(() => {
    const now = new Date();
    console.log(now.toLocaleTimeString());
  }, 1000);
} 
