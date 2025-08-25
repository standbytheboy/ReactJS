import Carousel from '../carousel/Carousel';
import CategoryCard from '../categoryCard/CategoryCard';

const categories = [
    { name: 'Accessories', productCount: 84 },
    { name: 'Food', productCount: 64 },
    { name: 'Furniture', productCount: 22 },
    { name: 'Bags', productCount: 16 },
    { name: 'Clothes', productCount: 50 },
    { name: 'Toys', productCount: 45 },
];

const CategoryCarousel = () => {
    return (
        <Carousel
            title="Pesquise por Categoria"
            items={categories}
            RenderComponent={({ item }) => <CategoryCard category={item} />}
        />
    );
};

export default CategoryCarousel;