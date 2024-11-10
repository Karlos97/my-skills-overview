import Github from '@/components/atoms/Icons/Github';
import Linkedin from '@/components/atoms/Icons/Linkedin';

const SocialMediaButtonType = {
  LINKEDIN: 'linked-in',
  GITHUB: 'github',
} as const;

type SocialMediaButtonType =
  (typeof SocialMediaButtonType)[keyof typeof SocialMediaButtonType];

interface SocialMediaButtonProps {
  type: SocialMediaButtonType;
  href: string;
}

const SocialMediaButton = ({ type, href }: SocialMediaButtonProps) => {
  return (
    <a
      href={href}
      className="mt-4 px-4 py-2 bg-gray-50 dark:bg-gray-800 hover:bg-blue-500 hover:dark:bg-gray-600 !text-gray-700 hover:!text-white dark:!text-white rounded-md cursor-pointer"
    >
      {type === 'linked-in' ? <Linkedin /> : <Github />}
    </a>
  );
};

export default SocialMediaButton;
