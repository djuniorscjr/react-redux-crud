import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './config/store';
import Tab from './config/tab.js';

class mobile extends Component {
  render() {
    return (
			<Provider store={store}>
				<Tab />
			</Provider>
    );
  }
}

export default mobile;
