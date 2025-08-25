import './CategoryCard.css';
import { ChevronRight } from 'akar-icons';

const CategoryCard = ({ category }) => {
    return (
        <div className="category-card">
            <div className="card-image-wrapper">
                <img className='category-image' src={category.imagem} alt="Imagem ilustrativa sobre a categoria de produtos." />
            </div>
            <div className="card-info">
                <div className="card-text">
                    <h3 className="category-name">{category.nome}</h3>
                    <p className="product-count">{category.qntdProdutos} Produtos </p>
                </div>
                <div className="arrow-icon">
                    <ChevronRight strokeWidth={2} size={20} />
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;