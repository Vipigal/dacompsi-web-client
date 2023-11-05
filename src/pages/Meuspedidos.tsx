import React from 'react';
import Container from "../components/Container";
import ProductCard from "../components/ProductCard"; 

const Meuspedidos = () => {

    // vetor de produtos comprados soh como exemplo visual msm
    const purchasedProducts = [
    {
        id: 1,
        name: "Ingresso COMPUTARIA",
        orderId: "#34095244",
        date: "17/09/2023",
        status: "Concluído",
        imageUrl: "src/assets/images/product_image.jpg",
    },
    {
        id: 2,
        name: "Ingresso QUE CHERIN DE ICEX",
        orderId: "#34095244",
        date: "17/09/2023",
        status: "Concluído",
        imageUrl: "src/assets/images/product_image.jpg", 
    },
    {
        id: 3,
        name: "Ingresso PARALELEPIPEDO",
        orderId: "#34095244",
        date: "17/09/2023",
        status: "Concluído",
        imageUrl: "src/assets/images/product_image.jpg", 
    },
    ];

    return (
        <Container>
        <div className="p-10">
            <h1 className="text-2xl font-bold mb-6 text-black">Meus Pedidos</h1>
            {purchasedProducts.map(product => (
            <ProductCard
                key={product.id}
                name={product.name}
                imageUrl={product.imageUrl}
                orderId={product.orderId}
                date={product.date}
                status={product.status}
            />
            ))}
        </div>
        </Container>
    );

};


export default Meuspedidos;

