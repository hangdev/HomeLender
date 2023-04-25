import React from 'react';

interface CardProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({className, style, children}) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default Card;