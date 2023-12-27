import { Drawer as MuiDrawer, useMediaQuery, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  Children,
  ReactElement,
  ReactNode,
  cloneElement,
  isValidElement,
  useEffect,
  useState,
} from "react";
import DrawerToggle from "../../components/PrimaryDraw/DrawerToggle";

type Props = {
  children: ReactNode;
};

type ChildProps = {
  open: boolean;
};

type ChildElement = ReactElement<ChildProps>;

const PrimaryDraw: React.FC<Props> = ({ children }) => {
  const theme = useTheme();
  const below600 = useMediaQuery("(max-width:599px)");
  const [open, setOpen] = useState(!below600);

  useEffect(() => {
    setOpen(!below600);
  }, [below600]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <MuiDrawer
      open={open}
      variant={below600 ? "temporary" : "permanent"}
      sx={{
        width: open ? theme.primaryDraw.width : theme.primaryDraw.closed,
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: open
            ? theme.transitions.duration.enteringScreen
            : theme.transitions.duration.leavingScreen,
        }),
        "& .MuiDrawer-paper": {
          mt: `${theme.primaryAppBar.height}px`,
          height: `calc(100vh - ${theme.primaryAppBar.height}px )`,
          width: open ? theme.primaryDraw.width : theme.primaryDraw.closed,
          overflowX: "hidden",
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
          <DrawerToggle
            open={open}
            handleDrawerClose={handleDrawerClose}
            handleDrawerOpen={handleDrawerOpen}
          />
        </Box>
        {Children.map(children, (child) => {
          return isValidElement(child)
            ? cloneElement(child as ChildElement, { open })
            : child;
        })}
      </Box>
    </MuiDrawer>
  );
};

export default PrimaryDraw;
