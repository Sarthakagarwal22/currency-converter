import * as React from 'react';
import styled from 'styled-components';
import { media } from '../../helpers/media-query'

const SearchBarInput = styled.input`	
    margin: 0 0.5em;
    padding: 1em;
    width: 86vw;
    border: 1px solid var(--blue);
    background: white;
    color: var(--blue);
    cursor: pointer;
    ${media.tablet}{
    	width:20vw;
    }
`

const SearchBarImageSpan = styled.span`
	background: var(--blue);
    padding: 17px;
    position: relative;
    left:-14px;
    border-radius:0 4px 4px 0;
    cursor:pointer;
`

const SearchBarWrapper = styled.div`
	display:flex;
`

interface Iprops {
	_handleInput: any,
	placeholder?:string,
}

export default class CSearchBar extends React.Component<Iprops>{

	_handleInputChange = (searchString:string) => {
		this.props._handleInput(searchString);
	}

	render(){
		let input:any;
		return(
			<SearchBarWrapper>
				<SearchBarInput
				ref = {node => input = node }
				onChange={(event)=>{
					this._handleInputChange(event.target.value)
				}} 
				placeholder={this.props.placeholder || "Search.."}
				/>
				<SearchBarImageSpan
					onClick={()=>{
							console.log(input.value)
						}}
				>
					<img 
						src={require('../../local-data/images/search-icon.png')} 
					/>
				</SearchBarImageSpan>
			</SearchBarWrapper>
		)
	}
}