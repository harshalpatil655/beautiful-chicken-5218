// prac


const data = {name:"amar",email:"amarkr8989@gmail.com",password:"amar@123"}

fetch("https://beixl.sse.codesandbox.io/register",{
    method:'POST',
    headers:{
        'Content-type':'application/json'
    },
    body:JSON.stringify(data)
}).then((r)=>{
    console.log(r)
}).catch((e)=>{
    console.log("here")
    console.log(e)
})