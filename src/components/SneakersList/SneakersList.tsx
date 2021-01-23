import React from 'react';
import bem from 'b_';

import { Sneakers as SneakersType } from 'types';

import './SneakersList.css';
import { Sneakers } from 'components';

const b = bem.with('sneakers-list');

type Props = {
  items: SneakersType[];
};

export const SneakersList = (props: Props): JSX.Element => {
  const { items } = props;
  return (
    <div className={b()}>
      {items.map(sneaker => (
        <Sneakers key={sneaker.slug} {...sneaker} />
      ))}
    </div>
  );
};
