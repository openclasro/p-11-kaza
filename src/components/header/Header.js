import logo from "../../assets/kazalogo.jpg"
import { NavLink } from 'react-router-dom'
import './header.css';
function Header() {
  return (
    <header className="header">
        <div className="header__logo">
            <img src={logo} className="logo" alt="Kasa" />
        </div>
        <nav className="header__nav">
            <ul>
                <li>
                    
                  <NavLink  to="/">Accueil</NavLink>
                </li>
                <li>
                  <NavLink  to="/a-propos">A propos</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header