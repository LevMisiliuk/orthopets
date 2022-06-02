import React from 'react'
import SidebarOption from '../SidebarOption/SidebarOption';
import './styles.scss'
import { Link } from 'react-router-dom';
import homeIcon from '../../assets/images/home-icon.svg';
import teamIcon from '../../assets/images/team-icon.svg';

function Sidebar() {
    return (
        <aside className='sidebar'>
            <Link className="sidebar__link" to="/">
                <SidebarOption Icon={homeIcon} title="Мапа" />
            </Link>
            <Link className="sidebar__link" to="/orthopets-list">
                <SidebarOption Icon={teamIcon} title="Список ортопедів" />
            </Link>
        </aside>
    )
}

export default Sidebar;