import React from 'react';

// phai viet hoa
function Person({name, age, children}){
    // const age=Math.floor(Math.random() * 30)
    return(
        <div>
            <h1>Name: {name}</h1>
            {children}
            <p>Age: {age}</p>
        </div>
    )
}

export default Person;