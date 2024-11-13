import CartoonPerson from '@/components/atoms/Icons/CartoonPerson';
import ProjectList from '@/components/organisms/ProjectList/ProjectList';
import Github from '@atoms/Icons/Github';
import Linkedin from '@atoms/Icons/Linkedin';
import Link from '@organisms/Link/Link';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="h-full w-full mb-auto text-custom-dark dark:text-custom-beige-500 mt-28">
      <div className="space-y-6 flex">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold leading-10 text-left">
            {t('homePage.header')}
            <span className="text-custom-turquoise">
              {` ${t('homePage.name')}`}
            </span>
          </h1>

          <p className="text-2xl font-normal leading-9 text-left mt-2">
            {t('homePage.description')}
          </p>
          <div className="flex mt-8">
            <Link
              className="!m-0 !mr-8"
              href="https://www.linkedin.com/in/karol-minta/"
            >
              <Linkedin />
            </Link>
            <Link className="!m-0" href="https://github.com/Karlos97">
              <Github />
            </Link>
          </div>
        </div>
        <CartoonPerson />
      </div>

      <ProjectList />
    </div>
  );
};

export default HomePage;
