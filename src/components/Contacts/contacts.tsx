import * as React from 'react';
import * as styles from './Contacts.style';
import { Container, Box, Typography, Button, Tooltip } from '@mui/material';
import { LinkedIn, Email, FileDownload } from '@mui/icons-material';
import SendIcon from '@mui/icons-material/Send';

/* eslint-disable */

export interface IAppProps {}

const Contacts: React.FC<IAppProps> = () => {
  const [emailCopied, setEmailCopied] = React.useState(false);
  const [resumeDownloading, setResumeDownloading] = React.useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('earlalexisignacio@gmail.com').then(() => {
      setEmailCopied(true);
      setTimeout(() => {
        setEmailCopied(false);
      }, 3000);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  const handleResumeDownload = () => {
    setResumeDownloading(true);
    setTimeout(() => {
      setResumeDownloading(false);
    }, 3000); // Revert back after 3 seconds
  };

  return (
    <div>
      <styles.backgroundStyle>
        <Container maxWidth="lg" style={{ textAlign: 'center', margin: '5rem 0rem' }}>
          <Box mb={4}>
            <Typography variant="h4" sx={{color: 'black'}} gutterBottom>
              Contact Me
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              Feel free to reach out to me through the following platforms:
            </Typography>
          </Box>
          <styles.CardContainer>
            <styles.LinkStyle href="https://www.linkedin.com/in/eamignacio" target="_blank" rel="noopener">
              <styles.CardStyle>
                <styles.CardImage src="/linkedin.png" alt="LinkedIn" />
                <styles.CardTitle variant="h6">LinkedIn</styles.CardTitle>
                <styles.Divider />
                <styles.CardText variant="body2">
                  Connect with me on LinkedIn for professional networking.
                </styles.CardText>
                <Button startIcon={<LinkedIn />} color="secondary" variant="outlined" fullWidth>
                  Visit LinkedIn
                </Button>
              </styles.CardStyle>
            </styles.LinkStyle>
            <styles.CardStyle>
              <styles.CardImage src="/email.png" alt="Email" />
              <styles.CardTitle variant="h6">Email</styles.CardTitle>
              <styles.Divider />
              <styles.CardText variant="body2">
                <span style={{ fontWeight: 'bold' }}>COPY</span> my email address or <span style={{ fontWeight: 'bold' }}>SEND</span> me an email directly.
              </styles.CardText>
              <Button
                startIcon={<Email />}
                variant="outlined"
                fullWidth
                onClick={copyEmailToClipboard}
                style={{ backgroundColor: emailCopied ? '#d3d3d3' : 'transparent', color: emailCopied ? '#666' : 'black' }}
              >
                {emailCopied ? 'EMAIL COPIED' : 'Copy Email'}
              </Button>
              <Tooltip title="Will only work if a default mailto application is set">
                <Button
                  startIcon={<SendIcon />}
                  variant="outlined"
                  color="secondary"
                  fullWidth
                  href="mailto:earlalexisignacio@gmail.com"
                  style={{ marginTop: '8px' }}
                >
                  Send Email
                </Button>
              </Tooltip>
            </styles.CardStyle>
            <styles.EmphasizedCardStyle>
              <styles.CardImage src="/resume.png" alt="Resume" />
              <styles.CardTitle variant="h6">Resume</styles.CardTitle>
              <styles.Divider />
              <styles.CardText variant="body2">
                Click the button below to download a copy of my resume.
              </styles.CardText>
              <Button
                startIcon={<FileDownload />}
                variant="contained"
                size="large"
                color="secondary"
                href="/src/assets/Resume - Earl Alexis Ignacio.pdf"
                download
                fullWidth
                onClick={handleResumeDownload}
                style={{ backgroundColor: resumeDownloading ? 'grey' : '#035efc', color: resumeDownloading ? '#e0e0e0' : '#fff' }}
              >
                {resumeDownloading ? 'Starting Download...' : 'Download'}
              </Button>
            </styles.EmphasizedCardStyle>
          </styles.CardContainer>
        </Container>
      </styles.backgroundStyle>
    </div>
  );
};

export default Contacts;
