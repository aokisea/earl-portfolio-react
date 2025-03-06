import * as styles from './ShowProjects.style';
import { Grid } from '@mui/material';
import { Element, Link } from 'react-scroll';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import BG1 from '../../assets/BG4.png';
import BG2 from '../../assets/BG5.png';
import BG3 from '../../assets/BG6.png';
import BG4 from '../../assets/BG7.png';
import BG5 from '../../assets/BG8.png';
import BG6 from '../../assets/BG9.png';

const projects = [
  { id: 'project1', genre: 'Simulation, Casual, Social, Open World', headline: 'METAVERSE GAME (2023)', subtitle: 'Lead Developer (Coding, Design, Animation, Rigging)', videoId: 'wgdI0nkWhBs?si=VmyinzikCFeSD5Hw', img: BG1 },
  { id: 'project2', genre: 'Third Person, Action, Shooter', headline: 'SHOOTER GAME (2023)', subtitle: 'Lead Developer (Coding, Design, Animation, Rigging)', videoId: 'z1qGXMk6Gtw?si=RuXqNOHRMbkOw-Ss', img: BG2 },
  { id: 'project3', genre: 'Educational, Puzzle, Simulation, Minigames', headline: 'SURBYE-VAL (2021)', subtitle: 'Lead Developer (Coding, Design, Animation, Rigging)', videoId: 'hDP2kJi_dNI?si=06AkOBsUvaAQRqLb', img: BG3 },
  { id: 'project4', genre: 'Educational, Puzzle, Action, Minigames', headline: 'BAYANI (2018)', subtitle: 'Lead Developer (Coding, Design, Animation, Rigging)', videoId: 'crfG_SDWryU?si=B0IwFcfTCGEe5wn6', img: BG4 },
  { id: 'project5', genre: 'Short 3D Animation clip using Unity', headline: 'Casino', subtitle: '3D Animation', videoId: '4Aiwc_8fbvY?si=7V9SjLcyEhYzEz9K', img: BG5 },
  { id: 'project6', genre: 'Short 3D Animation clip using Blender from a school project', headline: 'Carnival', subtitle: '3D Animation', videoId: 'iTfrewSSeA4?si=YF-pKAXQG3ar6zQd', img: BG6 }
];

function ShowProjects() {
  return (
    <div>
      <div style={{ padding: '5rem 0'}}>
        <div style={{ width: '62%', height: 'auto', margin: '0 auto' }}>
          <Carousel>
            {projects.map((project, index) => ( 
              <div key={index}>
                <img src={project.img} alt={`Slide ${index + 1}`} />
                <Link to={project.id} spy={true} smooth={true} duration={500}>
                  <p className="legend">{project.headline}</p>
                </Link>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
          
      {projects.map((project, index) => (
        <Element name={project.id} key={index}>
          <styles.BackgroundStyle img={project.img}>
            <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
              <div>
                <styles.genre>{project.genre}</styles.genre>
                <styles.lineStyle />
                <styles.headline>{project.headline}</styles.headline>
                <styles.subtitle>{project.subtitle}</styles.subtitle>
              </div>
              <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', minHeight: '70vh', width: '100%', position: 'relative' }}>
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${project.videoId}`}
                  title={`${project.headline} Video`}
                  frameBorder="0"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    bottom: 100,
                    left: 70,
                  }}
                ></iframe>
              </Grid>
            </Grid>
          </styles.BackgroundStyle>
        </Element>
      ))}
    </div>
  );
}

export default ShowProjects;
