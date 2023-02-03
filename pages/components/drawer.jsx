import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GroupIcon from "@mui/icons-material/Group";
import LogoutIcon from "@mui/icons-material/Logout";
import ListIcon from "@mui/icons-material/List";
import { useRouter } from "next/router";
const list = [
  {
    title: "Add Student",
    link: "/add/add_student",
    icon: <GroupIcon />,
    activeIcon: <GroupIcon sx={{ color: "#fff" }} />,
  },
  {
    title: "Dashboard",
    link: "/dashboard",
    icon: <ListIcon />,
    activeIcon: <ListIcon sx={{ color: "#fff" }} />,
  },
  {
    title: "Logout",
    icon: <LogoutIcon />,
  },
];
const LeftDrawer = () => {
  const router = useRouter();
  const drawerWidth = 240;
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Student Management App
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <List>
            {list.map((list, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  sx={{
                    background: router.pathname.includes(list.link)
                      ? "red"
                      : "#fff",
                    color: router.pathname.includes(list.link)
                      ? "#fff"
                      : "#000",
                  }}
                  onClick={() => router.push(`${list.link}`)}
                >
                  <ListItemIcon>
                    {router.pathname.includes(list.link)
                      ? list.activeIcon
                      : list.icon}
                  </ListItemIcon>
                  <ListItemText primary={list.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default LeftDrawer;
