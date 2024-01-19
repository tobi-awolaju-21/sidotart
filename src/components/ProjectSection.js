// components/ProjectSection.js

import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const ProjectSection = ({ project, onClose }) => {
  const { title, image, description } = project;

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <img src={image} alt={title} style={{ width: '100%' }} />
        <p>{description}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProjectSection;
