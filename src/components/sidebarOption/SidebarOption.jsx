import React from 'react'
import './styles.scss'

function SidebarOption( {Icon, title} ) {
    return (
        <div className='sidebar-option'>
            {Icon && <img src={Icon} fontSize='small'/>}
            {title && <span>{title}</span>}
        </div>
    )
}

export default SidebarOption;
