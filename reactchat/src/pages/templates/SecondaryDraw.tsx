import { Box, Typography, useTheme } from "@mui/material";

const SecondaryDraw = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        minWidth: `${theme.secondaryDraw.width}px`,
        height: `calc(100vh - ${theme.primaryAppBar.height}px )`,
        mt: `${theme.primaryAppBar.height}px`,
      }}
    >
      {[...Array(10)].map((_, index) => (
        <Typography key={index} variant="h6">
          Secondary Draw
        </Typography>
      ))}
    </Box>
  );
};

export default SecondaryDraw;
