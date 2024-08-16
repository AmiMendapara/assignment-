import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Dashboard from './Dashboard';
import './App.css';
import './Dashboard.css';


const App = () => (
  <Provider store={store}>
    <div className="App">
      <Dashboard />
    </div>
  </Provider>
);

export default App;
