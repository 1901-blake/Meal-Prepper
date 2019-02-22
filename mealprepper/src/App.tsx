import React, { Component } from 'react';
import './App.scss';
import './include/Bootstrap';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './Store';
import  NavComponent  from './Components/Nav/Nav.component';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <NavComponent />
            
            </div>
          </BrowserRouter>
      </Provider>             
    );
  }
}

export default App;
