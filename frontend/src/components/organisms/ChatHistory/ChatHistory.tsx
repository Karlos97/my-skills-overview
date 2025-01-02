import MessageBubble, { Message } from '@molecules/MessageBubble/MessageBubble';

interface ChatHistoryProps {
  messages: Message[];
}

const ChatHistory = ({ messages }: ChatHistoryProps) => {
  return (
    <div className="flex flex-col space-y-4 p-4">
      {messages.map(({ message, sender }, index) => (
        <MessageBubble key={index} message={message} sender={sender} />
      ))}
    </div>
  );
};

export default ChatHistory;
