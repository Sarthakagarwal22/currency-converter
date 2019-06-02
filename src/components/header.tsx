import * as React from 'react';
import styled, { css } from 'styled-components';
import { media } from '../helpers/media-query'

const HeaderWrapper = styled.div`
	width: 100vw;
	background: var(--blue);
	padding: 1em 0;
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	
	${media.tablet} {
	  width:98vw;
	  flex-direction: row;
	  justify-content: flex-start;
	  padding-left: 1em;
	}
`

const HeaderMainText = styled.h1`
	color:white;
	
	${media.tablet}{
		padding-right:2em;
	}
`

const TabletHeaderNavigationIcon = styled.span`
	padding-right: 0.5em;
	${media.tablet}{
		display:none;
	}
`

const HeaderLinksWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	${media.tablet} {
		flex-direction: row;
	}
`

const HeaderLink = styled.div`
	padding: 0.5em 1em;	
	color:white;

	${media.tablet}{
		padding: 0 1.25em;
	}
`

interface CState {
    showNavigationLinks: boolean;
}

interface CProps {}


export default class Header extends React.Component<CProps, CState> {
	
	constructor(props:Object){
		super(props);
		this.state = {
			showNavigationLinks:false
		}
	}


	render() {
		return(
			<HeaderWrapper>
			
				<HeaderMainText>
					<TabletHeaderNavigationIcon>
						<img 
							src={require('../local-data/images/menu-icon.png')} 
							height="30px"
							onClick={ ()=>{
								this.setState({showNavigationLinks:(!this.state.showNavigationLinks)})
							}} 
						/>
					</TabletHeaderNavigationIcon>
					Foreign Exchange
				</HeaderMainText>
				<br />
				<HeaderLinksWrapper>
					<HeaderLink>
						Home
					</HeaderLink>
					
					<HeaderLink>
						About Us
					</HeaderLink>

					<HeaderLink>
						Contact Us
					</HeaderLink>

				</HeaderLinksWrapper>
			</HeaderWrapper>
		)
	}
}