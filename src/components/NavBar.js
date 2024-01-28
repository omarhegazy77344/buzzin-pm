import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { mainNavitems } from "./consts/navlist";
import { NavbarLayout } from "../layouts/NavbarLayout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/images/logo";
const Navbar = () => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    
      <Drawer
        sx={NavbarLayout.drawer}
        variant="persistant"
        anchor="left"
        hideBackdrop
        disableEnforceFocus
        open={isCollapsed}
        >
        <Box 
        sx={{  
          display:'flex',
          flexDirection:"column",
          alignItems: "center",
          padding:"24.5px 0px 24.5px 0px",
          gap:"74px",
        }}
        >
        <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          padding: "0px 50px 0px 20px",
          gap: "20px",
          flexShrink: "1",
          }}>
        <Box><MenuIcon sx={{
          fontSize: 35,
        }}/></Box>
        <Box><Logo /></Box>
        </Box>
        <Box sx={{ 
                  display: 'flex',
                  justifyContent: "space-between",
                  alignItems: "center",
                  }}>
        <List>
          {mainNavitems.map((item, index) => (
            <Box sx={{
              display: 'flex',
            }}>
            <ListItem
              key={item.id}
              onClick={() => navigate(item.route)}
            >
              <ListItemButton
                sx={{
                  padding:"8px 14px",
                  borderRadius: "15px",
                  '&:hover': {
                    backgroundColor: "var(--orange, #F49C31)",
                  }
                }}
              >
                
              <ListItemIcon sx={NavbarLayout.icons
                }>{item.icon}</ListItemIcon>
                <ListItemText
                  primaryTypographyProps={NavbarLayout.text} 
                  primary={item.label}>
                  </ListItemText>
              </ListItemButton>
            </ListItem>
            </Box>
          ))}
        </List>
        </Box>
      </Box>
      </Drawer>
    
  );
};
export default Navbar;
