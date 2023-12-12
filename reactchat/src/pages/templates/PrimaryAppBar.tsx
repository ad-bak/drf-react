import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Link,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useEffect, useState } from "react";

const PrimaryAppBar = () => {
  const [sideMenu, setSideMenu] = useState(false);
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));

  useEffect(() => {
    if (isSmallScreen && sideMenu) {
      setSideMenu(false);
    }
  }, [isSmallScreen, sideMenu]);

  const toggleDrawer = () => {
    setSideMenu((prev) => !prev);
  };

  return (
    <AppBar
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: theme.palette.background.default,
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar
        variant="dense"
        sx={{
          height: theme.primaryAppBar.height,
          minHeight: theme.primaryAppBar.height,
        }}
      >
        <Box
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Drawer anchor="left" open={sideMenu} onClose={toggleDrawer}>
          {Array.from({ length: 100 }).map((_, index) => (
            <Box
              key={`menu-item-${index}`}
              sx={{
                width: 250,
                height: "100%",
                backgroundColor: theme.palette.background.paper,
              }}
            >
              <Typography variant="h6" component="div" sx={{ p: 2 }}>
                {`Menu Item ${index + 1}`}
              </Typography>
            </Box>
          ))}
        </Drawer>
        <Link href="/" underline="none" color="inherit">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { fontWeight: 700, letterSpacing: "-0.5px" } }}
          >
            DJCHAT
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default PrimaryAppBar;
