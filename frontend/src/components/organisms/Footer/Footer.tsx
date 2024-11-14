interface FooterProps {
  children: React.ReactNode;
}

const Footer = ({ children }: FooterProps) => {
  return (
    <footer className="py-4 bg-custom-beige-500 dark:bg-custom-dark-500">
      {children}
    </footer>
  );
};

export default Footer;
