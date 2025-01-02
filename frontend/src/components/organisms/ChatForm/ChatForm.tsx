import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { PromptFormData, promptSchema } from './chatSchema';
import Input from '@atoms/Input/Input';
import Button from '@atoms/Button/Button';

interface ChatFormProps {
  onSend: (data: PromptFormData) => void;
  loading?: boolean;
}

const ChatForm = ({ onSend, loading }: ChatFormProps) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PromptFormData>({
    resolver: zodResolver(promptSchema),
  });

  const onSubmit = (data: PromptFormData) => {
    onSend(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center space-x-2 p-4"
    >
      <div className="flex-grow">
        <Input
          label={'Chat message'}
          placeholder={t('chat.placeholder')}
          {...register('prompt')}
          error={errors.prompt}
        />
      </div>
      <Button type="submit" disabled={loading} className="mt-2">
        {t('chat.send')}
      </Button>
    </form>
  );
};

export default ChatForm;
