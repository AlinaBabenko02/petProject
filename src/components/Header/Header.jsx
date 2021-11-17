import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://w7.pngwing.com/pngs/622/862/png-transparent-wall-decal-earth-planet-elysium-space-sticker-planet-surface-spacecraft-logo-sticker.png' />
        <div className={s.loginBlock}>
            {props.isAuth ? props.login : <NavLink to= {'/login'}>Login</NavLink>}
            
        </div>
    </header>
}
export default Header ;