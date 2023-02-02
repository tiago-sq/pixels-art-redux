import React from 'react';
import { connect } from 'react-redux';

class Pixel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 'white',
    };
  }

  paintPixel = () => {
    const { brushColor } = this.props;
    this.setState({ color: brushColor });
  };

  render() {
    const { color } = this.state;

    return (
      <div
        className='pixel-container'
        style={{ backgroundColor: color }}
        onClick={this.paintPixel}
      />
    );
  }
}

const mapStateToProps = ({ brush }) => ({
  brushColor: brush.brushColor,
});

export default connect(mapStateToProps)(Pixel);
