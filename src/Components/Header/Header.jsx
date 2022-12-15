import React from 'react'
import HeaderCSS from './Header.module.scss'
const Header = () => {
    return (
        <div>
            <div className='container'>
                <ul className={HeaderCSS.header_list}>
                    <img className={HeaderCSS.header_logo} src="../images/logotype.png" alt="" />
                    <nav className={HeaderCSS.navigation_menu}>
                        <li className={HeaderCSS.item}>About</li>
                        <li className={HeaderCSS.item}>Place for</li>
                        <li className={HeaderCSS.item}>Works</li>
                        <li className={HeaderCSS.item}>Questions</li>
                    </nav>
                </ul>
            </div>
        </div>
    )
}

export default Header