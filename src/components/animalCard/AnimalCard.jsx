import './AnimalCard.css';

const AnimalCard = ({ animal }) => {
    return (
        <div className="animal-card">
            <div className="animal-image-wrapper">
                {/* A imagem ou SVG do animal será aplicada via CSS ou passada via prop */}
                <img src={animal.image} alt={animal.name} className="animal-image" />
            </div>
            <p className="animal-name">{animal.name}</p>
        </div>
    );
};

export default AnimalCard;