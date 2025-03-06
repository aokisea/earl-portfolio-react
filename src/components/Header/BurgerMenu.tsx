import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface BurgerMenuProps {
  scrollToIntro: () => void;
  scrollToAbout: () => void;
  scrollToExperience: () => void;
  scrollToShowProjects: () => void;
  scrollToCertificates: () => void;
  scrollToContacts: () => void;
}

/* eslint-disable */

// const BurgerMenu: React.FC<BurgerMenuProps> = ({ scrollToIntro, scrollToAbout, scrollToExperience, scrollToShowProjects, scrollToCertificates, scrollToContacts }) => {
const BurgerMenu: React.FC<BurgerMenuProps> = ({ scrollToIntro, scrollToAbout, scrollToExperience, scrollToShowProjects, scrollToContacts }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };

  return (
    <div>
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
        <MenuIcon style={{ color: 'white', fontSize: '3rem' }}/>
      </IconButton>
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItemButton onClick={scrollToIntro}>
            <ListItemText primary="Title" />
          </ListItemButton>
          <ListItemButton onClick={scrollToAbout}>
            <ListItemText primary="About" />
          </ListItemButton>
          <ListItemButton onClick={scrollToExperience}>
            <ListItemText primary="Experiences" />
          </ListItemButton>
          <ListItemButton onClick={scrollToShowProjects}>
            <ListItemText primary="Projects" />
          </ListItemButton>
          {/* <ListItemButton onClick={scrollToCertificates}>
            <ListItemText primary="Certificates" />
          </ListItemButton> */}
          <ListItemButton onClick={scrollToContacts}>
            <ListItemText primary="Contacts" />
          </ListItemButton>
        </List>
      </Drawer>
    </div>
  );
};

export default BurgerMenu;
