import React, { Component } from 'react';

import { Menu, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';

import { toggleLeftPanel } from '../../store/header/header.slice';
import { getLeftPanelState } from '../../store/header/header.selector';
import { StoreState } from '../../store/entities/coreStore';

interface TopNavigationProps {
	isOpenLeftPanel: boolean;
	toggleLeftPanel: (data: boolean) => void;
}

export default class TopNavigation extends Component<TopNavigationProps> {
	handleLeftPanel = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		this.props.toggleLeftPanel(!this.props.isOpenLeftPanel);
	};

	render() {
		return (
			<Menu inverted color="blue">
				<Menu.Item as="a" onClick={this.handleLeftPanel}>
					<Icon inverted color="grey" name="bars" />
				</Menu.Item>
			</Menu>
		);
	}
}

const mapStateToProps = (state: StoreState) => ({
	isOpenLeftPanel: getLeftPanelState(state)
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
	toggleLeftPanel: (isOpenLeftPanel: boolean) => dispatch(toggleLeftPanel(isOpenLeftPanel))
});

export const Header = connect(mapStateToProps, mapDispatchToProps)(TopNavigation);
