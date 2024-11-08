import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sharedlayout from './pages/sharedlayout';
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Sharedlayout />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
