import  React, {Component } from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';

class App extends Component{

  constructor(){
    super(); 

    this.state={
      monsters:[],
      searchFiled:''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(data=>this.setState({monsters:data}))
  }

  render(){
    const { monsters, searchFiled } = this.state;
    const filteredMonsters = monsters.filter(monster=>monster.name.toLowerCase().includes(searchFiled.toLowerCase()));
      return (
    <div className="App">
      <input type="search" placeholder="Search Monsters" onChange={
        (e)=> this.setState({searchFiled:e.target.value})
        }/>
        <CardList monsters={filteredMonsters}/>
    </div>
  );
  }
}

export default App;
