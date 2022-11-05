import { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  
  constructor() {
    super();
    this.state = {
      monsters : [],
      searchFiled: '',
    }
  }
  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(
      () => {return {monsters : users , beta: users};},
      () => {}
    ))
  }

  onSearchChange = (event) => {
    let searchFiled =event.target.value.toLocaleLowerCase();
    this.setState(
      () => {
        if(event)
        return {searchFiled}
        }
    )
  };

  render () {

    const {monsters , searchFiled} = this.state;
    const {onSearchChange} = this;

    let ss = monsters.filter((x) => x.name.toLocaleLowerCase().includes(searchFiled));
    console.log(ss);
    return (
    <div className="App">
      <input 
        className='search-box' 
        type='search' 
        placeholder='search monsters' 
        onChange = {onSearchChange} />
      {ss.map(
        (monster) => {  
          return <h1 key={monster.id}>{monster.name}</h1>;
        }
      )}
    </div>
  );
}}

export default App;
