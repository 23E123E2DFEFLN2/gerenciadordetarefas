import React from 'react';
import { ListItem, ListItemText, Button } from '@mui/material';

const ProjectItem = ({ project, onSelect }) => {
  return (
    <ListItem>
      <ListItemText primary={project.title} secondary={project.orientators} />
      <Button onClick={() => onSelect(project)}>Details</Button>
    </ListItem>
  );
};

export default ProjectItem;