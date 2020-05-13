import React from 'react';
import {List} from '../components/CardList';
// import {Data} from './data';
import {SearchBox} from '../components/SearchBox';
import './App.css'
import { Fixed } from '../components/FixedMe';
import {Error} from '../components/ErrorShow';

export class Main extends React.Component {
  constructor () {
    super();
    this.state = {
      "Data": [],
      "searchfield":''
    };
  }

  componentDidMount () {
    fetch("https://jsonplaceholder.typicode.com/users").then(Response => { return Response.json();}).then(users => {this.setState({Data : users });})
  }

  Searchchange = (event) =>{
    this.setState({searchfield : event.target.value});
  }

  render(){
    const {Data,searchfield} = this.state;
    const filterrobot = this.state.Data.filter(Data => {
      return (Data.name.toLowerCase().includes(searchfield.toLowerCase()))
    })
    if (Data.length === 0) {
      return <h1 className='tc'>Loading</h1>
    }
    else {
      return (
        <div className='tc'>
          <h1 className='f1'> SEARCH  PICTURES ></h1>
          <SearchBox secondchange = {this.Searchchange} />
          <Fixed>
            <Error>
              <List Data={filterrobot} />
            </Error>
          </Fixed>
        </div>
      );
    }
  }
    
}