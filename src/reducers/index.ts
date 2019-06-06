import { combineReducers } from 'redux';

const baseCurrency = (state="", action:any) : any => {
	switch (action.type) {
		case 'SET_BASE_CURRENCY' :
			return action.baseCurrency;
		default:
			return state;
	}
}

const searchKeyword = (state="", action:any) : any => {
	switch (action.type) {
		case 'SET_SEARCH_KEYWORD' :
			return action.searchKeyword;
		default:
			return state;
	}
}

const forexRates = (state={}, action:any) : any => {
	switch (action.type) {
		case 'SET_FOREX_RATES':
			return action.forexRates;
		default :
			return state;
	}
}

const previousForexRates = (state={}, action:any) : any => {
	switch (action.type) {
		case 'SET_PREVIOUS_FOREX_RATES':
			return action.previousForexRates;
		default :
			return state;
	}
}

const globalFunctions = combineReducers({
	baseCurrency,
	searchKeyword,
	forexRates,
	previousForexRates
});

export default globalFunctions;