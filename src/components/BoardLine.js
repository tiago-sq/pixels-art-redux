import React from 'react';
import Pixel from './Pixel';

class BoardLine extends React.Component {
  render() {
    const { boardSize, brushColor } = this.props;
    return (
      <div className="line">
        {boardSize.map((color, index) => (
          <Pixel
            key={index}
            color={color}
            brushColor={brushColor}
          />
        ))}
      </div>
    );
  }
}

export default BoardLine;
