import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/style1.css';
import '../styles/style2.css';
import '../styles/fontStyle.css';
import Header from './Header';
import Quick from './Quick';
import Test from './quickSearchComponents/Test';
import DetailedSearch from './DetailedSearch';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Test name='Bau' />
        <div className='Header'>
          <Header />
        </div>
        <div className='HomeMain'>
          <Quick />
        </div>
        <div className="DetailedSearch">
          <DetailedSearch />
        </div>
      </div>
    );
  }
}

export default App;