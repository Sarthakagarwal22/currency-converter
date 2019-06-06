import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setBaseCurrency, setSearchKeyword, setForexRates, setPreviousForexRates } from '../actions'
import CurrencyConverter from '../components/currency-converter';

interface IDispatchProps{
	_setBaseCurrency: (baseCurrency: string) => void,
	_setSearchKeyword: (searchKeyword: string) => void,
	_setForexRates: (forexRates: any) => void,
	_setPreviousForexRates: (previousForexRates: any) => void,
}

const mapDispatchToProps = (dispatch:Dispatch) : IDispatchProps => ({
	_setBaseCurrency : (baseCurrency: string) => {
		dispatch(setBaseCurrency(baseCurrency))
	},
	_setSearchKeyword : (searchKeyword: string) => {
		dispatch(setSearchKeyword(searchKeyword))
	},
	_setForexRates : (forexRates : any) => {
		dispatch(setForexRates(forexRates))
	},
	_setPreviousForexRates : (previousForexRates: any) => {
		dispatch(setPreviousForexRates(previousForexRates));
	}
});

export default connect<{}, IDispatchProps>(null, mapDispatchToProps)(CurrencyConverter);