import React from 'react';
import * as bem from 'b_';

import { Rect } from 'components';

import './Sneakers.css';

const b = bem.with('sneakers-stub');

export const SneakersStub = (): JSX.Element => {
  return (
    <div className={b()}>
      <Rect width="220px" height="210px" />
      <Rect type="black" width="220px" height="20px" />
      <Rect width="220px" height="12px" />
    </div>
  );
};
