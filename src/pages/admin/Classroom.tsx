import * as React from 'react';
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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SchoolIcon from '@mui/icons-material/School';
import LogoutIcon from '@mui/icons-material/Logout';
import ButtonClassroom from '../../component/admin/ButtonClassroom';
import styles from './Classroom.module.css'
import ButtonClassroomAdd from '../../component/admin/ButtonClassroomAdd';
import { getClassroom } from '../../utils/classroom/getClassroomFunctions';
import { ContextClassroom } from '../../context/ContextClassroom';
import { ContextUser } from '../../context/ContenxtUser';

const drawerWidth = 240;

export default function Classroom() {

  const {stateClassroom , dispatchClassroom} = React.useContext(ContextClassroom) || {};
  const {stateUser, dispatchUser} = React.useContext(ContextUser) || {};

  React.useEffect(()=>{
    const props = {
      teacher_id: stateUser && stateUser.user_id,
      dispatch: dispatchClassroom
    }
    getClassroom(props)
    
  },[])

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
      
        <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LogoutIcon /> 
                </ListItemIcon>
                <ListItemText primary={"Logout"} />
              </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <h2>Choice the classroom</h2>
        
        <div className={styles.container}>
          {stateClassroom && stateClassroom.classrooms_list.map((content: any)=>(

            <ButtonClassroom title={content.class_name}  text="" path={`${content.id}/invite`}/>
            ))}
            <ButtonClassroomAdd text='' path='create'/>
        </div>
      </Box>
    </Box>
  );
}