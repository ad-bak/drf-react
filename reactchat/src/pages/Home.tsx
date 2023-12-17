import { Box, CssBaseline } from "@mui/material";
import PrimaryAppBar from "./templates/PrimaryAppBar";
import PrimaryDraw from "./templates/PrimaryDraw";
import SecondaryDraw from "./templates/SecondaryDraw";

export const Home = () => {
  const dummyDataForPrimaryDraw = [...Array(100)].map((_, index) => (
    <Box key={index} sx={{ p: 1 }}>
      item {index + 1}
    </Box>
  ));
  return (
    <>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <CssBaseline />
        <PrimaryAppBar />
        <PrimaryDraw>{dummyDataForPrimaryDraw}</PrimaryDraw>
        <SecondaryDraw />
      </Box>
    </>
  );
};
