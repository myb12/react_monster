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

  handleChange = (e)=>this.setState({searchFiled:e.target.value});

  render(){
    const { monsters, searchFiled } = this.state;
    const filteredMonsters = monsters.filter(monster=>monster.name.toLowerCase().includes(searchFiled.toLowerCase()));
      return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="Search Monsters" handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters}/>
    </div>
  );
  }
}

export default App;
