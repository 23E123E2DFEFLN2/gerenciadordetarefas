import React from 'react';
import { Typography, Button } from '@mui/material';

const ProjectDetails = ({ project, onBack }) => {
  return (
    <div>
      <Typography variant="h5">{project.title}</Typography>
      <Typography variant="body1">Orientators: {project.orientators}</Typography>
      <Button onClick={onBack}>Back</Button>
    </div>
  );
};

export default ProjectDetails;