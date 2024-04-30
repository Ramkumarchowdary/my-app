
import React from 'react';
import './Grid.css';

interface GridProps {
  children: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({ children }) => {
  return (
    <div className="main">
      {React.Children.map(children, (child) => (
        <div className="main-item">
          {child}
        </div>
      ))}
    </div>
  );
}

export default Grid;
