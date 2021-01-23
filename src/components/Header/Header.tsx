import React from 'react';
import * as bem from 'b_';
import { NavLink } from 'react-router-dom';

import './Header.css';

const b = bem.with('header');

enum PageName {
  Home = 'Home',
  Catalog = 'Catalog',
  Upcoming = 'Upcoming',
}

const menu = [
  { to: '/', exact: true, pageName: PageName.Home },
  { to: '/catalog', exact: true, pageName: PageName.Catalog },
  { to: '/upcoming', exact: true, pageName: PageName.Upcoming },
];

export const Header = (): JSX.Element => {
  return (
    <header className={b()}>
      <div className={b('logo')}></div>
      <nav className={b('nav')}>
        {menu.map(el => {
          return (
            <NavLink
              key={el.pageName}
              to={el.to}
              exact={el.exact}
              
              activeClassName="header__nav-item_active"
              className={b('nav-item')}
            >
              {el.pageName}
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
};
