import React, { useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';
import ProjectDetails from './components/ProjectDetails';

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleSelectProject = (project) => {
    setSelectedProject(project);
  };

  const handleEditProject = (project) => {
    setSelectedProject(project);
    setIsEditing(true);
  };

  const handleAddProject = () => {
    setSelectedProject(null);
    setIsEditing(true);
  };

  const handleBack = () => {
    setSelectedProject(null);
    setIsEditing(false);
  };

  return (
    <Container>
      <Typography variant="h3">Project Manager</Typography>
      {isEditing ? (
        <>
          <Button onClick={handleBack}>Back</Button>
          <ProjectForm projectId={selectedProject ? selectedProject.id : null} onSubmit={handleBack} />
        </>
      ) : (
        <>
          <Button onClick={handleAddProject}>Add Project</Button>
          <ProjectList onEdit={handleEditProject} />
        </>
      )}
      {selectedProject && !isEditing && <ProjectDetails project={selectedProject} onBack={handleBack} />}
    </Container>
  );
};

export default App;