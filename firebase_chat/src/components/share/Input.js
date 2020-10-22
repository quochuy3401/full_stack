import React from "react";

export const Input = (props) =>{
    const {label,name,type, value, onChange} = props;
    return(
        <label>
            {label} :
            <input name={name} type={type} onChange={onChange}/>
        </label>
    )
}