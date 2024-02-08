import "../App.css"
// import { useState } from "react"



export default function Navbar(){
    // const [search,setSearch]=useState("")
    return(
        <div className="parent">

        <div className="main">

           <div className="logo">
            <img src="image/Foody Zone.png" alt="Logo" />
           </div>

           <div className="topbtn">
            <button>All</button>
            <button>Breakfast</button>
            <button>Lunch</button>
            <button>Dinner</button>

        </div>

           <div className="inputbar">
               <input placeholder="Search Food" ></input>
           </div>
        


      

        </div>

     
        </div>
    )
}