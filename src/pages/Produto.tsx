import React from 'react';
import Container from "../components/Container";
// import Sidebar from "../components/Sidebar"; // This is a hypothetical component for the sidebar
import ProductImage from "../assets/images/product_image.jpg"; // Replace with path to your product image

const BuyProduct = () => {

  // Placeholder for the product details, you should replace this with actual product data
  const product = {
    name: "COMPUTARIA",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    price: 50.00,
    available: 99,
  };

  return (
    <Container>
      <div className="flex">
        
        <div className="flex-1 p-10">
          <div className="font-bold text-2xl mb-6">PRODUTO</div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <img src={ProductImage} alt={product.name} className="mb-4" width={350} height={350} />
              <p className="mb-2">{product.description}</p>
              <p className="font-semibold">Disponível: {product.available}</p>
            </div>

            <div>
              <div className="flex flex-col gap-4">
                <input className="border p-2" placeholder="Email" type="email" />
                <input className="border p-2" placeholder="Nome" />
                <div className="grid grid-cols-2 gap-2">
                  <input className="border p-2" placeholder="Nome" />
                  <input className="border p-2" placeholder="Número de contato" />
                </div>
                <input className="border p-2" placeholder="Quantidade" type="number" min="1" max={product.available} />
              </div>

              <div className="mt-6 p-2 bg-gray-100">
                <p>Subtotal: R${product.price.toFixed(2)}</p>
                <p>Taxa: R$0.00</p>
                <p>Total: R${product.price.toFixed(2)}</p>
              </div>

              <button className="w-full bg-red-dacompsi text-white py-2 mt-4">Concluir</button>
            </div>
          </div>
        </div>
      </div>
      

    </Container>
  );
};

export default BuyProduct;
