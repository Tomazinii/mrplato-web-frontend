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
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupsIcon from '@mui/icons-material/Groups';
import ModeIcon from '@mui/icons-material/Mode';
import BarChartIcon from '@mui/icons-material/BarChart';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from './DrawerClassroom.module.css'
import { logoutFunction } from '../../utils/user/userFuction';
import { ContextUser } from '../../context/ContenxtUser';
import { ClassRounded, ListAlt, PlayArrowSharp, PlayArrowTwoTone, SchoolOutlined } from '@mui/icons-material';
const drawerWidth = 240;

export default function DrawerClassroom({children, link_active}: any) {
  const params = useParams()
  const {stateUser, dispatchUser} = React.useContext(ContextUser) || {};

      
  const navigate = useNavigate();
  const logout = ()=>{
      logoutFunction(dispatchUser)
      navigate("/login")

  }
  
    
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Management - {localStorage.getItem("class_name")?.toUpperCase()} 
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
            <Link to={`/mrplato-admin/classrooms/${params.idTurma}`}>
            <ListItem className={link_active === "platform" && styles.active} >
              <ListItemButton   >
                <ListItemIcon>
                  <PlayArrowSharp /> 
                </ListItemIcon>
                <ListItemText primary={"Platform"} />
              </ListItemButton>
            </ListItem>
            </Link>
            <Link to={`/mrplato-admin/classrooms/${params.idTurma}/invite`}>
            <ListItem className={link_active === "invite" && styles.active} >
              <ListItemButton   >
                <ListItemIcon>
                  <PersonAddIcon /> 
                </ListItemIcon>
                <ListItemText primary={"Invite"} />
              </ListItemButton>
            </ListItem>
            </Link>
            <Link  to={`/mrplato-admin/classrooms/${params.idTurma}/activity`}>
            <ListItem className={link_active === "activity" && styles.active}  >
              <ListItemButton>
                <ListItemIcon>
                  <ModeIcon /> 
                </ListItemIcon>
                <ListItemText primary={"Tasks"} />
              </ListItemButton>
            </ListItem>
            </Link>

            <Link  to={""}>
            <ListItem className={link_active === "problem" && styles.active}  disabled>
              <ListItemButton >
                <ListItemIcon>
                  <ListAlt /> 
                </ListItemIcon>
                <ListItemText primary={"Problems"} />
              </ListItemButton>
            </ListItem>
            </Link>
            <Link to={""}>
            <ListItem >
              <ListItemButton disabled={true  }>
                <ListItemIcon>
                  <ImportContactsIcon /> 
                </ListItemIcon>
                <ListItemText  primary={"Content"} />
              </ListItemButton>
            </ListItem>
            </Link>
            <Divider />
            <Link to={`/mrplato-admin/classrooms/${params.idTurma}/students`}>
            <ListItem className={link_active === "students" && styles.active}  >
              <ListItemButton>
                <ListItemIcon>
                  <GroupsIcon /> 
                </ListItemIcon>
                <ListItemText primary={"Students"} />
              </ListItemButton>
            </ListItem>
            </Link>
            <Link to={`/mrplato-admin/classrooms/${params.idTurma}/statistic`}>
            <ListItem className={link_active === "statistic" && styles.active}  >
              <ListItemButton>
                <ListItemIcon>
                  <BarChartIcon /> 
                </ListItemIcon>
                <ListItemText primary={"Reports"} />
              </ListItemButton>
            </ListItem>
            </Link>
        </List>

        <Divider />

        <Link  to={`/mrplato-admin/classrooms/`}>
            <ListItem >
              <ListItemButton>
                <ListItemIcon>
                  <SchoolOutlined /> 
                </ListItemIcon>
                <ListItemText primary={"Classrooms"} />
              </ListItemButton>
            </ListItem>
            </Link>
        
      
        <List>
            <ListItem onClick={()=>{logout()}} >
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
          {children}
      </Box>
    </Box>
  );
}