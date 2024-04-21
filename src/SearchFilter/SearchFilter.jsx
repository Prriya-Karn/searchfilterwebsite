import React, { Fragment, useState } from "react";
import FoodData from "./FoodData";
import Buttons, { buttData } from "./Buttons";
const SearchFilter = () => {
    const buttname = FoodData.map((e)=>{
        return e.category;
    })
    const uniqueButt = [...new Set(buttname)]
console.log(uniqueButt)
    const [Fooddata, updateData] = useState(FoodData);
    const [buttItem,updateButt] = useState(uniqueButt)
    const funexpr = (category)=>{
        const filterItem = FoodData.filter((e)=>{
            return e.category === category;
        })

        updateData(filterItem)
        
    }
    
    return (
        <Fragment>
            <div className="buttons">

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
                Fooddata.map((e) => {
                    const {name,category,price} = e;
                    return (
                        <Fragment>
                            <h1>name: {name}</h1>
                            <h1>category:{category}</h1>
                            <p>price: {price}</p>
                        </Fragment>
                    )
                })
            }
        </Fragment>
    )
}

export default SearchFilter;