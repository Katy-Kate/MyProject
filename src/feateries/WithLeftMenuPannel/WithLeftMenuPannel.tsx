import React, { Component } from 'react';

import { Menu, Segment, Icon, Sidebar } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';

import { toogleTopNavigation, toggleLeftPanel } from '../../store/header/header.slice';
import { getActiveMenu, getLeftPanelState } from '../../store/header/header.selector';
import { StoreState } from '../../store/entities/coreStore';

import { menuList } from '../../data/menu';

interface TopNavigationProps {
	activeMenu: number;
	isOpenLeftPanel: boolean;
	toggleMenuItem: (id: number) => void;
	toggleLeftPanel: (data: boolean) => void;
	children?: JSX.Element;
}

export default class LeftMenu extends Component<TopNavigationProps> {
	handleItemClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, data: any) => {
		this.props.toggleMenuItem(data.id);
	};
	handleLeftPanel = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		this.props.toggleLeftPanel(!this.props.isOpenLeftPanel);
	};

	render() {
		const { activeMenu, isOpenLeftPanel } = this.props;

		return (
			<Sidebar.Pushable as={Segment} style={{ minHeight: '100vh' }}>
				<Sidebar
					as={Menu}
					animation="overlay"
					icon="labeled"
					inverted
					onHide={() => this.props.toggleLeftPanel(false)}
					onShow={() => this.props.toggleLeftPanel(true)}
					vertical
					visible={isOpenLeftPanel}
					width="thin"
					color="blue"
				>
					{menuList.map((item) => {
						const isActiveMenu = activeMenu === item.id;
						const icon = item.icon;
						return (
							<Menu.Item
								as="a"
								key={item.id}
								id={item.id}
								active={isActiveMenu}
								onClick={this.handleItemClick}
								name={item.name}
							>
								<Icon name="home" />
								{item.name}
							</Menu.Item>
						);
					})}
				</Sidebar>
				{this.props.children}
			</Sidebar.Pushable>
		);
	}
}

const mapStateToProps = (state: StoreState) => ({
	activeMenu: getActiveMenu(state),
	isOpenLeftPanel: getLeftPanelState(state)
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
	toggleMenuItem: (activMenu: number) => dispatch(toogleTopNavigation(activMenu)),
	toggleLeftPanel: (isOpenLeftPanel: boolean) => dispatch(toggleLeftPanel(isOpenLeftPanel))
});

export const WithLeftMenuPannel = connect(mapStateToProps, mapDispatchToProps)(LeftMenu);
