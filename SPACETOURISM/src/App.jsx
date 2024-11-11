import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sharedlayout from './pages/sharedlayout';
import Destination from './pages/Destination';
import Error from './Error';
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Sharedlayout />}>
					<Route index element={<Home />} />
					<Route path="destination" element={<Destination />}></Route>
					<Route path="*" element={<Error />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
