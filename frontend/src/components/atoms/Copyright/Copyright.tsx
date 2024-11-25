import { useTranslation } from 'react-i18next';

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <div className="text-center text-xs py-4 text-custom-dark-500 dark:text-custom-beige-500">
      <p>{`© ${currentYear} ${t('footer.copyrightName')} ${t('footer.copyrightRights')}`}</p>
    </div>
  );
};

export default Copyright;
