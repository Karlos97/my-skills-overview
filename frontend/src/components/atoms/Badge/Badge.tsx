interface BadgeProps {
  text: string;
  color: string;
}

const Badge = ({ text, color }: BadgeProps) => {
  return (
    <span
      className={`text-white text-sm font-semibold m-1 px-2 py-1 rounded w-min h-fit ${color}`}
    >
      {text}
    </span>
  );
};

export default Badge;
