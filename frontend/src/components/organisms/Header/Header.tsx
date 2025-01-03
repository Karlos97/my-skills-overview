import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Logo from '@atoms/Icons/Logo';
import ThemeButton from '@atoms/ThemeButton/ThemeButton';
import LanguageSwitcher from '@molecules/LanguageSwitcher/LanguageSwitcher';
import Link from '@organisms/Link/Link';
import LinkButton from '@organisms/NavigationButton/NavigationButton';

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
            <LinkButton to="/">
              <span className="hidden sm:inline">{t('header.home')}</span>
              <span className="sm:hidden">{t('header.homeShort')}</span>
            </LinkButton>
          ) : (
            <LinkButton to="/simple-app?page=1&recordsPerPage=10">
              <span className="hidden sm:inline">{t('header.exampleApp')}</span>
              <span className="sm:hidden">{t('header.exampleAppShort')}</span>
            </LinkButton>
          )}
          <LinkButton to="/chat">
            <span className="hidden sm:inline">{t('header.chat')}</span>
          </LinkButton>
          <Link href="https://github.com/Karlos97">
            <span className="hidden sm:inline">GitHub</span>
            <span className="sm:hidden">Git</span>
          </Link>
          <Link href="https://www.linkedin.com/in/karol-minta/">Linkedin</Link>
          <LanguageSwitcher />
          <ThemeButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;
