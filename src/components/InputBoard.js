import React from 'react';

class InputBoard extends React.Component {
  state = {
    sizeInput: 5
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ sizeInput: value });
  };

  render() {
    const { sizeInput } = this.state;
    const { changeBoardSize } = this.props;
    return (
      <>
        <h1>Escolha o Tamanho do Quadro</h1>
        <input
          type="number"
          name="sizeInput"
          onChange={this.handleChange}
          value={sizeInput}
        />
        <button type="button" onClick={() => changeBoardSize(sizeInput)}>
          Criar Quadro
        </button>
      </>
    );
  }
}

export default InputBoard;
