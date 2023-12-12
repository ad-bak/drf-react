import {
  Box,
  Drawer,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";

const PrimaryDraw = () => {
  const theme = useTheme();
  const below600 = useMediaQuery("(max-width:600px)");
  const [open, setOpen] = useState(!below600);

  console.log("below600", below600);

  useEffect(() => {
    setOpen(!below600);
  }, [below600]);

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
        <Box>
          {Array.from({ length: 100 }).map((_, index) => (
            <Box>
              <Typography variant="h6" component="div" sx={{ p: 2 }}>
                {`Menu Item ${index + 1}`}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Drawer>
  );
};

export default PrimaryDraw;
