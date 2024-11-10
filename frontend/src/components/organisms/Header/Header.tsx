import ThemeButton from '@atoms/ThemeButton/ThemeButton';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import SocialMediaButton from '../SocialMediaButton/SocialMediaButton';
import LinkButton from '../NavigationButton/NavigationButton';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 p-1 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="flex justify-end items-center">
        <LinkButton to="/simple-app?page=1&recordsPerPage=10">
          Example Fullstack app
        </LinkButton>
        <LinkButton to="/">Home</LinkButton>
        <SocialMediaButton href="" type="linked-in" />
        <SocialMediaButton href="" type="github" />
        <LanguageSwitcher />
        <ThemeButton />
      </div>
    </header>
  );
};

export default Header;
