import React, { Component } from 'react'
import { withApollo } from 'react-apollo'
import gql from 'graphql-tag'

var divStyle = {
  textAlign: 'center',
  border: '2px solid black',
  margin: '10px',
  width: '200px'
}

const searchQuery = gql`
  query component_search($value: String!){
    component(_id: $value) {
      _id
      distribution
      volume
      capacity
      }
    }
  `;

class Search extends Component {

  state = {
    matildors: [],
    filter: ''
  }

  render() {
    return(
      <div>

      </div>
    );
  }

  executeSearch = async () => {


    }

}

export default withApollo(Search);
