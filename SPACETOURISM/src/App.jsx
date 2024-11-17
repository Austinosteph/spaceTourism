import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import loader from '/assets/favicon-32x32.png';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Error from './pages/Error';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import Sharedlayout from './pages/sharedlayout';

function App() {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2800);
	}, []);
	return loading ? (
		<div className="flex h-screen items-center justify-center">
			<img src={loader} className="animate-spin" />
		</div>
	) : (
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
