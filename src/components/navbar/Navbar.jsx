import './Navbar.css';
import Logo from '../../assets/Logo.svg'
import {Sun, Heart, Cart} from 'akar-icons';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <a href="#" className="logo">
                    <img src={Logo} alt="Logo do PetShop" />
                </a>

                <ul className="nav-links">
                    <li><a href="#" className="active">Início</a></li>
                    <li><a href="#">Comprar</a></li>
                    <li><a href="#">Sobre Nós</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>

                <div className="nav-actions">
                    <div className="search-bar">
                        <input type="text" placeholder="Pesquise aqui..." />
                    </div>
                    {/* Ícone de Sol (modo claro) */}
                    <button className="icon-btn">
                        <Sun strokeWidth={2} size={25} />
                    </button>
                    {/* Ícone de Coração */}
                    <button className="icon-btn">
                        <Heart strokeWidth={2} size={25} />
                        <span className="badge">0</span>
                    </button>
                    {/* Ícone de Carrinho de Compras */}
                    <button className="icon-btn">
                        <Cart strokeWidth={2} size={25} />
                        <span className="badge">0</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;