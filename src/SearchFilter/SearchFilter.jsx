import React, { Fragment, useState } from "react";
import FoodData from "./FoodData";
import Buttons from "./Buttons";
const SearchFilter = () => {
    const buttname = FoodData.map((e)=>{
        return e.category;
    })
    const uniqueButt = [...new Set(buttname),"All"]
console.log(uniqueButt)
    const [Fooddata, updateData] = useState(FoodData);
    const [buttItem,updateButt] = useState(uniqueButt);
    const [search,updateSearch] = useState();
    const [storeSearch,updateStore] = useState([]);
    const funexpr = (category)=>{
        if(category==="All"){
            return updateData(FoodData)
        }
        const filterItem = FoodData.filter((e)=>{
            return e.category === category;
        })

        updateData(filterItem)
    } 
    
    const searchItem = (event)=>{
        updateSearch(event.target.value)
    }

    const store = (s)=>{
         
       const ffres = FoodData.filter((e)=>{
        return s===e.name;
       })
        updateStore(ffres)
    }
    console.log(storeSearch)
    return (
        <Fragment>
            <div className="buttons">
           
            <input type="text" className="m-3" onChange={searchItem} placeholder="enter item"/>
<button className="btn m-2" onClick={()=>store(search)} 
style={{border:"1px solid black"}}>Search</button>
            {/* This is a comment */}
            {/*
                <button className="btn bg-primary m-5" 
                onClick={()=>funexpr("Breakfast")}>Breakfast</button>


                <button className="btn bg-success m-5"
                 onClick={()=>funexpr("Evening")}>Evening</button>
                <button className="btn bg-danger m-5"
                onClick={()=>funexpr("Lunch")}>Lunch</button>
                <button className="btn bg-primary m-5"
                onClick={()=>funexpr("Dinner")}>Dinner</button>
                <button className="btn bg-success m-5"
                onClick={()=>funexpr("Timepass")}>Timepass</button>
    */}
    <Buttons
    fun={funexpr}
    buttname = {buttItem}
   
    />
            </div>

            {
                (storeSearch.length > 0 ? storeSearch : Fooddata).map((e) => {
                    
                    return (
                        <Fragment>
                            <h1>name: {e.name}</h1>
                            <h1>category:{e.category}</h1>
                            <p>price: {e.price}</p>
                        </Fragment>
                    )
                })
            }

           

           
        </Fragment>
    )
}

export default SearchFilter;