import React from 'react';

export class Error extends React.Component {
  constructor(){
    super();
    this.state = {
      "hasError": false
    }
  }
  componentDidCatch(error, info) {
    this.setState({hasError: true})
  }
  render(){
    if (this.state.hasError) {
      return <h1>Not fetching the data</h1>
    }
    else {
      return this.props.children
    }
  }
}