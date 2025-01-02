import { useTranslation } from 'react-i18next';

export interface Message {
  sender: 'assistant' | 'user';
  message: string;
}

const MessageBubble = ({ message, sender }: Message) => {
  const { t } = useTranslation();

  const isUser = sender === 'user';

  const senderLabel = isUser ? t('chat.user') : t('chat.assistant');

  return (
    <div
      className={`max-w-xl px-4 py-2 rounded-xl mb-2 ${
        isUser
          ? 'bg-blue-100 text-blue-900 self-end rounded-br-none'
          : 'bg-gray-100 text-gray-900 self-start rounded-bl-none'
      }`}
    >
      <div className="text-sm font-bold mb-1">{senderLabel}</div>
      <div className="whitespace-pre-wrap">{message}</div>
    </div>
  );
};

export default MessageBubble;
