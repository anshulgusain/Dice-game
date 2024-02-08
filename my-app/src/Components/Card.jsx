import FoodCard from "./FoodCard";
import { useEffect, useState } from "react";
export const BASE_URL=`http://localhost:9000`
export default function Card(){


    const [data,setData]=useState([])
const [loading,setLoading]=useState(false)





useEffect(()=>{
    const search=async ()=>{
        try{
    const response=await fetch(BASE_URL)
    const json= await response.json()
    
    console.log(json)
   
    setData(json)
 
   
        }catch(err){
            setLoading(true)
            console.log(err)
        }
    }

    search()
},[])


    
if (loading) return <div><h1>...Loading</h1></div>

    return(
        <div className="parentcard">
            
       {loading?<h1>Loading</h1>:<FoodCard  data={data}/>}
        </div>
    )
}