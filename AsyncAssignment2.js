
// Promisified setTimeout;


function promisifiedSetTimeout(time){
  return new Promise((resolve, reject)=>{
   setTimeout(()=>{
    resolve("Hello Hello");
    }, time)
  })
}

promisifiedSetTimeout(3000).then(()=>{
  console.log("Done! after 3 Sec")
})
