import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import '../styles/app.css';

const Types = {
 ITEM: 'component'
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}



class Canvas extends Component {
  render() {
    const { connectDropTarget } = this.props
    return connectDropTarget(
      <div className='canvas'></div>
    );
  }
}

export default DropTarget(Types.ITEM, {}, collect)(Canvas)
