
import React from 'react';

interface PromptInputProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export const PromptInput: React.FC<PromptInputProps> = ({ prompt, setPrompt, onSubmit, isLoading }) => {
  
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
      event.preventDefault();
      if (!isLoading) {
        onSubmit();
      }
    }
  };

  return (
    <div className="w-full mb-8">
      <div className="relative">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Describe the cover art you want to create..."
          className="w-full h-48 p-4 pr-32 bg-gray-800 border-2 border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors resize-none"
          disabled={isLoading}
        />
        <button
          onClick={onSubmit}
          disabled={isLoading}
          className="absolute top-1/2 right-4 -translate-y-1/2 px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-300 ease-in-out flex items-center justify-center shadow-lg hover:shadow-amber-500/30 disabled:shadow-none"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </>
          ) : (
            'Generate'
          )}
        </button>
      </div>
       <p className="text-sm text-gray-500 mt-2 text-center">Tip: Use Ctrl+Enter or Cmd+Enter to submit.</p>
    </div>
  );
};
