import { useTranslation } from 'react-i18next';

import IconEnglish from '@/components/atoms/Icons/IconEnglish';
import IconPolish from '@/components/atoms/Icons/IconPolish';
import Button from '@/components/atoms/Button/Button';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <Button
        onClick={() => changeLanguage(currentLanguage === 'pl' ? 'en' : 'pl')}
        className="mt-4 px-4 py-2 bg-transparent hover:bg-transparent hover:scale-110 cursor-pointer"
      >
        {currentLanguage === 'pl' ? <IconEnglish /> : <IconPolish />}
      </Button>
    </>
  );
};

export default LanguageSwitcher;
