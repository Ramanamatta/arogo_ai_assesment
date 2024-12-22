import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'linear-gradient(135deg, rgb(4, 6, 10), rgb(6, 6, 7))',
        top: 0, // Ensure it stays at the top of the page
        left: 0, // Align to the left
        right: 0, // Align to the right
        zIndex: 1300, // Ensure the header stays on top of other elements
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>My Blog</Link>
        </Typography>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Welcome</Link>
        </Typography>
        <Box>
          <Button color="inherit">
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
          </Button>
          <Button color="inherit">
            <Link to="/create" style={{ textDecoration: 'none', color: 'white' }}>Create Post</Link>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
