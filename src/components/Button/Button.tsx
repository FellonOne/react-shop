import React from 'react';
import bem from 'b_';

import './Button.css';

export enum ButtonSize {
  L = 'l',
  M = 'm',
  S = 's',
}

type Props = {
  type: 'submit' | 'button' | 'reset';
  children: React.ReactNode | React.ReactNode[];
  size: ButtonSize;
};

const b = bem.with('button');

export const Button = (props: Props): JSX.Element => {
  const { children, size, type } = props;
  const cls = `${b({ size })}`;

  return (
    <button type={type} className={cls}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  children: null,
  type: 'button',
  size: ButtonSize.M,
};
