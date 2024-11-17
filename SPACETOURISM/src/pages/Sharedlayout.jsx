import { Outlet } from 'react-router-dom';
import React from 'react';
import Navbar from '../components/navbar';
const Sharedlayout = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
		</div>
	);
};
export default Sharedlayout;
