
import React from "react"

import styles from './Settings.module.css'
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { Divider } from "@mui/material";
const Settings = ()=>{

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

        </div>  

        </div>
    )
}

export default Settings