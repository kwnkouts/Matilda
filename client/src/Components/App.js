import React, { Component } from 'react';
import Canvas from './Canvas';
import Everycomponent from './Everycomponent';
//import Search from './Search';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import '../styles/app.css'

class App extends Component {
  render() {
    return (
      <div>
        <div className='library'>
          <input type="text" name="search" placeholder="Search.."/>
          <Everycomponent />
        </div>
        <Canvas />
      </div>
     );
  }
}

export default DragDropContext(HTML5Backend)(App)
