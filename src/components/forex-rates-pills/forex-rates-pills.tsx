import * as React from 'react';
import styled from 'styled-components';
import { media } from '../../helpers/media-query'

const ForexRatesPillsWrapper = styled.div`
	margin: 0 0.5em;
`

const CurrencySymbol = styled.div`
	width:33%;
	font-size: 1em;
	${media.tablet}{
		width:70%;
	}
`

const ExchangeRateAndDifferenceWrapper = styled.div`
	width:60%;
	display:flex;
	justify-content:space-between;
	align-items:center;
	${media.tablet}{
		width:30%;
		justify-content:space-around;
	}
`

const BlueColorH2 = styled.h2`
	color:var(--blue);
`

const ForexRatesPill = styled.div`	
    padding: 1em;
    border-radius: 50px;
    border: 2px solid var(--blue);
    color: var(--blue);
    margin: 0.5em 0;
    display:flex;
    align-items:center;
    justify-content:space-between;
    ${media.tablet}{
    	justify-content:flex-start;
    }
`

const ForexRatesPillHeader = styled(ForexRatesPill)`
	position:sticky;
	top:0;
	background:white;
`

const HiddenMdDown = styled.span`
	display:none;
	${media.tablet}{
		display:inline;
	}
`


interface Iprops {
	error: boolean,
	baseCurrency : string,
	searchKeyword : string,
	forexRates : any,
	previousForexRates: any
};

export default class CForexRatesPills extends React.Component<Iprops> {

	filteredForexRatesList:string[] = [];

	_filterForexList = () => {
		let {
			baseCurrency,
			searchKeyword,
			forexRates
		} = this.props;

		const forexListWithoutBaseCurrency = Object.keys(forexRates).filter( currency => currency!==baseCurrency );
		if(searchKeyword.trim().length <1)
			this.filteredForexRatesList = forexListWithoutBaseCurrency;
		else{
			const forexListAfterSearch = forexListWithoutBaseCurrency.filter( currency => currency.indexOf(searchKeyword.toUpperCase())!==-1 );
			this.filteredForexRatesList = forexListAfterSearch;
		}
	}

	render() {
		let {
			error,
			forexRates,
			previousForexRates
		} = this.props;
		
		this._filterForexList();
		console.log()
		return(
			<ForexRatesPillsWrapper>
				{
					error &&
					<BlueColorH2> Cant connect to internet, please check your internet connection </BlueColorH2>
				}
				<div>
				{
					Object.keys(forexRates).length === 0 && 
					<BlueColorH2>Loading...</BlueColorH2>
				}
				</div>
				<div>
				<ForexRatesPillHeader>
					<CurrencySymbol>
						Currency Symbol 
					</CurrencySymbol>
					
					<ExchangeRateAndDifferenceWrapper>
						<div>
							Lost/ Gained 
							<HiddenMdDown>
								from previous day
							</HiddenMdDown>
						</div>
						
						<div>
							Exchange Rate
						</div>
					</ExchangeRateAndDifferenceWrapper>
				</ForexRatesPillHeader>
				{
					this.filteredForexRatesList.map( (currency, index) => (	
						<ForexRatesPill key={index}>
							
							<CurrencySymbol>
								{currency} 
							</CurrencySymbol>
							
							<ExchangeRateAndDifferenceWrapper>
								<div>
									{
										Math.round(((+(forexRates[currency]) - +(previousForexRates[currency]))/+(previousForexRates[currency])) * 100000) / 1000
									}%
								</div>
								
								<div>
									{Math.round((forexRates[currency]) * 10000 ) / 10000 }
								</div>
							</ExchangeRateAndDifferenceWrapper>

						</ForexRatesPill>
					))
				}
				</div>
			</ForexRatesPillsWrapper>
		)
	}
} 