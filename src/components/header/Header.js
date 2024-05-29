import "./style.css"

const Header = () => {
    return (
        <header class="header">
            <div class="header__wrapper">
                <h1 class="header__title">
                    <strong>
                        Hi, my name is <em>Azamat</em>
                    </strong>
                    <br/>a programmer
                </h1>
                <div class="header__text">
                  <p>with passion for learning and creating.</p>
                </div>
                <a href="projects" class="btn">
                    View Projects
                </a>
            </div>
        </header>
    );
}
 
export default Header;