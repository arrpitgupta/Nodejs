function examplePromise(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve(`Data fetched successfully from ${url}`);
      } else {
        reject("Failed to fetch data");
      }
    }, 2000);
  });
}
examplePromise('www.arpit.com')
    .then((resolve)=>{
console.log(resolve);

    })
     .catch((error)=>{
console.error(error);

    })
    .finally(()=>{
console.log('promise is compelete');

    })


   
