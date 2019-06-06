import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './helpers/css-variables.css';

import CurrencyConverter from './containers/currency-converter';

import globalFunctions from './reducers' 

const store = createStore(globalFunctions);

const render = () => {
	ReactDOM.render(
	    <Provider store={store}>
	    	<CurrencyConverter />
	    </Provider>,
	    document.getElementById("root")
	);
}

store.subscribe(render);
render();