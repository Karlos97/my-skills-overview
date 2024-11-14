import { useTranslation } from 'react-i18next';

import CartoonPerson from '@atoms/Icons/CartoonPerson';
import ProjectList from '@organisms/ProjectList/ProjectList';
import Github from '@atoms/Icons/Github';
import Linkedin from '@atoms/Icons/Linkedin';
import Link from '@organisms/Link/Link';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="h-full w-full mb-auto text-custom-dark dark:text-custom-beige-500 mt-4 sm:mt-6 md:mt-12 px-4 sm:px-2">
      <div className="flex flex-row items-center md:items-start px-2 pr-4 md:pr-8">
        <div className="max-w-2xl mt-4 sm:mt-8 lg:mt-16 ">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold leading-8 sm:leading-9 md:leading-10 text-left">
            {t('homePage.header')}
            <span className="text-custom-turquoise">
              {` ${t('homePage.name')}`}
            </span>
          </h1>

          <p className="text-md sm:text-lg md:text-xl font-normal leading-7 sm:leading-8 md:leading-9 text-left mt-2">
            {t('homePage.description')}
          </p>
          <div className="flex mt-4 sm:mt-6 md:mt-8">
            <Link
              className="!m-0 !mr-4 md:!mr-8"
              href="https://www.linkedin.com/in/karol-minta/"
            >
              <Linkedin />
            </Link>
            <Link className="!m-0" href="https://github.com/Karlos97">
              <Github />
            </Link>
          </div>
        </div>
        <div className="flex-shrink-0">
          <CartoonPerson />
        </div>
      </div>

      <ProjectList />
    </div>
  );
};

export default HomePage;
