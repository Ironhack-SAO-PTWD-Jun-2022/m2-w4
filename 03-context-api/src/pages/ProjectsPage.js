import { useContext, useState } from 'react';
import { ThemeContext } from '../context/theme.context';

import ProjectCard from './ProjectCard';

import projectsData from '../projects-data.json';

const ProjectsPage = () => {
  const [projects, setProjects] = useState(projectsData);

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`ProjectsPage ${theme}`}>
      <h1>Meus Projetos</h1>
      <div className='projects'>
        {projects.map((project) => 
          <ProjectCard key={project._id} project={project}/>
        )}
      </div>
    </div>
  )
}

export default ProjectsPage;