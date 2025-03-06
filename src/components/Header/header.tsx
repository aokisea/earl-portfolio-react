import React from 'react';
import { Grid, useMediaQuery } from '@mui/material';
import './header.css';
import * as styles from './Header.style';
import BurgerMenu from './BurgerMenu';
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

interface HeaderProps {
  scrollToIntro: () => void;
  scrollToAbout: () => void;
  scrollToExperience: () => void;
  scrollToShowProjects: () => void;
  scrollToCertificates: () => void;
  scrollToContacts: () => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToIntro, scrollToAbout, scrollToExperience, scrollToShowProjects, scrollToCertificates, scrollToContacts }) => {
  // const theme = useTheme();
  const isMobile = useMediaQuery(`(max-width: 1129px)`);

  return (
    <styles.HeaderContainer>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <styles.NavLinkTitle className='shining-text' onClick={scrollToIntro} >EARL ALEXIS M. IGNACIO</styles.NavLinkTitle>
        </Grid>
        <Grid item>
          {isMobile ? (
            <BurgerMenu
              scrollToIntro={scrollToIntro}
              scrollToAbout={scrollToAbout}
              scrollToExperience={scrollToExperience}
              scrollToShowProjects={scrollToShowProjects}
              scrollToCertificates={scrollToCertificates}
              scrollToContacts={scrollToContacts}
            />
          ) : (
            <>
              <styles.NavLink onClick={scrollToAbout} >About</styles.NavLink>
              <styles.NavLink onClick={scrollToExperience} >Experiences</styles.NavLink>
              <styles.NavLink onClick={scrollToShowProjects} >Projects</styles.NavLink>
              {/* <styles.NavLink onClick={scrollToCertificates} >Certificates</styles.NavLink> */}
              <styles.NavLink onClick={scrollToContacts} >Contacts</styles.NavLink>
            </>
          )}
        </Grid>
      </Grid>
    </styles.HeaderContainer>
  );
};

export default Header;
