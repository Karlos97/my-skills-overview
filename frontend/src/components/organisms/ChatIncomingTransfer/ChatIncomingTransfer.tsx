import { ModelResponse } from '@hooks/useStreamFetch';
import BlinkingCursor from '@atoms/BlinkingCursor/BlinkingCursor';
import { useEffect, useState } from 'react';

const ChatIncomingAnswer = ({ response }: { response: ModelResponse[] }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!response || response.length === 0) {
      return;
    }
    const currentResponse: ModelResponse = response[response.length - 1];

    setDisplayedText((prev) => prev + currentResponse.response);
  }, [response]);

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <p className="text-gray-800 font-mono whitespace-pre-wrap">
        {displayedText}
        <BlinkingCursor />
      </p>
    </div>
  );
};

export default ChatIncomingAnswer;
