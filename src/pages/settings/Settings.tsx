import React, { useContext, useState } from "react";
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { Divider } from "@mui/material";
import { logoutFunction } from "../../utils/user/userFuction";
import { ContextUser } from "../../context/ContenxtUser";
import { useNavigate } from "react-router-dom";
import styles from './Settings.module.css';
import { change_password } from "../../api/User.api";

const Settings = () => {
    const { stateUser, dispatchUser } = useContext(ContextUser) || {};
    const navigate = useNavigate();
    const usernames = stateUser && stateUser.user_name;

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleChangePassword = () => {
        // Limpar mensagens de erro e sucesso ao tentar alterar a senha
        setPasswordError("");
        setSuccessMessage("");

        if (password.length < 8) {
            setPasswordError("A senha deve ter pelo menos 8 caracteres.");
            return;
        }
        if (password !== confirmPassword) {
            setPasswordError("As senhas não coincidem.");
            return;
        }
        // Lógica para trocar a senha
        const props = {
            password: password
        }
        change_password(props).then((result)=>{
            result.success == true ? setSuccessMessage("Change password successfully!") : setSuccessMessage("Change password Error!") 
        
    })
        // Limpar os campos de senha após o sucesso
        setPassword("");
        setConfirmPassword("");
    };

    const handleLogout = () => {
        logoutFunction(dispatchUser);
        navigate("/login");
    };

    return (
        <div className={styles.container}>
            <div className={styles.inputbox}>
                <Avatar alt={stateUser && stateUser.user_email} src="/static/images/avatar/1.jpg" />
                <TextField id="outlined-disabled" disabled value={usernames} />
                <TextField disabled id="outlined-disabled" value={stateUser && stateUser.user_email} />
                <TextField disabled id="outlined-disabled" value={stateUser && stateUser.enrollment} />
                <Divider />
                <h3>Change password</h3>
                <TextField
                    id="outlined-password-input"
                    label="New Password"
                    type="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
                    id="outlined-password-input"
                    label="Confirm New Password"
                    type="password"
                    autoComplete="new-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    error={passwordError !== ""}
                    helperText={passwordError}
                />
                <Button variant="contained" onClick={handleChangePassword}>Change</Button>
                {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
                <Divider />
                <h3>Exit</h3>
                <Button onClick={handleLogout} style={{ backgroundColor: "#6e0606" }} variant="contained">Logout</Button>
            </div>
        </div>
    );
};

export default Settings;
