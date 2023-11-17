import React from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      light: '#03a9f4',
      main: '#1565c0',
      dark: '#212121',
      contrastText: '#fff',
    },
  },
});

// export class Navbar extends Component {
  const Navbar = () => {
    return (
      <ThemeProvider theme={theme}>
      <AppBar position="fixed" color="primary">
        <Toolbar sx={{ borderBottom: 1, borderColor: 'divider',backgroundColor: theme.palette.primary.main }}>
        <Button size="small" color="inherit">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          NewsWave
        </Typography>
        <Button variant="outlined" size="small" color="inherit">
          Sign up
        </Button>
        </Toolbar>
        <Toolbar
          component="nav"
          variant="dense"
          sx={{ justifyContent: 'space-between', overflowX: 'auto', backgroundColor: theme.palette.primary.light }}
        >
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/business">
            Business
          </Button>
          <Button color="inherit" component={Link} to="/entertainment">
            Entertainment
          </Button>
          <Button color="inherit" component={Link} to="/general">
            General
          </Button>
          <Button color="inherit" component={Link} to="/health">
            Health
          </Button>
          <Button color="inherit" component={Link} to="/science">
            Science
          </Button>
          <Button color="inherit" component={Link} to="/sports">
            Sports
          </Button>
          <Button color="inherit" component={Link} to="/technology">
            Technology
          </Button>
        </Toolbar>
      </AppBar>    
      </ThemeProvider> 
    );
}

export default Navbar;
