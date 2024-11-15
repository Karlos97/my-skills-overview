export interface BadgeProps {
  text: string;
  color: 'green' | 'yellow' | 'purple' | 'orange';
}

const Badge = ({ text, color }: BadgeProps) => {
  const getBgColor = () => {
    switch (color) {
      case 'green':
        return 'bg-green-500 dark:bg-green-700';
      case 'yellow':
        return 'bg-yellow-500 dark:bg-yellow-700';
      case 'purple':
        return 'bg-purple-600 dark:bg-purple-800';
      default:
        return 'bg-orange-500 dark:bg-orange-700';
    }
  };

  return (
    <span
      className={`text-white text-sm font-semibold m-1 px-2 py-1 rounded w-min h-fit ${getBgColor()}`}
    >
      {text}
    </span>
  );
};

export default Badge;
