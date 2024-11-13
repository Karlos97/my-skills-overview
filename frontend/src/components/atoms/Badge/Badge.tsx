interface BadgeProps {
  text: string;
  color: string;
}

const Badge = ({ text, color }: BadgeProps) => {
  return (
    <span
      className={`text-white text-sm font-semibold px-2 py-1 rounded ${color}`}
    >
      {text}
    </span>
  );
};

export default Badge;
