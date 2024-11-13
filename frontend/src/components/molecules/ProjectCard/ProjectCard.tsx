import Badge from '@atoms/Badge/Badge';

interface ProjectCardProps {
  role: string;
  company: string;
  badges: {
    text: string;
    color: 'bg-green-500' | 'bg-yellow-500' | 'bg-purple-600' | 'bg-orange-500';
  }[];
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
      <div className="flex items-center">
        <h3 className="text-lg font-bold">
          {role}
          {company ? ` - ${company}` : ''}
        </h3>
        <div className="flex space-x-2 ml-4">
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
