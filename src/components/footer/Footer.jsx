import './Footer.css';
import { FacebookFill, InstagramFill, XFill, YoutubeFill } from 'akar-icons';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-column">
                    <div className="footer-logo">
                        <span className="logo-icon">🐾</span> Pet Shop
                    </div>
                    <p className="footer-description">
                        Sed viverra eget fames sit varius. Pellentesque mattis libero viverra dictumst ornare sed justo convallis vitae.
                    </p>
                    <div className="social-icons">
                        <a href="#"><FacebookFill size={24} /></a>
                        <a href="#"><InstagramFill size={24} /></a>
                        <a href="#"><XFill size={24} /></a>
                        <a href="#"><YoutubeFill size={24} /></a>
                    </div>
                </div>

                <div className="footer-column">
                    <h4 className="column-title">Company</h4>
                    <ul>
                        <li><a href="#">Sobre Nós</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Gift cards</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4 className="column-title">Links Rápidos</h4>
                    <ul>
                        <li><a href="#">Novos Produtos</a></li>
                        <li><a href="#">Mais Vendidos</a></li>
                        <li><a href="#">Descontos</a></li>
                        <li><a href="#">F.A.Q</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4 className="column-title">Ajuda</h4>
                    <ul>
                        <li><a href="#">Contato</a></li>
                        <li><a href="#">Entrega</a></li>
                        <li><a href="#">Reembolso</a></li>
                        <li><a href="#">Rastreamento</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4 className="column-title">Localização</h4>
                    <p>Rua da Alegria, 123</p>
                    <p>+55 11 91234-5678</p>
                    <p>email@outlook.com</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p className="copyright">
                    © Copyright Pet Shop. 2024. Design by Figma.guru
                </p>
            </div>
        </footer>
    );
};

export default Footer;