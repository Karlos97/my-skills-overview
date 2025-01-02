import { useEffect, useState } from 'react';
import ChatHistory from '@organisms/ChatHistory/ChatHistory';
import ChatForm from '@organisms/ChatForm/ChatForm';
import ChatIncomingAnswer from '@organisms/ChatIncomingTransfer/ChatIncomingTransfer';
import { Message } from '@molecules/MessageBubble/MessageBubble';
import { useStreamFetch } from '@hooks/useStreamFetch';
import { useTranslation } from 'react-i18next';

const ChatPage = () => {
  const { t } = useTranslation();
  const [inputPrompt, setInputPrompt] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const { modelResponse, isLoading, error } = useStreamFetch(inputPrompt);

  useEffect(() => {
    if (inputPrompt.trim() !== '') {
      setMessages((prev) => [
        ...prev,
        { message: inputPrompt, sender: 'user' },
      ]);
    }
  }, [inputPrompt]);

  useEffect(() => {
    if (
      !isLoading &&
      modelResponse?.length > 0 &&
      modelResponse[modelResponse.length - 1].done
    ) {
      const answer = modelResponse
        .map((message) => message.response)
        .reduce((acc, curr) => acc + curr, '');

      setMessages((prev) => [
        ...prev,
        { message: answer, sender: 'assistant' },
      ]);
    }
  }, [isLoading]);

  return (
    <div className="px-4">
      <div className="h-full w-full mb-auto">
        <h1 className="mb-6 text-3xl text-gray-600 dark:text-white font-bold text-center">
          {t('chat.header')}
        </h1>
        <p className="text-center text-sm sm:text-base text-gray-900 dark:text-white mb-8">
          {t('chat.description')}
        </p>
      </div>
      <ChatHistory messages={messages} />
      {isLoading && <ChatIncomingAnswer response={modelResponse} />}
      <ChatForm
        onSend={({ prompt }) => setInputPrompt(prompt)}
        loading={isLoading}
      />
      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded shadow-md">
          <p className="font-medium">Error:</p>
          <p className="text-sm">{error.message}</p>
        </div>
      )}
    </div>
  );
};

export default ChatPage;
