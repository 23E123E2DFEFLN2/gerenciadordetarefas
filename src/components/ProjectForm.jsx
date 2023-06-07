import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { db } from '../firebase';

const ProjectForm = ({ projectId, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [orientators, setOrientators] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const project = { title, orientators };
    if (projectId) {
      await db.collection('projects').doc(projectId).update(project);
    } else {
      await db.collection('projects').add(project);
    }
    onSubmit();
    setTitle('');
    setOrientators('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        fullWidth
      />
      <TextField
        label="Orientators"
        value={orientators}
        onChange={(e) => setOrientators(e.target.value)}
        required
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        {projectId ? 'Update' : 'Add'}
      </Button>
    </form>
  );
};

export default ProjectForm;