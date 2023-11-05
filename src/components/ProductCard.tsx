import React from "react";

interface ProductCardProps {
  name: string;
  imageUrl: string;
  orderId: string;
  date: string;
  status: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  imageUrl,
  orderId,
  date,
  status,
}) => {
  return (
    <div className="flex items-start justify-between bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex items-start">
        <img
          src={imageUrl}
          alt={name}
          className="w-20 h-20 object-cover rounded-md mr-4"
        />
        <div>
          <div className="font-bold">{name}</div>
          <div>{orderId}</div>
        </div>
      </div>
      <div className="self-center">{date}</div>
      <div className="self-center font-semibold">{status}</div>
      <button className="bg-red-dacompsi hover:bg-red-800 text-white py-2 px-4 rounded-full  self-center">
        Mais detalhes
      </button>
    </div>
  );
};

export default ProductCard;
