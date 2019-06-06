import * as React from 'react';
import styled from 'styled-components';

import { media } from '../helpers/media-query';
import { getRequest } from '../helpers/api-response';
import { latestRatesUrl,previousDayRatesUrl } from '../local-data/config'

import CHeader from './header/header';
import CDropDown from './dropdown/dropdown';
import CSearchBar from './searchbar/searchbar';
import CForexRatesPills from '../containers/forex-rates-pills';


const DropDownSearchBarWrapper = styled.div`
	display:block;
	${media.tablet}{
		display:flex;
		justify-content:space-between;
		align-items:flex-start;
	}
`

interface Istate {
	dropDownOptions: string[],
	errorGettingForexRates: boolean
}

interface Iprops {
	_setBaseCurrency: (baseCurrency:string) => void,
	_setSearchKeyword: (searchKeyword: string) => void,
	_setForexRates: (forexRates: any) => void,
	_setPreviousForexRates: (previousForexRates: any) => void,
}

export default class CurrencyConverter extends React.Component<Iprops,Istate> {
	
	state = {
		dropDownOptions: ["JPY","USD","INR","CNY","GBP","EUR"],
		errorGettingForexRates: false
	}

	_getForexRates = async (baseCurrency: string) : Promise<void> => {
		this.props._setForexRates({});
		this.setState({errorGettingForexRates:false});
		let forexRates = await getRequest(latestRatesUrl+baseCurrency);
		if(typeof forexRates === "string")
			this.setState({errorGettingForexRates:true})
		else
			this.props._setForexRates(forexRates.rates)
	}

	_getPreviousDayForexRates = async (baseCurrency: string) : Promise<void> => {
		this.props._setPreviousForexRates({});
		this.setState({errorGettingForexRates:false});
		
		let today = new Date();
		let previousToPreviousDay = new Date(today);
		previousToPreviousDay.setDate(today.getDate() - 2);
		
		let urlForPreviousDayForexRates = `${previousDayRatesUrl}${previousToPreviousDay.getFullYear()}-${+previousToPreviousDay.getMonth()+1}-${previousToPreviousDay.getDate()}?base=${baseCurrency}` ;

		let previousForexRates = await getRequest(urlForPreviousDayForexRates);
				
		if(typeof previousForexRates === "string")
			this.setState({errorGettingForexRates:true})
		else
			this.props._setPreviousForexRates(previousForexRates.rates)
	}

	_handleCurrencySearch = (searchString: string) => {
		this.props._setSearchKeyword(searchString)
	}

	_selectedBaseCurrency = (index:number) => {
		let baseCurrency = this.state.dropDownOptions[index]; 
		this.props._setBaseCurrency(baseCurrency)
		this._getForexRates(baseCurrency);
		this._getPreviousDayForexRates(baseCurrency); 
	}

	componentDidMount() {
		this.props._setBaseCurrency("JPY");
		this._getForexRates("JPY");
		this._getPreviousDayForexRates("JPY");
	}

	render(): any{
		return(
			<div>
				<CHeader/>
				<br />
				<DropDownSearchBarWrapper>
					<CDropDown 
						dropDownOptions = {this.state.dropDownOptions} 
						_selectedOption = {this._selectedBaseCurrency} 
					/>
					<br />
					<CSearchBar 
						_handleInput = {this._handleCurrencySearch}
					/>
				</DropDownSearchBarWrapper>
				<br />
				<CForexRatesPills error = {this.state.errorGettingForexRates} />
			</div>
		)
	}	
}