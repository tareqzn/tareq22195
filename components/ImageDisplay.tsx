
import React from 'react';

interface ImageDisplayProps {
  imageUrl: string | null;
  isLoading: boolean;
  error: string | null;
}

const LoadingSkeleton: React.FC = () => (
  <div className="w-full aspect-video bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg flex flex-col items-center justify-center animate-pulse p-4">
    <div className="text-gray-500 text-center">
      <p className="text-lg font-semibold mb-2">Generating your masterpiece...</p>
      <p className="text-sm">This may take a moment. High-quality art requires a bit of digital thought.</p>
    </div>
  </div>
);

const Placeholder: React.FC = () => (
  <div className="w-full aspect-video bg-gray-800/50 border-2 border-dashed border-gray-700 rounded-lg flex items-center justify-center p-4">
    <div className="text-center text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <h3 className="mt-2 text-sm font-medium text-gray-400">Your generated art will appear here</h3>
        <p className="mt-1 text-sm text-gray-500">Enter a prompt above and click "Generate".</p>
    </div>
  </div>
);

const ErrorDisplay: React.FC<{ message: string }> = ({ message }) => (
    <div className="w-full aspect-video bg-red-900/20 border-2 border-dashed border-red-500/50 rounded-lg flex items-center justify-center p-4">
        <div className="text-center text-red-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-2 text-lg font-semibold">Generation Failed</h3>
            <p className="mt-1 text-sm max-w-md mx-auto">{message}</p>
        </div>
    </div>
);


export const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl, isLoading, error }) => {
  if (isLoading) {
    return <LoadingSkeleton />;
  }
  
  if (error) {
    return <ErrorDisplay message={error} />;
  }

  if (imageUrl) {
    return (
      <div className="w-full aspect-video bg-black rounded-lg overflow-hidden shadow-2xl shadow-amber-500/10">
        <img
          src={imageUrl}
          alt="Generated cover art"
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  return <Placeholder />;
};
