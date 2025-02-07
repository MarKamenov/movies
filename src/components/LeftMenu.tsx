import * as React from 'react';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';
import Accordion from './Accordion';
import * as search from '../assets/search-icon-white.png';

export interface ILeftMenuProps {
	className?: string;
}

class UnstyledLeftMenu extends React.Component<ILeftMenuProps> {
	public render() {
		const { className } = this.props;

		return (
			<Flex flexDirection="column" className={className} role="navigation" aria-label="Main menu">
				<Accordion initOpen={true} title="Wesley">
					<Flex
						p={3}
						className="discover"
						alignItems="center"
						justifyContent="space-between"
						role="button"
						tabIndex={0}
						aria-label="Open discovery section"
					>
						<Box>Discover</Box>
						<Box>
							<img className="search-img" src={search} alt="search icon" />
						</Box>
					</Flex>
				</Accordion>
				<Box className="main-titles" p={3} role="heading" aria-level={2}>
					Watched
				</Box>
				<hr aria-hidden="true" />
				<nav aria-label="Watched content">
					<Box p={3} role="link" tabIndex={0}>
						Movies
					</Box>
					<Box p={3} role="link" tabIndex={0}>
						TV Shows
					</Box>
				</nav>
				<Box className="main-titles" p={3} role="heading" aria-level={2}>
					Saved
				</Box>
				<hr aria-hidden="true" />
				<nav aria-label="Saved content">
					<Box p={3} role="link" tabIndex={0}>
						Movies
					</Box>
					<Box p={3} role="link" tabIndex={0}>
						TV Shows
					</Box>
				</nav>
			</Flex>
		);
	}
}

const LeftMenu = styled(UnstyledLeftMenu)`
	display: none;
	@media (min-width: 768px) {
		display: flex;
		background-color: ${props => props.theme.bckgColor};
		color: white;
		color: #ffffff;
		flex-grow: 1;
		overflow-y: auto;
		overflow-x: hidden;
		min-width: 12rem;
		max-width: 15rem;
		height: 100%;
	}

	.main-titles {
		font-size: 1.2rem;
		font-weight: bold;
	}
	.search-img {
		width: 20px;
		height: 20px;
		transform: rotate(0deg);
	}
	.discover {
		background-color: ${props => props.theme.textHighLightColor};
	}
	hr {
		width: 94%;
		margin-left: 1rem;
		border-style: inset;
		border-width: 0.5px;
	}
`;
export default LeftMenu;
