import React, { ReactNode } from 'react';
import * as bem from 'b_';

import './PageContainer.css';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  btn?: {
    to: string;
    text: string;
  };
  mix?: string;
};

const b = bem.with('page');

export const PageContainer = (props: Props): JSX.Element => {
  const { children, btn, mix } = props;
  const cls = `${b('container')} ${mix}`;

  return (
    <div className={cls}>
      {children}
      {btn && <div> go go go</div>}
    </div>
  );
};

PageContainer.defaultProps = {
  mix: '',
};
