import React from 'react';
import { PrintOptions, PRINT_SIZES, PRINT_QUALITIES, INFILL_OPTIONS } from '../../types/product';

interface PrintOptionsSelectorProps {
  options: PrintOptions;
  onOptionChange: (key: keyof PrintOptions, value: string | number) => void;
}

const PrintOptionsSelector = ({ options, onOptionChange }: PrintOptionsSelectorProps) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Size</label>
        <div className="grid grid-cols-4 gap-2">
          {PRINT_SIZES.map((size) => (
            <button
              key={size}
              onClick={() => onOptionChange('size', size)}
              className={`px-4 py-2 rounded-md border ${
                options.size === size
                  ? 'border-game-green bg-game-green/20 text-game-green'
                  : 'border-gray-600 hover:border-game-green/50'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Print Quality</label>
        <div className="grid grid-cols-4 gap-2">
          {PRINT_QUALITIES.map((quality) => (
            <button
              key={quality}
              onClick={() => onOptionChange('quality', quality)}
              className={`px-4 py-2 rounded-md border ${
                options.quality === quality
                  ? 'border-game-green bg-game-green/20 text-game-green'
                  : 'border-gray-600 hover:border-game-green/50'
              }`}
            >
              {quality}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Infill Density ({options.infill}%)
        </label>
        <div className="grid grid-cols-4 gap-2">
          {INFILL_OPTIONS.map((infill) => (
            <button
              key={infill}
              onClick={() => onOptionChange('infill', infill)}
              className={`px-4 py-2 rounded-md border ${
                options.infill === infill
                  ? 'border-game-green bg-game-green/20 text-game-green'
                  : 'border-gray-600 hover:border-game-green/50'
              }`}
            >
              {infill}%
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrintOptionsSelector;