import { useState,useEffect } from "react"

const useruserclass=()=>{

    const[userInfo,setuserInfo]=useState(null);
    useEffect(()=>{
       userData();
    },[])
    
    const userData=async ()=>{
        const data=await fetch("https://api.github.com/users/akshaymarch7");
        const json=await data.json()
        setuserInfo(json.data)
    }
    return userInfo;
}

export default useruserclass