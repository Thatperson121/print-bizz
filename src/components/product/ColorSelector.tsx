import React from 'react';
import { PRINT_COLORS } from '../../types/product';

interface ColorSelectorProps {
  selectedColor: string;
  onColorChange: (color: string) => void;
}

const ColorSelector = ({ selectedColor, onColorChange }: ColorSelectorProps) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-300">Color</label>
      <div className="flex flex-wrap gap-2">
        {PRINT_COLORS.map(({ name, value }) => (
          <button
            key={value}
            onClick={() => onColorChange(value)}
            className={`w-8 h-8 rounded-full border-2 transition-transform ${
              selectedColor === value
                ? 'border-game-green scale-110 shadow-[0_0_10px_rgba(74,222,128,0.5)]'
                : 'border-gray-600 hover:scale-105'
            }`}
            style={{ backgroundColor: value }}
            title={name}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;