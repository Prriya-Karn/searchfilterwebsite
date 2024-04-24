import React, { Fragment, useState } from "react";
const Buttons = ({fun,buttname,})=>{
    const [butt,updatebutt] = useState(buttname)
    return(
        <Fragment>
        <div className="row-sm-2 main-menus container-fluid">
        <div className="menus">
        <div className="col butt col-lg col-md-6">
        {
            butt.map((e)=>{
                
                return(
                    <Fragment>
                 
                    <button className="btn menu-buttons"
                    onClick={()=>fun(e)}
                    >{e}</button>
                   
                    </Fragment>
                )
            })
        }
        </div>
        </div>
        </div>

        </Fragment>
    )
}

export default Buttons;