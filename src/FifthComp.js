import React from 'react'

function FifthComp ({str, num, obj, arr, func, bool}) {
    return (
        <div>
            <h1>{str}</h1>
            <p>{num}</p>
            <p>{func(11, 2)}</p>
            <p>{arr.join(",")}</p>
            <p>{Object.entries(obj).map(it=>it.join(":")).join(",")}</p>
            <p>{bool==true? 'true':'false'}</p>
        
        </div>
    )
}
export default FifthComp