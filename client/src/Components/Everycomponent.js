import React, { Component } from 'react';
//Parse the query
import gql from 'graphql-tag';
//Bind query with the component
import { graphql, compose } from 'react-apollo';
import { DragSource } from 'react-dnd';
import '../styles/app.css';

  var outerDivStyle = {
    display: 'table',
    margin: '0 auto',
    fontSize: 20,
    cursor: 'move'
  }

  var divStyle = {
    textAlign: 'center',
    wordWrap: 'break-word',
    borderRadius: '25px',
    background: '#73AD21',
    margin: '10px',
    padding: '20px',
    width: '150px',
    height: '40px'
  }

const componentQuery = gql`
{
  components {
    _id
    distribution
    volume
    capacity
  }
}
`;

// react-dnd
const Types = {
 ITEM: 'component'
}

const componentSource = {
 beginDrag(props) {
   //return {componentId: props.id};
 },
 endDrag(props) {
 /* code here */
 }
}

function collect(connect, monitor) {
 return {
   connectDragSource: connect.dragSource(),
   isDragging: monitor.isDragging()
 }
}
//-----------------------------------------

class Everycomponent extends Component {


      render() {

        const { isDragging, connectDragSource, src } = this.props
        const {data: {components}} = this.props;

        if (this.props.data && this.props.data.loading) {
          return <div>Loading...</div>
        }

        if (this.props.data && this.props.data.error) {
          return <div>Error</div>
        }


        return connectDragSource(
          <div style={outerDivStyle}>
            {components.map(components => <div style={divStyle} key={`${components._id}-component-item`}>{components._id}</div>)}
          </div>

        )

      }


}


export default compose(DragSource(Types.ITEM, componentSource, collect),graphql(componentQuery))(Everycomponent)
