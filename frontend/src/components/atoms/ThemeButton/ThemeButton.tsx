import useDarkMode from '@hooks/useDarkMode';
import Button from '@atoms/Button/Button';
import MoonIcon from '@atoms/Icons/Moon';
import SunIcon from '@atoms/Icons/Sun';

const ThemeButton = () => {
  const [theme, setTheme] = useDarkMode();

  return (
    <Button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="px-1 sm:px-2 md:px-4 py-2 bg-custom-beige-500 dark:bg-custom-dark-500 hover:bg-blue-500 hover:dark:bg-gray-600 !text-gray-700 hover:!text-white dark:!text-white rounded-md cursor-pointer"
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};

export default ThemeButton;
