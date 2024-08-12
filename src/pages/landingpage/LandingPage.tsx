import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Button, Link} from '@mui/material';
import styles from './LandingPage.module.css';
//@ts-ignore
import Logo from '../../asset/logo.png';
//@ts-ignore
import aristotle from '../../asset/aristotle.jpg';
//@ts-ignore
import Landing from '../../asset/landing.png';
import { Link as LinkRoute, Navigate } from "react-router-dom";
import { ContextUser } from "../../context/ContenxtUser";

export default function LandingPage() {
    document.title = "MrAris";
    const {stateUser} = useContext(ContextUser) || {};


    if (stateUser.is_authenticated === true) {
        
        return <Navigate to="/home" />;
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


      {/* <img style={{height:"200px"}} src={aristotle}/> */}


      <div className={styles.content} style={{ textAlign: 'center', padding: '20px'}}>
      <div className={styles.imageStyle}>
      <div className={styles.image}>

      </div>
      </div>
        <Typography className={styles.title} variant="h4"  gutterBottom>
          Welcome → MrAris platform ↔ Successfully!
        </Typography>


            <div className={styles.text}>
            <p>

                  Mr. Aristotle is a tool to help students learn deductive reasoning while studying Mathematical Logic.

                  If you have any comments, criticism, suggestions, or want to report any bugs, please send me an email.

                  Cedric Luiz de Carvalho cedric@ufg.br
                  </p>

            </div>
            <LinkRoute style={{marginTop:"30px"}} to="/login">
          <Button style={{backgroundColor:"#0BD6B4", color:"#333"}}>get started</Button>
          </LinkRoute>
        </div>


      </div>
      <footer style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', backgroundColor: '#1E181C', padding: '20px' }}>
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
