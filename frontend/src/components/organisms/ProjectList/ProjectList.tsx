import ProjectCard from '@molecules/ProjectCard/ProjectCard';
import { useTranslation } from 'react-i18next';

interface Project {
  role: string;
  company: string;
  badges: {
    text: string;
    color: 'bg-green-500' | 'bg-yellow-500' | 'bg-purple-600' | 'bg-orange-500';
  }[];
  description: string;
}

const projects: Project[] = [
  {
    role: 'homePage.projects.finelf.role',
    company: 'homePage.projects.finelf.company',
    badges: [
      { text: 'PostgreSQL', color: 'bg-green-500' },
      { text: 'NodeJS', color: 'bg-yellow-500' },
      { text: 'WordPress', color: 'bg-purple-600' },
      { text: 'React', color: 'bg-orange-500' },
    ],
    description: 'homePage.projects.finelf.description',
  },
  {
    role: 'homePage.projects.unikie.role',
    company: 'homePage.projects.unikie.company',
    badges: [
      { text: 'React', color: 'bg-orange-500' },
      { text: 'webRTC', color: 'bg-purple-600' },
      { text: 'threeJS', color: 'bg-yellow-500' },
      { text: 'Virtualization & Contenerization', color: 'bg-green-500' },
    ],
    description: 'homePage.projects.unikie.description',
  },
  {
    role: 'homePage.projects.privateCustomer.role',
    company: 'homePage.projects.privateCustomer.company',
    badges: [
      { text: 'MongoDB', color: 'bg-yellow-500' },
      { text: 'Devops', color: 'bg-green-500' },
      { text: 'React', color: 'bg-orange-500' },
      { text: 'Tailwind', color: 'bg-purple-600' },
    ],
    description: 'homePage.projects.privateCustomer.description',
  },
  {
    role: 'homePage.projects.railwaymen.role',
    company: 'homePage.projects.railwaymen.company',
    badges: [
      { text: 'React', color: 'bg-orange-500' },
      { text: 'Storybook', color: 'bg-green-500' },
      { text: 'Rails', color: 'bg-yellow-500' },
      { text: 'Haml', color: 'bg-purple-600' },
    ],
    description: 'homePage.projects.railwaymen.description',
  },
  {
    role: 'homePage.projects.rest.role',
    company: '',
    badges: [],
    description: 'homePage.projects.rest.description',
  },
];

const ProjectList = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-3xl font-semibold leading-10 text-left my-8">
        {`${t('homePage.projects.headerPart1')} `}
        <span className="text-custom-turquoise">
          {t('homePage.projects.headerPart2')}
        </span>
      </h1>
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            badges={project.badges}
            company={t(project.company)}
            role={t(project.role)}
            description={t(project.description)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
