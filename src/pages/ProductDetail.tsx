import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import ColorSelector from '../components/product/ColorSelector';
import PrintOptionsSelector from '../components/product/PrintOptionsSelector';
import { FEATURED_PRINTS } from '../constants/prints';
import { PrintOptions } from '../types/product';

const ProductDetail = () => {
  const { id } = useParams();
  const product = FEATURED_PRINTS.find(p => p.id === Number(id));

  const [options, setOptions] = useState<PrintOptions>({
    color: '#39FF14',
    size: 'Medium',
    infill: 50,
    quality: 'Normal'
  });

  const handleOptionChange = (key: keyof PrintOptions, value: string | number) => {
    setOptions(prev => ({ ...prev, [key]: value }));
  };

  if (!product) {
    return (
      <div className="pt-24 min-h-screen gaming-gradient px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl text-white mb-4">Product not found</h1>
          <Link to="/catalog" className="text-game-green hover:text-game-green/80">
            Return to Catalog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen gaming-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/catalog"
          className="inline-flex items-center text-game-green hover:text-game-green/80 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Catalog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg overflow-hidden border border-game-green/20">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[400px] object-cover"
              />
            </div>

            <div className="bg-gray-800/50 rounded-lg p-6 border border-game-green/20">
              <h2 className="text-xl font-semibold text-white mb-4">Product Details</h2>
              <div className="grid grid-cols-2 gap-4 text-gray-300">
                <div>
                  <p className="text-sm text-gray-400">Dimensions</p>
                  <p>200mm x 150mm x 100mm</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Weight</p>
                  <p>250g</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Material</p>
                  <p>PLA+ Premium</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Print Time</p>
                  <p>~8 hours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">{product.title}</h1>
              <p className="text-gray-300 mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-game-green">{product.price}</span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-gray-300">
                  {product.category}
                </span>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-6 border border-game-green/20 space-y-6">
              <ColorSelector
                selectedColor={options.color}
                onColorChange={(color) => handleOptionChange('color', color)}
              />
              
              <PrintOptionsSelector
                options={options}
                onOptionChange={handleOptionChange}
              />

              <button className="w-full py-4 bg-game-green text-game-dark font-bold rounded-md hover:bg-game-green/90 button-glow flex items-center justify-center space-x-2">
                <ShoppingCart className="h-5 w-5" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;