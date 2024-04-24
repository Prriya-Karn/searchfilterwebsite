import React, { Fragment, useState } from "react";
import FoodData from "./FoodData";
import Buttons from "./Buttons";
import './SearchFilter.css';
const SearchFilter = () => {
    const buttname = FoodData.map((e) => {
        return e.category;
    })
    const uniqueButt = [...new Set(buttname), "All"]
    console.log(uniqueButt)
    const [Fooddata, updateData] = useState(FoodData);
    const [buttItem, updateButt] = useState(uniqueButt);
    const [search, updateSearch] = useState();
    // const [storeSearch,updateStore] = useState([]);

    const funexpr = (category) => {
        if (category === "All") {
            return updateData(FoodData)
        }
        const filterItem = FoodData.filter((e) => {
            return e.category === category;
        })

        updateData(filterItem)
    }

    const searchItem = (event) => {
        updateSearch(event.target.value)
    }

    const store = (s) => {
        if (s.trim() === "") {
            updateData(FoodData)
        }
        else {
            const ffres = FoodData.filter((e) => {
                if (s === (e.name).toUpperCase()) {
                    return e.name;
                } else {
                    console.log("not")
                }
            })

            // updateStore(ffres)
            updateData(ffres);


        }
    }

    const clearItem = () => {
        updateSearch("")
    }
    console.log(Fooddata)
    return (
        <Fragment>
            <div className="main-head container mt-5">
                <h1 className="text-center">Our Food Item</h1>
            </div>

            <div className="buttons d-flex">
                <div className="inputSearch container-fluid d-flex">
                    <input type="text" value={search}
                        className="m-3" onChange={searchItem} placeholder="enter item" />
               
                    <img onClick={clearItem} src="images/cross.png"/>
                    <div className="searchButt">
                    <button className="btn m-2" onClick={() => store(search.toUpperCase())}
                        style={{ border: "1px solid black" }}>Search</button>
                </div>
                </div>
                

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
                    buttname={buttItem}

                />
            </div>

            <div className="main-card-items container">
                <div className="row">
                    {
                        //    (storeSearch.length>0?storeSearch:Fooddata).map((e) => {

                        Fooddata.map((e) => {
                            return (
                                <Fragment>

                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="card-items">
                                            <div className="inner-card">
                                                <div>
                                                    <img src={e.image} />
                                                </div>
                                            </div>
                                            <div className="inner-card-1">
                                                <div>
                                                    <h1>{e.name}</h1>
                                                </div>

                                                <div className="price d-flex">
                                                    <h2>Price: {e.price}</h2>
                                                    <button className="btn">Order Now</button>
                                                </div>

                                                <div className="category">

                                                    <h3>Category: <span>{e.category}</span></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </Fragment>
                            )
                        })
                    }
                </div>
            </div>




        </Fragment>
    )
}

export default SearchFilter;