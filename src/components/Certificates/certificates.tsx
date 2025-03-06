import * as React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import certificateData from './certificates.json'; // Import the JSON file with PDF paths
import Pdf from './CertificateOfCompletion_Java Lambdas and Streams.pdf';

/* eslint-disable */

export interface IAppProps {}

export default function Certificates(props: IAppProps) {
  return (
    <div className="certificates-container">
      <List>
        {certificateData.map((file, index) => (
          <ListItem component="a" href={Pdf} key={index} target="_blank" rel="noopener noreferrer">
            <ListItemText
              primary={<Typography variant="h6" color="primary">{file.name}</Typography>}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
