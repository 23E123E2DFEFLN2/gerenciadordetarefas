import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';
import { db } from '../firebase';

const ProjectList = ({ onEdit }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('projects').onSnapshot((snapshot) => {
      const updatedProjects = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(updatedProjects);
    });
    return () => unsubscribe();
  }, []);

  const handleDelete = async (projectId) => {
    await db.collection('projects').doc(projectId).delete();
  };

  return (
    <List>
      {projects.map((project) => (
        <ListItem key={project.id}>
          <ListItemText primary={project.title} secondary={project.orientators} />
          <Button onClick={() => onEdit(project)}>Edit</Button>
          <Button onClick={() => handleDelete(project.id)}>Delete</Button>
        </ListItem>
      ))}
    </List>
  );
};

export default ProjectList;