import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Email from './Email';
import Home from './pages/Home';
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/email" element={<Email />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
