import * as React from 'react';
import styled, { css } from 'styled-components';
import { media } from '../../helpers/media-query'

interface Iprops {
	showNavigationLinks: boolean
}

const HeaderLinksWrapper = styled.div<Iprops>`
	display: ${ (props:Iprops) => props.showNavigationLinks ? "flex" : "none" };
	align-items: center;
	justify-content: center;
	flex-direction: column;

	${media.tablet} {
		flex-direction: row;
		display: flex;
	}
`

const HeaderLink = styled.div`
	padding: 0.5em 1em;	
	color:white;

	${media.tablet}{
		padding: 0 1.25em;
	}
`

export default class HeaderLinksMobile extends React.Component<Iprops>{
	render() {
		return(
				<HeaderLinksWrapper showNavigationLinks = {this.props.showNavigationLinks} >

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
		)
	}
}