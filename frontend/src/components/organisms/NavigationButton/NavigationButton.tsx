import { Link } from 'react-router-dom';

interface LinkButtonProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const LinkButton = ({ to, children, className = '' }: LinkButtonProps) => {
  return (
    <Link
      to={to}
      className={`m-4 text-gray-800 dark:text-white font-semibold hover:scale-105 focus:outline-none ${className}`}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
