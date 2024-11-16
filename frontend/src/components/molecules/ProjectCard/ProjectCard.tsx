import Badge, { BadgeProps } from '@atoms/Badge/Badge';

interface ProjectCardProps {
  role: string;
  company: string;
  badges: BadgeProps[];
  description: string;
}

const ProjectCard = ({
  role,
  company,
  badges,
  description,
}: ProjectCardProps) => {
  return (
    <div className="bg-custom-beige-300 dark:bg-custom-dark-300 p-6 rounded-lg shadow-md mt-4">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <h3 className="flex justify-start text-lg font-bold flex-shrink-0 w-full sm:w-72 md:w-80 lg:w-96">
          {role}
          {company ? ` - ${company}` : ''}
        </h3>
        <div className="flex flex-wrap gap-2 items-center">
          {badges.map((badge, index) => (
            <Badge key={index} text={badge.text} color={badge.color} />
          ))}
        </div>
      </div>
      <p className="mt-4">{description}</p>
    </div>
  );
};

export default ProjectCard;
