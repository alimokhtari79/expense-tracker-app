import React from 'react';
import './App.css';
import ExpenseApp from './Components/ExpenseApp/ExpenseApp';
import Header from './Components/Header/Header';

const App = () => {
	return (
		<div className="App">
			<Header />
			<ExpenseApp />
		</div>
	);
};

export default App;
