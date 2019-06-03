import * as React from 'react';
import Header from './header/header';
import CDropDown from './dropdown/dropdown';

export default class CurrencyConverter extends React.Component {
	
	render(): any{
		return(
			<div>
				<Header/>
				<br />
				<CDropDown />
			</div>
		)
	}	
}