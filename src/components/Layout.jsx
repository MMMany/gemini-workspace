import { Outlet, Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ConstructionIcon from '@mui/icons-material/Construction';

function Layout() {
  const location = useLocation();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static" elevation={1}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Frontend Sample App
          </Typography>
          <Button
            color="inherit"
            component={RouterLink}
            to="/"
            startIcon={<HomeIcon />}
            sx={{
              fontWeight: location.pathname === '/' ? 'bold' : 'normal',
              textDecoration: location.pathname === '/' ? 'underline' : 'none',
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/form"
            startIcon={<AssignmentIcon />}
            sx={{
              fontWeight: location.pathname === '/form' ? 'bold' : 'normal',
              textDecoration:
                location.pathname === '/form' ? 'underline' : 'none',
              ml: 1,
            }}
          >
            RHF Form
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/maintenance"
            startIcon={<ConstructionIcon />}
            sx={{
              fontWeight:
                location.pathname === '/maintenance' ? 'bold' : 'normal',
              textDecoration:
                location.pathname === '/maintenance' ? 'underline' : 'none',
              ml: 1,
            }}
          >
            점검 안내
          </Button>
        </Toolbar>
      </AppBar>

      <Container component="main" sx={{ mt: 4, mb: 4, flex: 1 }}>
        <Outlet />
      </Container>

      <Box
        component="footer"
        sx={{
          py: 2,
          px: 2,
          mt: 'auto',
          backgroundColor: '#e0e0e0',
          textAlign: 'center',
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Gemini Workspace &bull; Built with Vite, React, MUI, React Router &amp;
          RHF
        </Typography>
      </Box>
    </Box>
  );
}

export default Layout;
