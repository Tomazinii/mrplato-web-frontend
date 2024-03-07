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
import { Link } from 'react-router-dom';
import styles from './DrawerClassroom.module.css'
const drawerWidth = 240;

export default function DrawerClassroom({children, link_active}: any) {
    
  return (
    <Box fontFamily={"default"} color={"#333"} sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Turma A
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
            <Link to={"/mrplato-admin/classrooms/turma-a/invite"}>
            <ListItem className={link_active === "invite" && styles.active} disablePadding>
              <ListItemButton   >
                <ListItemIcon>
                  <PersonAddIcon /> 
                </ListItemIcon>
                <ListItemText primary={"Invite"} />
              </ListItemButton>
            </ListItem>
            </Link>
            <Link to={"activity"}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ModeIcon /> 
                </ListItemIcon>
                <ListItemText primary={"Activity"} />
              </ListItemButton>
            </ListItem>
            </Link>
            <Link to={"content"}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ImportContactsIcon /> 
                </ListItemIcon>
                <ListItemText primary={"Content"} />
              </ListItemButton>
            </ListItem>
            </Link>
            <Divider />
            <Link to={"students"}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <GroupsIcon /> 
                </ListItemIcon>
                <ListItemText primary={"Students"} />
              </ListItemButton>
            </ListItem>
            </Link>
            <Link to={"students"}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <BarChartIcon /> 
                </ListItemIcon>
                <ListItemText primary={"Statistic"} />
              </ListItemButton>
            </ListItem>
            </Link>
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
          {children}
      </Box>
    </Box>
  );
}