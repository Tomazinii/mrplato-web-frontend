import React from "react";
import { AppBar, Toolbar, Typography, Button, Link } from '@mui/material';
import styles from './LandingPage.module.css';
//@ts-ignore
import Logo from '../../asset/Login.svg';

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <AppBar position="static" style={{ backgroundColor: '#F9F9F9', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img style={{ width: "120px" }} src={Logo} alt="Logo" />
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <Typography variant="h3" gutterBottom>
          Welcome to Mrplato platform
        </Typography>
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
