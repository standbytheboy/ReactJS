import React from 'react';
import ProductCard from '../productCard/ProductCard';
import './FeaturedProducts.css';

// Dados de exemplo para simular a busca de produtos
const featuredProducts = [
    {
        name: 'Premium Dog Food',
        price: 19.99,
        image: 'https://images.tcdn.com.br/img/img_prod/1326417/racao_jaguar_para_caes_adultos_16_proteinas_5kg_39_1_542df53422abd15c60b4ec3bcee421f0.png'
    },
    {
        name: 'Premium Cat Food',
        price: 19.99,
        image: 'https://images.tcdn.com.br/img/img_prod/1326417/racao_jaguar_para_caes_adultos_16_proteinas_5kg_39_1_542df53422abd15c60b4ec3bcee421f0.png'
    },
    {
        name: 'Premium Dog Food',
        price: 19.99,
        image: 'https://images.tcdn.com.br/img/img_prod/1326417/racao_jaguar_para_caes_adultos_16_proteinas_5kg_39_1_542df53422abd15c60b4ec3bcee421f0.png'
    },
];

const FeaturedProducts = () => {
    return (
        <section className="featured-products-section">
            <h2 className="section-title">Featured products</h2>
            <div className="product-cards-container">
                {featuredProducts.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </section>
    );
};

export default FeaturedProducts;