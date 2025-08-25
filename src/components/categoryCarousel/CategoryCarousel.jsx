import { useRef } from 'react';
import CategoryCard from '../categoryCard/CategoryCard';
import './CategoryCarousel.css';
import { ArrowLeft, ArrowRight } from 'akar-icons';

// Dados de exemplo para o carrossel
const categories = [
    { nome: 'Acessórios', qntdProdutos: 84, imagem: 'https://images.unsplash.com/photo-1596822316110-288c7b8f24f8' },
    { nome: 'Ração', qntdProdutos: 64, imagem: 'https://images.unsplash.com/photo-1598285375273-cb65e990aacd'},
    { nome: 'Roupas', qntdProdutos: 22, imagem: 'https://images.unsplash.com/photo-1575425187336-d5ec5d0a1451' },
    { nome: 'Mochilas', qntdProdutos: 16, imagem: 'https://images.unsplash.com/photo-1661322506572-83e26fdfbcef' },
    { nome: 'Brinquedos', qntdProdutos: 50, imagem: 'https://images.unsplash.com/photo-1729382352587-002b37d8894e' },
    { nome: 'Puffs', qntdProdutos: 45, imagem: 'https://images.unsplash.com/photo-1708303364738-48188a0e050f' },
];

const CategoryCarousel = () => {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="category-carousel-section">
            <div className="carousel-header">
                <h2>Pesquise por Categoria</h2>
                <div className="carousel-nav">
                    <button onClick={scrollLeft} className="nav-btn">
                        <ArrowLeft />
                    </button>
                    <button onClick={scrollRight} className="nav-btn">
                        <ArrowRight />
                    </button>
                </div>
            </div>
            <div className="category-cards-container" ref={carouselRef}>
                {categories.map((category, index) => (
                    <CategoryCard key={index} category={category} />
                ))}
            </div>
        </section>
    );
};

export default CategoryCarousel;