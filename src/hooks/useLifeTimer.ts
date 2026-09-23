import { useEffect, useState } from "react";
import {lifeCalculator} from "../utils/lifeCalculator"

export function useLifeTimer (dob : Date,lifespan : number){
    const [timer,setTimer] = useState(lifeCalculator(dob,lifespan))
    useEffect(()=>{
        const interval = setInterval(()=>{
            setTimer(lifeCalculator(dob , lifespan))
        },1000)
        return ()=>{
            clearInterval(interval)
        }  
    },[dob,lifespan])
    
    console.log("uselifetimer")
    return timer; 
}