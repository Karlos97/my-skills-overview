import ThemeButton from '@atoms/ThemeButton/ThemeButton';
import LanguageSwitcher from '../../molecules/LanguageSwitcher/LanguageSwitcher';
import LinkButton from '../NavigationButton/NavigationButton';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Link from '../Link/Link';
import Logo from '@/components/atoms/Icons/Logo';

const Header = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const isSimpleAppPath = location.pathname === '/simple-app';

  return (
    <header className="sticky top-0 z-10 p-1 bg-custom-beige-500 dark:bg-custom-dark-500 transition-colors">
      <div className="flex justify-between items-center">
        <Link href="/" className="!m-0">
          <Logo />
        </Link>
        <nav className="flex items-center space-x-2 md:space-x-4 text-sm sm:text-base md:text-lg">
          {isSimpleAppPath ? (
            <LinkButton to="/"> {t('header.home')}</LinkButton>
          ) : (
            <LinkButton to="/simple-app?page=1&recordsPerPage=10">
              {t('header.exampleApp')}
            </LinkButton>
          )}
          <Link href="https://github.com/Karlos97">GitHub</Link>
          <Link href="https://www.linkedin.com/in/karol-minta/">Linkedin</Link>
          <LanguageSwitcher />
          <ThemeButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;
