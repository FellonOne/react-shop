import React from 'react';
import bem from 'b_';

import 'Sneakers.css';
import { Link } from 'react-router-dom';

type Props = {
  title: string;
  image: string;
  subtitle: string;
  price: string;
  url: string;
};

const b = bem.with('sneakers');

export const Sneakers = (props: Props): JSX.Element => {
  const { image, price, subtitle, title, url } = props;

  return (
    <div className={b()}>
      <Link to={url}>
        <div
          className={b('image')}
          style={{ backgroundImage: `url(${image})` }}
        />
      </Link>
      <div className={b('title')}>
        <Link to={url}>{title}</Link>
      </div>
      <div className={b('category')}>
        {subtitle}
        ,&nbsp;
        <strong>{price}</strong>
      </div>
    </div>
  );
};
