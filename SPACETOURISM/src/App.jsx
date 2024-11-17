import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sharedlayout from './pages/sharedlayout';
import Destination from './pages/Destination';
import Error from './Error';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Sharedlayout />}>
					<Route index element={<Home />} />
					<Route path="destination" element={<Destination />}></Route>
					<Route path="crew" element={<Crew />}></Route>
					<Route path="technology" element={<Technology />}></Route>
					<Route path="*" element={<Error />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
