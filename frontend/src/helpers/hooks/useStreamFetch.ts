import { useEffect, useRef, useState } from 'react';
import { aiServiceLink } from '../constans';

export interface ModelResponse {
  model: string;
  created_at: string;
  response: string;
  done: boolean;
}

interface UseStreamFetchResult {
  modelResponse: ModelResponse[];
  isLoading: boolean;
  error: Error | null;
}
export const useStreamFetch = (prompt: string): UseStreamFetchResult => {
  const [modelResponse, setModelResponse] = useState<ModelResponse[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!prompt) return;

    const fetchStream = async () => {
      setIsLoading(true);
      setError(null);

      const controller = new AbortController();
      abortControllerRef.current = controller;

      try {
        const response = await fetch(aiServiceLink, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: prompt,
          }),
          signal: controller.signal,
        });

        if (!response.ok) {
          const errorText = await response.text();
          const parsedErrorText = JSON.parse(errorText)?.error;
          setError(parsedErrorText as Error);
          setIsLoading(false);

          throw new Error(
            `HTTP error! status: ${response.status}. Message: ${parsedErrorText}`,
          );
        }

        if (!response.body) {
          throw new Error('No response body');
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder('utf-8');

        let done = false;
        while (!done) {
          const { value, done: streamDone } = await reader.read();
          done = streamDone;
          if (value) {
            const chunk = decoder.decode(value, { stream: true });

            setModelResponse((prev) => [...prev, JSON.parse(chunk)]);
          }
        }
      } catch (err) {
        if (!(err instanceof DOMException && err.name === 'AbortError')) {
          setError(err as Error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchStream();

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
        abortControllerRef.current = null;
      }
    };
  }, [prompt]);

  return { modelResponse, isLoading, error };
};
