import React from 'react';
import * as bem from 'b_';

import './Page.css';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  align: string;
  mix?: string;
};

const b = bem.with('page');

export const Page = (props: Props): JSX.Element => {
  const { align, children, mix } = props;
  const cls = `${b({ align })} ${mix}`;

  return <div className={cls}>{children}</div>;
};

Page.defaultProps = {
  align: 'center',
  mix: '',
};
