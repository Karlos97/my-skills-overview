import { useTranslation } from 'react-i18next';
import { BadgeProps } from '@atoms/Badge/Badge';
import ProjectCard from '@molecules/ProjectCard/ProjectCard';

interface Project {
  role: string;
  company: string;
  badges: BadgeProps[];
  description: string;
}

const projects: Project[] = [
  {
    role: 'homePage.projects.roche.role',
    company: 'homePage.projects.roche.company',
    badges: [
      { text: 'AWS', color: 'primary' },
      { text: 'DynamoDB', color: 'accent' },
      { text: 'Lambda', color: 'secondary' },
      { text: 'OpenSearch', color: 'warning' },
      { text: 'AppSync', color: 'primary' },
      { text: 'CI/CD', color: 'accent' },
    ],
    description: 'homePage.projects.roche.description',
  },
  {
    role: 'homePage.projects.finelf.role',
    company: 'homePage.projects.finelf.company',
    badges: [
      { text: 'React', color: 'warning' },
      { text: 'NodeJS', color: 'accent' },
      { text: 'AWS', color: 'primary' },
      { text: 'PostgreSQL', color: 'secondary' },
      { text: 'Docker', color: 'accent' },
      { text: 'Python', color: 'warning' },
    ],
    description: 'homePage.projects.finelf.description',
  },
  {
    role: 'homePage.projects.valmet.role',
    company: 'homePage.projects.valmet.company',
    badges: [
      { text: 'React', color: 'warning' },
      { text: 'TypeScript', color: 'primary' },
      { text: 'WebRTC', color: 'secondary' },
      { text: 'Three.js', color: 'accent' },
      { text: 'Kubernetes', color: 'primary' },
      { text: 'Docker', color: 'accent' },
    ],
    description: 'homePage.projects.valmet.description',
  },
  {
    role: 'homePage.projects.privateCustomer.role',
    company: 'homePage.projects.privateCustomer.company',
    badges: [
      { text: 'Next.js', color: 'warning' },
      { text: 'React', color: 'primary' },
      { text: 'TypeScript', color: 'accent' },
      { text: 'Tailwind', color: 'secondary' },
      { text: 'MongoDB', color: 'primary' },
      { text: 'Docker', color: 'accent' },
    ],
    description: 'homePage.projects.privateCustomer.description',
  },
  {
    role: 'homePage.projects.railwaymen.role',
    company: 'homePage.projects.railwaymen.company',
    badges: [
      { text: 'React', color: 'warning' },
      { text: 'TypeScript', color: 'primary' },
      { text: 'Storybook', color: 'accent' },
      { text: 'Sass', color: 'secondary' },
      { text: 'GitLab', color: 'primary' },
    ],
    description: 'homePage.projects.railwaymen.description',
  },
  {
    role: 'homePage.projects.automation.role',
    company: 'homePage.projects.automation.company',
    badges: [
      { text: 'PLC', color: 'primary' },
      { text: 'HMI', color: 'accent' },
      { text: 'Industrial', color: 'secondary' },
    ],
    description: 'homePage.projects.automation.description',
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
