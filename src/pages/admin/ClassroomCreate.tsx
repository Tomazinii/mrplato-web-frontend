import * as React from 'react';

import DrawerClassroom from '../../component/admin/DrawerClassroom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { registerClassroom } from '../../utils/classroom/registerClassroomFunctions';
import { ContextUser } from '../../context/ContenxtUser';
import { ContextClassroom } from '../../context/ContextClassroom';
import { Container } from '@mui/material';




import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SchoolIcon from '@mui/icons-material/School';
import LogoutIcon from '@mui/icons-material/Logout';



const drawerWidth = 240;



export default function ClassroomCreate() {

    const {stateUser, dispatchUser} = React.useContext(ContextUser) || {};
    const {stateClassroom , dispatchClassroom} = React.useContext(ContextClassroom) || {};

    const navigate = useNavigate();
    const [formData, setFormData] = React.useState({
      class_name: '',
    });
  
    const handleChange = (e:any) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSubmit = (e: any) => {

      e.preventDefault();
      const input = {
        class_name: formData.class_name,
        teacher_email: stateUser && stateUser.user_email,
        teacher_name: stateUser && stateUser.user_email,
        user_id: stateUser && stateUser.user_id,
        dispatch: dispatchClassroom,
      }
      registerClassroom(input)
      // Aqui você pode enviar os dados do formulário para onde precisar
      // Limpar o formulário após o envio
      setFormData({
        class_name: '',
      });
      navigate('/mrplato-admin/classrooms');
    };
  
    return (
  <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Mrplato Admin
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SchoolIcon /> 
                </ListItemIcon>
                <ListItemText primary={"Classrooms"} />
              </ListItemButton>
            </ListItem>
        </List>

        <Divider />
        
       
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />

        
        <h2>Register Classroom</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Class name"
            name="class_name"
            value={formData.class_name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" color="primary">
           Register class
          </Button>
        </form>
      </Box>

    </Box>

    );
  }