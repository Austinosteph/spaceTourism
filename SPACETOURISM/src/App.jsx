import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import loader from '/assets/favicon-32x32.png'; // Make sure this path is correct
import Home from './pages/Home';
import Destination from './pages/Destination';
import Error from './pages/Error';
import Crew from './pages/Crew';
import Technology from './pages/Technology';

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2800); // Show the loader for 2.8 seconds
	}, []);

	return loading ? (
		<div className="flex h-screen items-center justify-center">
			<img src={loader} className="animate-spin" alt="Loading..." />
		</div>
	) : (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path="destination" element={<Destination />} />
				<Route path="crew" element={<Crew />} />
				<Route path="technology" element={<Technology />} />
				<Route path="*" element={<Error />} /> {/* Catch-all route for 404 */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
