import React from 'react';
import * as bem from 'b_';

import './Rect.css';

type Props = {
  type?: string;
  width?: string;
  height?: string;
  className?: string;
};

const b = bem.with('rect');

export const Rect = (props: Props): JSX.Element => {
  const { className, height, type, width } = props;
  const cls = className ? `${b({ type })} ${className}` : `${b({ type })}`;

  return <div style={{ width, height }} className={cls}></div>;
};

Rect.defaultProps = {
  type: 'default',
  width: null,
  height: null,
  className: null,
};
