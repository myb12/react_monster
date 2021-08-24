import  React, {Component } from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

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
        <SearchBox placeholder="Search Monsters" handleChange={ (e)=> this.setState({searchFiled:e.target.value})} />
        <CardList monsters={filteredMonsters}/>
    </div>
  );
  }
}

export default App;
