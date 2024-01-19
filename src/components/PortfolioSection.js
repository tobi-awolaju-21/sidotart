// components/PortfolioSection.js

import React from 'react';
import { Grid, Drawer, IconButton, AppBar, Toolbar, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const portfolioItems = [
  { id: 1, title: 'Project 1', image: 'image1.jpg' },
  { id: 2, title: 'Project 2', image: 'image2.jpg' },
  // Add more projects as needed
];

const PortfolioSection = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {portfolioItems.map((item) => (
        <ListItem key={item.id}>
          <ListItemIcon>
            {/* You can use an icon here if needed */}
          </ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
        >
          {drawer}
        </Drawer>
      </nav>
      <Grid container spacing={2}>
        {portfolioItems.map((item) => (
          <Grid key={item.id} item xs={12} md={4}>
            <PortfolioItem {...item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const PortfolioItem = ({ title, image }) => {
  return (
    <div>
      <img src={image} alt={title} style={{ width: '100%' }} />
      <h3>{title}</h3>
    </div>
  );
};

export default PortfolioSection;
