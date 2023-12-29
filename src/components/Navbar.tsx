import { AppBar, Toolbar, IconButton, Stack, Typography } from "@mui/material";
import Person2Icon from "@mui/icons-material/Person2";
import logo from "../image/logo3.png";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit">
          <img src={logo} alt="logo" width={"140px"} />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
        <IconButton color="inherit">
          <Person2Icon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
