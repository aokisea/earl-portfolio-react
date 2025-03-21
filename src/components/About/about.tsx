import React from 'react';
// import Button from '@mui/material/Button';
import * as styles from './About.style';
import { Grid } from '@mui/material';
import myPic from '../../assets/ea.png';
import './about.css';

const About: React.FC = () => {
  return (
    
    <styles.backgroundStyle>
      <Grid container sx={{ flexDirection: { xs: "row", lg: "column"}, margin: '6rem 1rem 0rem 0rem'}}>
            <Grid item xs={12} md={12} lg={6} xl={7}>
              <styles.boxContents>
                <styles.myPics src={myPic} alt="A picture of me, Earl Alexis Ignacio"></styles.myPics>
                <Grid container spacing={2} sx={{ marginTop: '2rem', width: '100%', alignItems: 'center', justifyContent: 'space-evenly' }} >
                  <Grid item xs={12} sm={6} md={4.5} lg={6} xl={4}>
                    <styles.roundedBox sx={{ backgroundColor: 'transparent', color: 'yellow' }}>Unity Engine</styles.roundedBox>
                  </Grid>
                  <Grid item xs={5} sm={6} md={3} lg={6} xl={4}>
                    <styles.roundedBox sx={{ backgroundColor: 'transparent', color: 'yellow' }}>C#</styles.roundedBox>
                  </Grid>
                  <Grid item xs={7} sm={6} md={4.5} lg={6} xl={4}>
                    <styles.roundedBox sx={{ backgroundColor: 'transparent' }}>Unreal Engine 5</styles.roundedBox>
                  </Grid>
                  <Grid item xs={5} sm={6} md={4} lg={6} xl={3}>
                    <styles.roundedBox sx={{ backgroundColor: 'transparent' }}>Blender3D</styles.roundedBox>
                  </Grid>
                  <Grid item xs={3.5} sm={4} md={2} lg={6} xl={3}>
                    <styles.roundedBox sx={{ backgroundColor: 'transparent' }}>AWS</styles.roundedBox>
                  </Grid>
                  <Grid item xs={3.5} sm={4} md={2} lg={6} xl={3}>
                    <styles.roundedBox sx={{ backgroundColor: 'transparent' }}>GIMP</styles.roundedBox>
                  </Grid>
                  <Grid item xs={5} sm={4} md={4} lg={6} xl={3}>
                    <styles.roundedBox sx={{ backgroundColor: 'transparent' }}>Java</styles.roundedBox>
                  </Grid>
                  <Grid item xs={7} sm={6} md={4} lg={6} xl={4}>
                    <styles.roundedBox sx={{ backgroundColor: 'transparent' }}>3D Animation</styles.roundedBox>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={12} xl={5}>
                    <styles.roundedBox sx={{ backgroundColor: 'transparent' }}>Web Development</styles.roundedBox>
                  </Grid>
                  <Grid item xs={6} sm={6} md={4} lg={6} xl={3}>
                    <styles.roundedBox sx={{ backgroundColor: 'transparent' }}>React</styles.roundedBox>
                  </Grid>
                  <Grid item xs={6} sm={6} md={4.5} lg={6} xl={4}>
                    <styles.roundedBox sx={{ backgroundColor: 'transparent' }}>Springboot</styles.roundedBox>
                  </Grid>
                  <Grid item xs={6} sm={6} md={3} lg={6} xl={4}>
                    <styles.roundedBox sx={{ backgroundColor: 'transparent' }}>Javascript</styles.roundedBox>
                  </Grid>
                  <Grid item xs={6} sm={6} md={4.5} lg={6} xl={4}>
                    <styles.roundedBox sx={{ backgroundColor: 'transparent' }}>Typescript</styles.roundedBox>
                  </Grid>
                </Grid>
          </styles.boxContents>
        </Grid>
        <Grid item xs={12} md={12} lg={6} xl={5}>
          <styles.boxContents>
            <styles.header>About Me</styles.header>
            <styles.body>
            Hello! I am <styles.highlight className='shining-text'>Earl Alexis M. Ignacio</styles.highlight>, a Passionate Game Developer and Software Engineer with expertise in building
            immersive gaming experiences and developing apps and websites. Proficient
            in various programming languages and game engines, with a constant drive
            to learn new things. Actively contributes to team success by providing
            guidance and support when needed.
            </styles.body>
            {/* <Button variant="contained">Hello World</Button> */}
          </styles.boxContents>
        </Grid>
      </Grid>
    </styles.backgroundStyle>
  );
};

export default About;