
import Carousel from '../carousel/Carousel';
import AnimalCard from '../animalCard/AnimalCard';
import CachorroImg from '../../assets/Cachorro.svg'
import CoelhoImg from '../../assets/Coelho.svg'
import GatoImg from '../../assets/Gato.svg'
import HamsterImg from '../../assets/Hamster.svg'
import PapagaioImg from '../../assets/Papagaio.svg'
import TartarugaImg from '../../assets/Tartaruga.svg'

const animals = [
    { name: 'Cat', image: GatoImg },
    { name: 'Hamster', image: HamsterImg },
    { name: 'Dog', image: CachorroImg },
    { name: 'Parrot', image: PapagaioImg },
    { name: 'Rabbit', image: CoelhoImg },
    { name: 'Turtle', image: TartarugaImg },
];

const AnimalCarousel = () => {
    return (
        <Carousel
            title="Compre a partir do seu Pet"
            items={animals}
            RenderComponent={({ item }) => <AnimalCard animal={item} />}
        />
    );
};

export default AnimalCarousel;