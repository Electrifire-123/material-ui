import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import {FaUser} from 'react-icons/fa'

export default function MenuBar() {
  const routes = [
    {
      path: "/",
      name: "Create Employee",
      icon: <FaUser />,
    },
    {
      path: "/users",
      name: "Users",
      icon: <FaUser />,
    },
    {
      path: "/update/:id",
      name: "Update User",
      icon: <FaUser />,
    },
  ];
  return (
    <Box sx={{ flexGrow: 1, zIndex:'100' }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display:'flex', justifyContent:'space-evenly'}}>
            {routes.map((route,index)=>{
              return  <NavLink
              to={route.path}
              key={index}
              style={{ display:'flex', justifyContent:'space-evenly', color:'white', textDecoration:'none'}}
              className="link"
              // activeClassName="active"
            ><div className="icon">{route.icon} {route.name}</div></NavLink>
            })}
          </Typography>
          <Button color="inherit">Welcome</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
