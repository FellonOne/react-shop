import React from 'react';
import * as bem from 'b_';

import { SneakersStub } from 'components';

import './SneakersList.css';

type Props = {
  count: number;
};

const b = bem.with('sneakers-list');

export const SneakersListStub = (props: Props): JSX.Element => {
  return (
    <div className={b()}>
      {Array(props.count)
        .fill(0)
        .map((_, idx: number) => (
          <SneakersStub key={idx} />
        ))}
    </div>
  );
};
