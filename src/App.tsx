import React from 'react';

import { connect } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';

import { Header } from './feateries/Header/Header';
import { WithLeftMenuPannel } from './feateries/WithLeftMenuPannel/WithLeftMenuPannel';
import { MainContainer } from './feateries/MainContainer/MainContainer';

import './App.css';
import { StoreState } from './store/entities/coreStore';

function App(props: any) {
	return (
		<div className="App">
			<Header />
			<WithLeftMenuPannel>
				<MainContainer />
			</WithLeftMenuPannel>
		</div>
	);
}

const mapStateToProps = (state: StoreState) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(App);
