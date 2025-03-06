import React from 'react';
import { ExperienceList } from '../../interfaces/types';
import * as styles from './Experience.style';
import { Grid, Typography } from '@mui/material';

interface ExperienceProps {
  experiences: ExperienceList[];
}


const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <styles.backgroundStyle>
      <styles.Container container spacing={0} columns={1} >
        <Grid item xs={1} sx={{ margin: '5rem 0 2rem 0' }}>
        <Typography variant='h3' sx={{ marginBottom: '0rem', }}>Experiences</Typography>
        </Grid>
        {experiences.map((experience, index) => (
          <Grid item xs={1} sx={{ margin: '1rem 15% 1rem 15%' }}>
            <styles.Item key={index}>
              <Typography><span style={{color: 'yellow'}}>{experience.position}</span> at {experience.companyName}</Typography>
              <p>{experience.years}</p>
              <p>Skills: {experience.skills}</p>
            </styles.Item>
          </Grid>
        ))}
      </styles.Container>
    </styles.backgroundStyle>
  );
};

export default Experience;