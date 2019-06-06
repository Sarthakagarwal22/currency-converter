type IsetBaseCurrency = {
	type: string,
	baseCurrency: string
};

type IsetsearchKeyword = {
	type: string,
	searchKeyword: string
};

type IsetForexRates = {
	type: string,
	forexRates: any
};

type IsetPreviousForexRates = {
	type: string,
	previousForexRates: any
};

export const setBaseCurrency = (baseCurrency:string) : IsetBaseCurrency => ({
	type:'SET_BASE_CURRENCY',
	baseCurrency
})

export const setSearchKeyword = (searchKeyword: string) : IsetsearchKeyword => ({
	type:'SET_SEARCH_KEYWORD',
	searchKeyword
}) 

export const setForexRates = (forexRates: any) : IsetForexRates => ({
	type:'SET_FOREX_RATES',
	forexRates
})

export const setPreviousForexRates = (previousForexRates: any) : IsetPreviousForexRates => ({
	type:'SET_PREVIOUS_FOREX_RATES',
	previousForexRates
})