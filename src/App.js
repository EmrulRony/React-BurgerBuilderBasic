import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

// function App() {
//   return (
//     <div className="App">
//       <Layout>
//         <BurgerBuilder />
//       </Layout>
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div className=".App">
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
