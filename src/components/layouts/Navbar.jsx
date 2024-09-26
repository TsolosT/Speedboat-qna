import { AppBar, Toolbar, Typography, IconButton, Button, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';  // Menu icon for mobile
import HomeIcon from '@mui/icons-material/Home';
import Container from '@mui/material/Container';
import speedboatIcon from '../../assets/speedboat-logo.png';
import { useState } from 'react';

function Navbar() {
  // State to handle mobile menu drawer
  const [mobileOpen, setMobileOpen] = useState(false);

  // Toggle drawer
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // List for Drawer (menu options in mobile view)
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <img src={speedboatIcon} alt="Speedboat Logo" style={{ width: '50px', marginTop: '10px' }} />
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" color="primary"  sx={{
              color: 'primary.main', // Main color
              '&:hover': { color: 'secondary.main' }, // Hover text color
            }}/>
        </ListItem>
        <ListItem button component={Link} to="/about" >
          <ListItemText primary="About"  sx={{
              color: 'primary.main', 
              '&:hover': { color: 'secondary.main' }, 
            }} />
        </ListItem>
        <ListItem button component={Link} to="/take-test"   sx={{ 
            color: 'secondary.main', 
            '&:hover': {
              backgroundColor: 'primary.main',  // Hover background color
            },
          }}>
          <ListItemText primary="Take Test"  sx={{
              color: 'secondary.main',
              '&:hover': { color: 'secondary.main' }, 
            }} />
        </ListItem>
        <ListItem button component={Link} to="/study-qna">
          <ListItemText primary="Study Q&A"  sx={{
              color: 'primary.main', 
              '&:hover': { color: 'secondary.main' }, 
            }} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="lg">
        <Toolbar>
          {/* Icon Button with PNG icon */}
          <IconButton edge="start" component={Link} to="/" color="inherit" sx={{ mr: 2 }}>
            <img src={speedboatIcon} alt="Speedboat Logo" style={{ width: '40px', height: '40px' }} />
          </IconButton>

          {/* Website Title */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Speedboat Exam Q&A
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button
              component={Link}
              to="/"
              color="inherit"
              startIcon={<HomeIcon />}
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  transform: 'scale(1.05)',
                },
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/about"
              color="inherit"
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  transform: 'scale(1.05)',
                },
              }}
            >
              About
            </Button>
            <Button
              component={Link}
              to="/take-test"
              color="secondary"
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  transform: 'scale(1.05)',
                },
              }}
            >
              Take Test
            </Button>
            <Button
              component={Link}
              to="/study-qna"
              color="inherit"
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  transform: 'scale(1.05)',
                },
              }}
            >
              Study Q&A
            </Button>
          </Box>

          {/* Mobile Menu Icon (visible on small screens) */}
          <IconButton
            color="secondary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: 'block', md: 'none' } , '&:hover': {
              transform: 'scale(1.05)',
            },}} // Show on small screens only
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Drawer for Mobile Menu */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: 'block', md: 'none' } }}  // Only display on small screens
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}

export default Navbar;