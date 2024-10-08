import React, { useContext, useState } from "react"
// @ts-ignore
import Loginlogo from '../../asset/logo.png'

import styles from './Login.module.css'
import { ContextUser } from "../../context/ContenxtUser";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { loginFunction } from "../../utils/user/userFuction";

const Login = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");

    const { stateUser, dispatchUser } = useContext(ContextUser) || {} ;

    const navigate = useNavigate()

    const handleEmailChange = (event: any) => {
        const { value } = event.target;
        setEmail(value);

        // Expressão regular para validar o formato do email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailRegex.test(value);

        if (!isValidEmail) {
            setEmailError("Invalid email address");
        } else {
            setEmailError("");
        }
    };

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
        
    };


    async function onSubmit(e: any) {
        e.preventDefault();

        if (emailError.length > 0){
            setEmailError(emailError)
        }else{
            const input = {
                email: email,
                password: password,
                dispatch: dispatchUser
            }
            const result: any = await loginFunction(input)
            if (result.data.body && result.data.body.data && result.data.body.data.is_admin === true) {
                navigate("/mrplato-admin/classrooms");
              }
        
        }
        setPassword("")
      }

  
        
      if (stateUser.is_authenticated === true) {
        return <Navigate to="/home" />;
      }

    return (
        <form onSubmit={(e) => onSubmit(e)}>

        <div className={styles.container}>

            <img src={Loginlogo}/>
            <div className={styles.inputbox}>
                <div className={styles.inputLogin} style={{backgroundColor:"#00E6F6", width:"350px", borderRadius:"50px", height:"60px"}}>
                <div className={styles.inputLoginIntern} style={{backgroundColor:"#333",marginLeft:"5px", borderRadius:"50px", height:"60px"}}>
                <input  type="text" placeholder="Email" value={email} onChange={handleEmailChange} className={styles.inputField}/>
                </div>
                </div>
                </div>
                <div className={styles.inputLogin} style={{backgroundColor:"#A0F600", width:"350px", borderRadius:"50px", height:"60px"}}>
                <div className={styles.inputLoginIntern} style={{backgroundColor:"#333",marginLeft:"5px", borderRadius:"50px", height:"60px"}}>
                     <input  type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className={styles.inputField}/>

                </div>
                </div>
                <div className={styles.inputButton}>
                    <div className={styles.inputLogin} style={{backgroundColor:"#FD4770", width:"150px", borderRadius:"50px", height:"60px"}}>
                        <button className={styles.button} onClick={()=>{}} style={{display:"flex", alignItems:"center", justifyContent:"center",backgroundColor:"#333",marginLeft:"5px", borderRadius:"50px", height:"60px", fontFamily:"default", fontWeight:"600", color:"#F2F2F2"}}>GO!</button>
                </div>
                
                <p><Link to="/forgot-password" >Forgot password?</Link></p> 


            </div>
            
            {emailError && <p className={styles.error}>{emailError}</p>}
            {stateUser && <p className={styles.error}>{stateUser.login_error}</p>}
            
            </div>
            </form>

    )
}


export default Login