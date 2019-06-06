import { connect } from 'react-redux';
import CForexRatesPills from '../components/forex-rates-pills/forex-rates-pills';

interface IStateProps {
	baseCurrency : string,
	searchKeyword : string,
	forexRates : any,
	previousForexRates: any
}

const mapStateToProps = (state: any) : IStateProps => ({
	baseCurrency: state.baseCurrency,
	searchKeyword: state.searchKeyword,
	forexRates: state.forexRates,
	previousForexRates: state.previousForexRates
})

export default connect<IStateProps>(mapStateToProps)(CForexRatesPills);