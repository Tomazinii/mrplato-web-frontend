import React from "react"

// @ts-ignore
import Loginlogo from '../../asset/expired.jpg'



export default function Expired (){
    return (
        <div style={{display:"flex", alignItems:"center", justifyContent:"center", backgroundRepeat:"no-repeat"}}>
            <img src={Loginlogo}/>
        </div>
    )
}