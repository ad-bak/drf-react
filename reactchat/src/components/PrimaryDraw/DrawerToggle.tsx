import { ChevronLeft } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

const DrawerToggle = ({ onClick }: { onClick: () => void }) => {
  return (
    <Box
      sx={{
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <IconButton onClick={onClick}>
        <ChevronLeft />
      </IconButton>
    </Box>
  );
};

export default DrawerToggle;
