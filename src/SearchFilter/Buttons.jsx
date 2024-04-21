import React, { Fragment, useState } from "react";
const Buttons = ({fun,buttname})=>{
    const [butt,updatebutt] = useState(buttname)
    return(
        <Fragment>
        {
            butt.map((e)=>{
                
                return(
                    <Fragment>
                    <button className="btn m-5"
                    onClick={()=>fun(e)}
                    >{e}</button>
                    </Fragment>
                )
            })
        }

        
        </Fragment>
    )
}

export default Buttons;