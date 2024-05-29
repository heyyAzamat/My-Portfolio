import "./style.css"

import vk from "./../../img/icons/vk.svg"
import instagram from "./../../img/icons/instagram.svg"
import gitHub from "./../../img/icons/gitHub.svg"

const Footer = () => {
    return (
        <footer class="footer">
            <div class="container">
                <div class="footer__wrapper">
                    <ul class="social">
                        <li class="social__item">
                            <a href="https://vk.com/id821142555" target="_blank">
                                <img src={vk} alt="Link"/>
                            </a>
                        </li>
                        <li class="social__item">
                            <a href="https://www.instagram.com/heyy_azamat/" target="_blank">
                                <img src={instagram} alt="Link"/>
                            </a>
                        </li>
                        <li class="social__item">
                            <a href="https://github.com/heyyAzamat" target="_blank">
                                <img src={gitHub} alt="Link"/>
                            </a>
                        </li>
                    </ul>
                    <div class="copyright">
                        <p>© 2024 my portfolio</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;