import React from 'react';
import * as bem from 'b_';

import './Footer.css';

const b = bem.with('footer');

export const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={b()}>
      {currentYear},&nbsp;React Server Side rendering example&nbsp;
      <a href="https://github.com/noveogroup-amorgunov/react-ssr-tutorial">
        (Source code)
      </a>
    </footer>
  );
};
