import React from 'react';
import { Dispatch } from 'redux';
import { StoreState } from '../../store/entities/coreStore';
import { getActiveMenu } from '../../store/header/header.selector';
import { connect } from 'react-redux';
import { HomePage } from './HomePage/HomePage';
import { MessagesPage } from './MessagesPage/MessagesPage';
import { CalendarPage } from './CalendarPage/CalendarPage';
import { ContactsPage } from './ContactsPage/ContactsPage';
interface MainContainerProps {
	activeMenu: number;
}

function renderMainPage(activeMenu: number) {
	switch (activeMenu) {
		case 1:
			return <HomePage />;
		case 2:
			return <MessagesPage />;
		case 3:
			return <CalendarPage />;
		case 4:
			return <ContactsPage />;
	}
}

class Container extends React.Component<MainContainerProps> {
	render() {
		return (
			<div>
				MainContainer
				<p>{this.props.activeMenu}</p>
				{renderMainPage(this.props.activeMenu)}
			</div>
		);
	}
}

const mapStateToProps = (state: StoreState) => ({
	activeMenu: getActiveMenu(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Container);
