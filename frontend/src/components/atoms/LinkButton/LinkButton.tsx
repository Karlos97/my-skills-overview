import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button = ({ children, className, ...rest }: ButtonProps) => (
  <button
    className={`px-4 py-2 text-white font-semibold bg-blue-500 rounded hover:bg-blue-600 ${className}`}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
