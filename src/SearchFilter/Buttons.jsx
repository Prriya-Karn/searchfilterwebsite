import React, { Fragment, useState } from "react";
const Buttons = ({fun,buttname})=>{
    const [butt,updatebutt] = useState(buttname)
    return(
        <Fragment>
        {
            butt.map((e)=>{
                
                return(
                    <>
                    <button className="btn"
                    onClick={()=>fun(e)}
                    >{e}</button>
                    </>
                )
            })
        }
        </Fragment>
    )
}

export default Buttons;