import React from 'react';
import BoardLine from './BoardLine';

class Board extends React.Component {

  render() {
    const { boardSize, brushColor, clearBoard } = this.props;
    return (
      <div className="board">
        {boardSize.map((_, index) => (
          <BoardLine
            key={index}
            boardSize={boardSize}
            brushColor={brushColor}
          />
        ))}
        <button type="button" onClick={ clearBoard }>
          Limpar
        </button>
      </div>
    );
  }
}

export default Board;
