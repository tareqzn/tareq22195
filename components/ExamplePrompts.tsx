import React from 'react';

interface ExamplePromptsProps {
  onSelectPrompt: (prompt: string) => void;
}

const examples = [
  {
    title: 'Cyberpunk City',
    prompt: `Expansive cyberpunk cityscape at night, drenched in neon light. Flying vehicles weave between towering, holographic-adorned skyscrapers. A lone figure in a long coat stands on a rooftop, looking out over the rain-slicked metropolis. Moody, Blade Runner-inspired aesthetic, cinematic lighting, 8k, ultra-detailed. --ar 16:9 --style raw`,
  },
  {
    title: 'Fantasy Landscape',
    prompt: `A breathtaking fantasy landscape. A colossal, ancient tree with glowing runes carved into its bark stands in the center of a serene, magical forest. Ethereal spirits float among the branches. A crystal-clear river flows by. Lord of the Rings meets Studio Ghibli. Vibrant colors, soft lighting, epic scale. --ar 16:9 --style raw`,
  },
  {
    title: 'Abstract Noir',
    prompt: `Abstract art representing a film noir detective story. Silhouettes of a man in a fedora and a mysterious woman against a stark, rain-streaked window. Minimalist design with high contrast black, white, and a single splash of crimson red. Geometric shapes and sharp angles creating a sense of tension and mystery. --ar 16:9 --style raw`,
  },
    {
    title: 'Cosmic Horror',
    prompt: `Cosmic horror poster. A lone astronaut floats in the void, gazing at a colossal, tentacled cosmic entity that fills the stars. The entity is made of nebulae and dying galaxies. A sense of immense scale and dread. Lovecraftian style, deep space, dark color palette with glowing accents. --ar 16:9 --style raw`,
  },
];

export const ExamplePrompts: React.FC<ExamplePromptsProps> = ({ onSelectPrompt }) => {
  return (
    <div className="mb-8 text-center">
      <h3 className="text-sm font-semibold text-gray-500 mb-3 tracking-wider uppercase">Or try an example</h3>
      <div className="flex flex-wrap justify-center gap-2">
        {examples.map((example) => (
          <button
            key={example.title}
            onClick={() => onSelectPrompt(example.prompt)}
            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300 hover:bg-gray-700 hover:text-amber-400 hover:border-amber-500/50 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
            aria-label={`Use example prompt: ${example.title}`}
          >
            {example.title}
          </button>
        ))}
      </div>
    </div>
  );
};