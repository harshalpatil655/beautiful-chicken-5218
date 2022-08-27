export const setLocal= ()=>{
    if(token){
        localStorage.setItem("auth","true")
    }
    
}

export const getLocal= (token)=>{

        return localStorage.getItem("auth")
    
}