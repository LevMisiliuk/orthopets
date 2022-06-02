import React from 'react'
import { Link } from 'react-router-dom'
import CloseIcon from '../../assets/images/close-icon.svg'
import './styles.scss'

function Menu({ header, items, active, setActive }) {
  return (
    <div className={active ? 'menu active' : 'menu'}>
        <div className="menu__content">
            <div className="menu__header" onClick={() => setActive(false)}>
                <img src={CloseIcon} alt="close" />
            </div>
            <ul>
                {items.map((item) =>
                    <li>
                        <Link to={item.href} onClick={() => setActive(false)}>
                            {item.value}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    </div>
  )
}

export default Menu