// console.log(global)



const promise =  new Promise((resolve, reject)=>{
    let err =  false;

    setTimeout(() => {
            if(!err){
                resolve("https://dummyjson.com/products")
            }else{
                reject("server error")
            }
    }, 0);
})

setTimeout(()=>{
    
  console.log(promise)
},5000)

// console.log(promise)

// async function fetchData() {
//     try{

//         const fetchUrl =  await promise;

//         const response =  await fetch(fetchUrl);
//         const result =   response.json();
//         return console.log(result)

//     }catch(e){
//         console.log(e)
//     }
// }

// fetchData()