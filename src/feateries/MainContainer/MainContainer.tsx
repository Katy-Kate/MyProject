import React from 'react';
import { Dispatch } from 'redux';
import { StoreState } from '../../store/entities/coreStore';
import { getActiveMenu } from '../../store/header/header.selector';
import { connect } from 'react-redux';
import { NewsPage } from './News/News';
import { MessagesPage } from './MessagesPage/MessagesPage';
import { CalendarPage } from './CalendarPage/CalendarPage';
import { ContactsPage } from './ContactsPage/ContactsPage';
import { Container, Header } from 'semantic-ui-react';
interface MainContainerProps {
	activeMenu: number;
}

function renderMainPage(activeMenu: number) {
	switch (activeMenu) {
		case 1:
			return <NewsPage />;
		case 2:
			return <MessagesPage />;
		case 3:
			return <CalendarPage />;
		case 4:
			return <ContactsPage />;
	}
}

class MainPageContainer extends React.Component<MainContainerProps> {
	render() {
		return (
			<Container text style={{ margin: 20 }}>
				{renderMainPage(this.props.activeMenu)}
			</Container>
		);
	}
}

const mapStateToProps = (state: StoreState) => ({
	activeMenu: getActiveMenu(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);
