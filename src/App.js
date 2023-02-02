import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Board from './components/Board';
import ColorPalette from './components/ColorPalette';
import InputBoard from './components/InputBoard';

class App extends React.Component {
  state = {
    boardSize: new Array(5).fill('white'),
    toggleClear: true
  };

  componentDidMount() {
    const { brushColor } = this.props;
    this.setState({
      brushColor
    });
  }

  changeBoardSize = (size) => {
    this.setState({ boardSize: new Array(+size).fill('white') });
  };

  clearBoard = () => {
    this.setState({ toggleClear: false }, () =>
      this.setState({ toggleClear: true })
    );
  };

  render() {
    const { boardSize, toggleClear } = this.state;

    return (
      <div className='App'>
        <h1>Paleta de Cores</h1>
        <ColorPalette />
        <InputBoard changeBoardSize={this.changeBoardSize} />
        {toggleClear && (
          <Board
            boardSize={boardSize}
            clearBoard={this.clearBoard}
          />
        )}
      </div>
    );
  }
}

export default connect()(App);
