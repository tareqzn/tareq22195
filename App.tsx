import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { PromptInput } from './components/PromptInput';
import { ImageDisplay } from './components/ImageDisplay';
import { ExamplePrompts } from './components/ExamplePrompts';
import { generateCoverArt } from './services/geminiService';

const initialPrompt = `YouTube cover art, 2560x1440, cinematic and mysterious. An empty, dusty old room with a large antique wall clock stopped precisely at 3:14. Sunlight slants through a broken window, illuminating floating dust. On a wooden table: a cold coffee cup, a torn page with faint handwriting "Layla... didn't arrive", and a small brass gear. No human figure. A long shadow stretches on the wall with no source. Overlay text in elegant, slightly worn serif font at the center: "ماذا لو نساك الزمن ؟ "— text is subtle, integrated into the scene, not overpowering. Color palette: sepia, muted gold, deep brown, foggy gray. Photorealistic, 8k, atmospheric lighting, shallow depth of field, perfect for audio drama thumbnail --ar 16:9 --style raw --v 6.0`;

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>(initialPrompt);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    if (!prompt.trim()) {
      setError("Prompt cannot be empty.");
      return;
    }
    
    setIsLoading(true);
    setError(null);
    setImageUrl(null);
    
    try {
      const generatedImageUrl = await generateCoverArt(prompt);
      setImageUrl(generatedImageUrl);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred.";
      setError(`Failed to generate image: ${errorMessage}`);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [prompt]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl mx-auto">
        <Header />
        <main>
          <PromptInput
            prompt={prompt}
            setPrompt={setPrompt}
            onSubmit={handleGenerate}
            isLoading={isLoading}
          />
          <ExamplePrompts onSelectPrompt={setPrompt} />
          <ImageDisplay
            imageUrl={imageUrl}
            isLoading={isLoading}
            error={error}
          />
        </main>
      </div>
    </div>
  );
};

export default App;