import * as React from 'react';
import styled from 'styled-components';
import { media } from '../../helpers/media-query'

const DropDownReadOnlyInput = styled.input`	
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

const OptionsWrapper = styled.div`
	margin: 0 0.5em;
	width: 86vw;
	padding: 0 1em;
	box-shadow: 0 1px 4px 0 var(--light-grey);
	${media.tablet}{
    	width:23vw;
    }
`

const Option = styled.option`
	padding: 0.5em 0em;
	:hover{
		background:var(--light-grey);
	}
`

const DropDownImageSpan = styled.span`
	background: var(--blue);
    padding: 17px;
    position: relative;
    left:-14px;
    border-radius:0 4px 4px 0;
    cursor:pointer;
`

const DropDownInputWrapper = styled.div`
	display:flex;
`

interface Istate{
	selectedOption: string,
	showOptions: boolean,
}

interface IProps{
	dropDownOptions: string[],
	_selectedOption: any,
	defaultValue?: string,
}

export default class CDropDown extends React.Component<IProps,Istate> {
	state = {
		selectedOption: this.props.defaultValue || this.props.dropDownOptions[0],
		showOptions: false
	}


	_handleCurrencyChange = (index:number) => {
		this.setState({
			selectedOption: this.props.dropDownOptions[index],
			showOptions: false
		})
		this.props._selectedOption(index);
	}

	render(){
		return(
			<div>
			<DropDownInputWrapper>
				<DropDownReadOnlyInput 
				readOnly 
				value={this.state.selectedOption} 
				onClick={()=>{
					this.setState({showOptions:!this.state.showOptions})
				}} />
				{
					this.state.showOptions ? 
					( 
						<DropDownImageSpan
							onClick={()=>{
									this.setState({showOptions:false})
								}}
						>
							<img 
								src={require('../../local-data/images/arrow-up.png')} 
							/>
						</DropDownImageSpan>
					) : (
						<DropDownImageSpan
							onClick={()=>{
									this.setState({showOptions:true})
								}}
						>
							<img 
								src={require('../../local-data/images/arrow-down.png')} 
							/>
						</DropDownImageSpan>
					)
				}
			</DropDownInputWrapper>
				
					{
						this.state.showOptions &&
						<OptionsWrapper>
						{
							this.props.dropDownOptions.map((currrency:string, index:number)=>(
								<Option 
									key={index} 
									onClick={()=>{
										this._handleCurrencyChange(index)
									}}
								> {currrency} </Option>
		 					))
						}
						</OptionsWrapper>
					}
			</div>
		)
	}
}