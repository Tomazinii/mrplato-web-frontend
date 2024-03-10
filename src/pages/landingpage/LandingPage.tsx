import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Button, Link} from '@mui/material';
import styles from './LandingPage.module.css';
//@ts-ignore
import Logo from '../../asset/Login.svg';
//@ts-ignore
import Landing from '../../asset/landing.png';
import { Link as LinkRoute, Navigate } from "react-router-dom";
import { ContextUser } from "../../context/ContenxtUser";

export default function LandingPage() {

    const {stateUser} = useContext(ContextUser) || {};


    if (stateUser.is_authenticated === true) {
        
        return <Navigate to="/home  " />;
      }

  return (
    <div className={styles.container}>
      <AppBar position="static" style={{ backgroundColor: '#F9F9F9', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img style={{ width: "120px" }} src={Logo} alt="Logo" />
          </Typography>
          <LinkRoute to="/login">
          <Button style={{backgroundColor:"#333", color:"white"}}>Login</Button>
          </LinkRoute>
        </Toolbar>
      </AppBar>
      <div className={styles.center}>

      <div className={styles.content} style={{ textAlign: 'center', padding: '20px'}}>
        <Typography variant="h3" gutterBottom>
          Welcome to Mrplato platform
        </Typography>

            <div className={styles.text}>
                <p>
                Welcome to our platform dedicated to first order logic. Here, we offer a comprehensive approach to exploring the fundamental principles of formal logic and their applications.</p>
            </div>


            <div className={styles.text}>
                <p>
                Discover a wide range of functionality designed to enhance your first-order logic learning experience. From creating and manipulating formulas to applying inference rules, our platform offers powerful tools to meet your needs.</p>
            </div>
            <LinkRoute style={{marginTop:"30px"}} to="/login">
          <Button style={{backgroundColor:"#333", color:"white"}}>get started</Button>
          </LinkRoute>
        </div>


      </div>
      <footer style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', backgroundColor: '#fafafa', padding: '20px' }}>
        <Typography variant="body2" align="center">
          <Link href="/about" color="inherit" underline="always">
            About
          </Link>{' '}
          |{' '}
          <Link href="/contact" color="inherit" underline="always">
            Contact
          </Link>{' '}
          |{' '}
          <Link href="/cookies" color="inherit" underline="always">
            Cookies Policy
          </Link>
        </Typography>
      </footer>
    </div>
  );
}
