export interface BadgeProps {
  text: string;
  color: 'primary' | 'secondary' | 'accent' | 'warning';
}

const colorVariants = {
  primary: 'bg-green-500 dark:bg-green-700',
  secondary: 'bg-purple-600 dark:bg-purple-800',
  accent: 'bg-yellow-500 dark:bg-yellow-700',
  warning: 'bg-orange-500 dark:bg-orange-700',
} as const;

const Badge = ({ text, color }: BadgeProps) => {
  return (
    <span
      className={`text-white text-sm font-semibold m-1 px-2 py-1 rounded w-min h-fit ${colorVariants[color]}`}
    >
      {text}
    </span>
  );
};

export default Badge;
