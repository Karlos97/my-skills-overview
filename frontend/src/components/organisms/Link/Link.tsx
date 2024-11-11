interface LinkButtonProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const Link = ({ href, children, className }: LinkButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className={`m-4 text-gray-800 dark:text-white font-semibold hover:scale-105 focus:outline-none ${className}`}
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export default Link;
