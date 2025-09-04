// const { add, subtract } = require("./module");
// console.log(add(2, 4));
// console.log(subtract(5, 2));
function examplePromise(url) {
  return new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve(`promise is complete @ ${url}`);
    } else {
      reject("error occored");
    }
  });
}
examplePromise('www.arpit.com')
.then((res)=>{
    console.log(res);
    
})
.catch(()=>{
    console.error("some error oucrred")
}
)
.finally(()=>{
    console.log("opp complete");
    
})