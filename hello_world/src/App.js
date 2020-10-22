import React,{Component} from 'react';

import Person from './Person'
import './App.css';

class App extends Component{
  state = {
    count :0,
    people :[
      {name: "mindx" , age:5},
      {name: "huy", age: 19},
      {name: "hai", age: 31}
    ]
  }

  constructor(){
    super();
    // this.increase=this.increase.bind(this)
  }
  increase = () => {
    console.log(this);
    this.setState({...this.state,count: this.state.count + 1})// phai truyen Obj moi, ko dc modify obj cu
  }
  // bat buoc co method render
  render(){
    return (
    <div className="App">
          <h1>Hello world</h1>
          <p>{this.state.count}</p>
          <button onClick={this.increase}>Increase</button>
          <div>
            <Person name={this.state.people[0].name} age={this.state.people[0].age}>
              Happy
            </Person>
            <Person name={this.state.people[1].name} age={this.state.people[1].age}/>
            <Person name={this.state.people[2].name} age={this.state.people[2].age}/>
          </div>
      </div>
    )

  //cach 2
  //   return React.createElement(
  //     'div',
  //   {
  //     className:"App"
  //   },
  //   React.createElement('h1',null,"Hello world"))
  }
}
export default App;
