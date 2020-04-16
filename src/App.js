import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurderBuilder/BurgerBuilder'
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Layout></Layout>
        <BurgerBuilder></BurgerBuilder>
      </div>

    );
  }
}


export default App;