
import React, { useContext } from "react"

import styles from './Settings.module.css'
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { Divider } from "@mui/material";
import { logoutFunction } from "../../utils/user/userFuction";
import { ContextUser } from "../../context/ContenxtUser";
import { useNavigate } from "react-router-dom";
const Settings = ()=>{
    const { stateUser, dispatchUser } = useContext(ContextUser) || {} ;
    const navigate = useNavigate();
    const logout = ()=>{
        logoutFunction(dispatchUser)
        navigate("/login")
    }

    return(
        <div className={styles.container}>
            <div className={styles.inputbox}>

                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

                <TextField
                
                id="outlined-disabled"
                label="Nickname"
                defaultValue="Alecrin"
                />
                <TextField
                disabled
                id="outlined-disabled"
                label="Email"
                defaultValue="Alecrin@gmail.com"
                />

                <TextField
                        disabled
                        id="outlined-disabled"
                        label="Registration"
                        defaultValue="202220105"
                        />
                              <Button variant="contained">Save</Button>
                              <Divider />
                            <h3>Change password</h3>
                              <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            />
                                                          <TextField
                            id="outlined-password-input"
                            label="Confirm Password"
                            type="password"
                            autoComplete="current-password"
                            />

                        <Button variant="contained">Change</Button>

                        <Divider />
                        <h3>Exit</h3>

                        <Button onClick={()=>{logout()}} style={{backgroundColor:"#6e0606"}} variant="contained">Logout</Button>
        </div>  

        </div>
    )
}

export default Settings