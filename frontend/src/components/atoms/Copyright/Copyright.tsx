const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-center text-sm sm:text-base md:text-lg py-4 text-custom-dark-500 dark:text-custom-beige-500">
      <p>© {currentYear} Karlos97. All rights reserved.</p>
    </div>
  );
};

export default Copyright;
