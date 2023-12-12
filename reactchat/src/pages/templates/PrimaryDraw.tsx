import {
  Box,
  Drawer,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import DrawerToggle from "../../components/PrimaryDraw/DrawerToggle";

const PrimaryDraw = () => {
  const theme = useTheme();
  const below600 = useMediaQuery("(max-width:599px)");
  const [open, setOpen] = useState(!below600);

  useEffect(() => {
    setOpen(!below600);
  }, [below600]);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Drawer
      open={open}
      variant={below600 ? "temporary" : "permanent"}
      PaperProps={{
        sx: {
          mt: `${theme.primaryAppBar.height}px`,
          height: `calc(100vh - ${theme.primaryAppBar.height}px)`,
          width: theme.primaryDraw.width,
        },
      }}
    >
      <Box>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            p: 0,
            width: open ? "auto" : "100%",
          }}
        >
          <DrawerToggle onClick={toggleDrawer} />
          {[...Array(50)].map((_, index) => (
            <Typography key={index} paragraph>
              {index + 1}
            </Typography>
          ))}
        </Box>
      </Box>
    </Drawer>
  );
};

export default PrimaryDraw;
