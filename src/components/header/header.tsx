import * as React from 'react';
import  HeaderLinks  from './header-links'
import styled from 'styled-components';
import { media } from '../../helpers/media-query';


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
	font-size:1.75em;
	${media.tablet}{
		padding-right:2em;
		font-size:2em;
	}
`

const TabletHeaderNavigationIcon = styled.span`
	padding-right: 0.5em;
	${media.tablet}{
		display:none;
	}
`


const Menuimage = styled.img`
	position: absolute;
	left: 10px;
`

const HeaderLinksMobile = styled.div`
	display:block;
	${media.tablet}{
		display:none;
	}
`

const HeaderLinksDesktop = styled.div`
	display:none;
	${media.tablet}{
		display:block;
	}
`

interface IState {
    showNavigationLinks: boolean;
}

interface IProps {}


export default class CHeader extends React.Component<IProps, IState> {
	
	constructor(props:object){
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
						<Menuimage 
							src={require('../../local-data/images/menu-icon.png')} 
							height="30px"
							onClick={ ()=>{
								this.setState({showNavigationLinks:(!this.state.showNavigationLinks)})
							}} 
						/>
					</TabletHeaderNavigationIcon>
					Foreign Exchange
				</HeaderMainText>
				<br />
				<HeaderLinks showNavigationLinks = {this.state.showNavigationLinks} />
			</HeaderWrapper>
		)
	}
}