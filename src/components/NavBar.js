import React from 'react'
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { mainNavitems } from './consts/navlist';
import { SportsRugbySharp } from '@mui/icons-material';
import { navbarlayout } from '../layouts/NavbarLayout';
// import { useNavigate } from "react-router-dom";
import{
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

const Navbar =() =>{
  const drawerWidth =220;
  
  return(
    <Drawer
    sx={navbarlayout.drawer}
    variant="permanent"
    anchor="left"
  >
    <Toolbar />
    <Divider />
    <List>
      {mainNavitems.map((text, index) => (
        <ListItem
            button
            key={text.id}
        >
          <ListItemIcon 
            sx={navbarlayout.icons}
          >
              {text.icon}
            </ListItemIcon>
            <ListItemText
              sx={navbarlayout.text}
              primary={text.label}
            />
        </ListItem>
      ))}
    </List>
  </Drawer>
  )
}
export default Navbar;