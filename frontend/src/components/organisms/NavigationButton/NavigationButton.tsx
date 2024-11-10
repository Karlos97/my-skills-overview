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
      className={`inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ${className}`}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
