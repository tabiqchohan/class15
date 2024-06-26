const hellopromise = new Promise((resolve)=>{
    setTimeout (()=>{
        resolve("hello world")
    },10000)
})
hellopromise.then((message)=>
console.log(message)
)
const conditionalPromise = new Promise((resolve, reject) => {
  const success = Math.random()> 0.5;
  if (success){
    resolve("success");
  }  
  else{
    reject(new Error("failure"));
  }
});



