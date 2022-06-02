import React, { useState } from 'react';
import Logo from "../../assets/images/logo-orthopets.png";
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import './styles.scss'


function Header() {
    const [menuActive, setMenuActive] = useState(false)
    const menuItems = [{value: "Головна", href: "/"}, {value: "Список ортопедів", href: "/orthopets-list"}]
    return (
        <header className='header'>
            <Link to="/" className='header__left'>
                <img
					className='header__logo'
					src={Logo}
                    alt='Orthopets'
                />
            </Link>
            <div className='header__right'>
                <h3 className='header__title'>
                    Ортопедичне-нейрохірургічне ветеринарне співтовариство України "Ortopets"
				</h3>
            </div>
            <nav className="header__burger">
                <div className="header__burger-btn" onClick={() => setMenuActive(!menuActive)}>
                    <span />
                </div>
            </nav>
            <Menu active={menuActive} setActive={setMenuActive} header={"Бургер меню"} items={menuItems}/>
        </header>
    )
}

export default Header;