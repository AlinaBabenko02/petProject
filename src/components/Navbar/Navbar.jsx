import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import NavbarInfoContainer from './NavbarInfoContainer';

const Navbar = (props) => {

  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.active}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
      </div>
      <div className={`${s.item} ${s.friends}`}>
        <a>Friends:</a>
        <div>
          <NavbarInfoContainer />
        </div>
      </div>
    </nav>
  )
}
export default Navbar;