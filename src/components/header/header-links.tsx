import * as React from 'react';
import styled, { css } from 'styled-components';
import { media } from '../../helpers/media-query'

const HeaderLinksWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	${media.tablet} {
		flex-direction: row;
		display: "flex" !important;
	}
`

const HeaderLink = styled.div`
	padding: 0.5em 1em;	
	color:white;

	${media.tablet}{
		padding: 0 1.25em;
	}
`

export default class HeaderLinksMobile extends React.Component{
	render() {
		return(
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
		)
	}
}