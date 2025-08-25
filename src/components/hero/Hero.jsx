import './Hero.css';
import HeroImg from '../../assets/heroImg.svg'
import CTAButton from '../btn/Button';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="subtitle">Pet Shop</span>
        <h1>Bem-vindo ao PetShop do "Fulano"!</h1>
        <p>Aqui você encontra tudo para seu animal de estimação ficar no estilo sempre!</p>
        <CTAButton text = "Comprar Agora"></CTAButton>
      </div>
      <div className="hero-image-container">
        <img src={HeroImg} alt="Ilustração de Pets (Cachorro, Gato e Hamster) " />
      </div>
    </section>
  );
};

export default Hero;