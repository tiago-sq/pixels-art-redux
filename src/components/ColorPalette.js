import React from 'react';
import { connect } from 'react-redux';
import { changeBrushColor } from '../redux/actions';

class ColorPalette extends React.Component {
  state = {
    colors: ['black', 'blue', 'green', 'red']
  };

  generateColor = () => {
    const allHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    let newColor = '#';

    for (let i = 0; i < 6; i += 1) {
      const randomIndex = Math.floor(Math.random() * allHex.length);
      newColor += allHex[randomIndex];
    }
    return newColor;
  };

  randomColors = () => {
    // RGB vai de 0 a 255
    // hexadecimal #RRGGBB vai de 0 até F
    // #000 é preto e #fff
    // #f00 é vermelho === rgb(255, 0, 0)
    // #0f0 é verde ===  rgb(0, 255, 0)
    // #00f é azul ===  rgb(0, 0, 255)

    const { colors } = this.state;

    const newColors = colors.map((color) => {
      if (color !== 'black') {
        return this.generateColor();
      }
      return color;
    });
    this.setState({ colors: newColors });
  };

  handleBrushColor = (newColor) => {
    const { dispatch } = this.props;
    dispatch(changeBrushColor(newColor));
  };

  render() {
    const { colors } = this.state;
    const { brushColor } = this.props;
    return (
      <>
        <div>
          {colors.map((color, index) => (
            <div
              key={index}
              className="pixel-container"
              style={{ backgroundColor: color }}
              onClick={() => this.handleBrushColor(color)}
            />
          ))}
        </div>
        <button type="button" onClick={this.randomColors}>
          Gerar Cores
        </button>
        <h3 style={{ color: brushColor }}>
          {`Cor selecionada é: ${brushColor}`}
        </h3>
      </>
    );
  }
}

const mapStateToProps = ({ brush }) => ({
  brushColor: brush.brushColor,
});

export default connect(mapStateToProps)(ColorPalette);
