import React from 'react';

interface StoreProductCardProps {
  name: string;
  imageUrl: string;
  price: number;
  originalPrice?: number; 
  rating: number; 
  reviewCount: number;
  id: string;
}

const StoreProductCard: React.FC<StoreProductCardProps> = ({
  name,
  imageUrl,
  price,
  originalPrice,
  rating,
  reviewCount,
}) => {
  const discountPercentage = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={imageUrl} alt={name} className="w-32 h-32 mx-auto object-cover"/>
      <div className="p-4">
        <h5 className="text-lg font-bold">{name}</h5>
        <div className="flex items-center my-2">
          <span className="text-sm text-gray-500">{discountPercentage}%</span>
          <span className="text-sm line-through text-gray-500 ml-2">R${originalPrice?.toFixed(2)}</span>
          <span className="text-lg font-bold ml-2">R${price.toFixed(2)}</span>
        </div>
        <div className="flex items-center">
          <span className="text-sm text-yellow-400">{'★'.repeat(rating)}</span>
          <span className="text-sm text-gray-500 ml-2">({reviewCount})</span>
        </div>
      </div>
    </div>
  );
};

export default StoreProductCard;
