import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Função para buscar os projetos do Firebase Firestore
    const fetchProjects = async () => {
      try {
        const snapshot = await firebase.firestore().collection('projects').get();
        const projectList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProjects(projectList);
      } catch (error) {
        console.log('Erro ao buscar os projetos:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h1>Lista de Projetos</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          {/* Renderizar outras informações do projeto aqui */}
        </div>
      ))}
    </div>
  );
};

export default ProjectPage;
