import { BASE_URL } from "./Card"

export default function FoodCard({data}){
    console.log(data)
    return(
        <div className="SingelCard">
        {
            data?.map((ele)=>(
                <div className="container">
                 <div className="image">
                  <img src={BASE_URL +ele.image} alt="hello" />
                  </div>

                  <div className="info">
                  <h3>{ele.name}</h3>
                  <p>{ele.text}</p>
                  <button>${ele.price}.00</button>
                 </div>
                
                 </div>
                
            ))
        }    
        
        </div>
    )
}