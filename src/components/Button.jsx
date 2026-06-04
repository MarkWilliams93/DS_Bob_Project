import React from 'react';
import './Button.css';

export default function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  children,
  ...props
}) {
  const cls = [
    'ds-button',
    `ds-button--${variant}`,
    `ds-button--${size}`,
    disabled ? 'ds-button--disabled' : ''
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={cls} disabled={disabled} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
