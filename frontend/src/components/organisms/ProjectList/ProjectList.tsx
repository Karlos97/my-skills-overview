import { BadgeProps } from '@/components/atoms/Badge/Badge';
import ProjectCard from '@molecules/ProjectCard/ProjectCard';
import { useTranslation } from 'react-i18next';

interface Project {
  role: string;
  company: string;
  badges: BadgeProps[];
  description: string;
}

const projects: Project[] = [
  {
    role: 'homePage.projects.finelf.role',
    company: 'homePage.projects.finelf.company',
    badges: [
      { text: 'PostgreSQL', color: 'primary' },
      { text: 'NodeJS', color: 'accent' },
      { text: 'WordPress', color: 'secondary' },
      { text: 'React', color: 'warning' },
    ],
    description: 'homePage.projects.finelf.description',
  },
  {
    role: 'homePage.projects.unikie.role',
    company: 'homePage.projects.unikie.company',
    badges: [
      { text: 'React', color: 'warning' },
      { text: 'webRTC', color: 'secondary' },
      { text: 'threeJS', color: 'accent' },
      { text: 'Virtualization', color: 'primary' },
      { text: 'Contenerization', color: 'warning' },
    ],
    description: 'homePage.projects.unikie.description',
  },
  {
    role: 'homePage.projects.privateCustomer.role',
    company: 'homePage.projects.privateCustomer.company',
    badges: [
      { text: 'MongoDB', color: 'accent' },
      { text: 'Devops', color: 'primary' },
      { text: 'React', color: 'warning' },
      { text: 'Tailwind', color: 'secondary' },
    ],
    description: 'homePage.projects.privateCustomer.description',
  },
  {
    role: 'homePage.projects.railwaymen.role',
    company: 'homePage.projects.railwaymen.company',
    badges: [
      { text: 'React', color: 'warning' },
      { text: 'Storybook', color: 'primary' },
      { text: 'Rails', color: 'accent' },
      { text: 'Haml', color: 'secondary' },
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
    <div className="mt-12">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-7 sm:leading-8 md:leading-9 text-left my-2 sm:my-6">
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
