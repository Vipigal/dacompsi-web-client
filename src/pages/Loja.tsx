import React, { useState } from 'react';
import StoreProductCard from '../components/StoreProductCard'; 
import "../assets/css/loja.css";

// produtos exemplo
const productsData = [
    {
        name: "MacBook",
        imageUrl: "src/assets/images/loja/macBook.jpg",
        price: 590,
        originalPrice: 990,
        rating: 5,
        reviewCount: 46,
        id: "#5485481",
    },
    {
        name: "Samsung",
        imageUrl: "src/assets/images/loja/samsung.jpg",
        price: 590,
        originalPrice: 990,
        rating: 5,
        reviewCount: 52,
        id: "#4892481",
    },
    {
        name: "Lenovo",
        imageUrl: "src/assets/images/loja/lenovo.png",
        price: 590,
        originalPrice: 990,
        rating: 5,
        reviewCount: 45,
        id: "#54856531",
    },
];

const Loja = () => {

  const [view, setView] = useState('grid'); 
  const [sortOption, setSortOption] = useState('relevance');

  const filteredProducts = productsData; // todo - botar logica filtragem

  return (
    <div className="container px-8 mt-4">
        <div className="flex">
        <aside className="w-1/4 px-4 py-6">
            <h2 className="font-bold mb-3">FILTRAR</h2>
            <div className="mb-4">
            <div className="font-bold">Categories</div>
            <div className="mt-2">
                <a href="#" className="text-red-600 hover:underline">Camisas</a>
            </div>
            <div className="mt-2">
                <a href="#" className="text-red-600 hover:underline">Produtos D.A</a>
            </div>
            <div className="mt-2">
                <a href="#" className="text-red-600 hover:underline">Eventos</a>
            </div>
            </div>
        </aside>
        <div className="flex-1">
            <div className="flex justify-between mb-4">
                <div>{filteredProducts.length} produtos</div>
                <div>
                    <label htmlFor="sort">Sort by: </label>
                    <select
                    id="sort"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    >
                    <option value="relevance">Relevance</option>
                    <option value="priceLowHigh">Price: Low to High</option>
                    <option value="priceHighLow">Price: High to Low</option>
                    </select>
                    <button id='viewOptionButton' onClick={() => setView('grid')}>Grid</button>
                    <button id='viewOptionButton' onClick={() => setView('list')}>List</button>
                </div>
            </div>
            <div className={`products-display ${view}`}>
            {filteredProducts.map((product) => (
                <StoreProductCard key={product.id} {...product} />
            ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Loja;
