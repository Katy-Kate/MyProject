import React from 'react';

import { connect } from 'react-redux';
import { createAction, Dispatch } from '@reduxjs/toolkit';

import { increment } from './store/reducers/counter.slice';
import { Header } from './feateries/Header/Header';
import { WithLeftMenuPannel } from './feateries/WithLeftMenuPannel/WithLeftMenuPannel';

import './App.css';

function App(props: any) {
	return (
		<div className="App">
			<Header />
			<WithLeftMenuPannel>
				{props.counter}
				<button onClick={props.addNumber}>tt</button>
			</WithLeftMenuPannel>
		</div>
	);
}

const mapStateToProps = (state: any) => ({
	counter: state.counter
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	addNumber: () => {
		dispatch(increment(3));
	}
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
