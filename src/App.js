import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }


// Create basic components that will be needed will rename late
const Card = (props) => { // where our data will be displayed
  return (
    <div>
      <img alt="pokemon name" src="http://placehold.it/75" />>
      <div>Pokemon ID...</div>
      <div>Pokemon name...</div>
    </div>
  )
}

const CardList = (props) => { //this will hold our data list
  return (
    <div>
      <Card />
    </div>
  )
}

class Form extends React.Component { // will hold our form
  render () {
    return (
      <form>
        <input type="text" />
        <button>Who's that pokemon?</button>
      </form>
    )
  }
}

class App extends React.Component { // our main app component
  render() {
    return (
      <div>
        <Form />
      </div>
    )
  }
}

export default App;
