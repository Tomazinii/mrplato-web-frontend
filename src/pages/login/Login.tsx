import React from "react"
// @ts-ignore
import Loginlogo from '../../asset/Login.svg'

import styles from './Login.module.css'

const Login = ()=>{

    return (
        <div className={styles.container}>
            <img src={Loginlogo}/>
            <div className={styles.inputbox}>
                <div className={styles.inputLogin} style={{backgroundColor:"#00E6F6", width:"350px", borderRadius:"50px", height:"60px"}}>
                <div className={styles.inputLogin} style={{backgroundColor:"#333",marginLeft:"5px", borderRadius:"50px", height:"60px"}}></div>
                </div>
                <div className={styles.inputLogin} style={{backgroundColor:"#A0F600", width:"350px", borderRadius:"50px", height:"60px"}}>
                <div className={styles.inputLogin} style={{backgroundColor:"#333",marginLeft:"5px", borderRadius:"50px", height:"60px"}}></div>
                </div>
                <div className={styles.inputButton}>
                    <div className={styles.inputLogin} style={{backgroundColor:"#FD4770", width:"150px", borderRadius:"50px", height:"60px"}}>
                        <div className={styles.inputLogin} style={{display:"flex", alignItems:"center", justifyContent:"center",backgroundColor:"#333",marginLeft:"5px", borderRadius:"50px", height:"60px", fontFamily:"default", fontWeight:"600", color:"#F2F2F2"}}>GO!</div>
                </div>
                <p>esqueceu a senha?</p>

            </div>
            </div>
        </div>
    )
}


export default Login