import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';
const Sharedlayout = () => (
	<div>
		<Navbar />
		<Outlet />
	</div>
);
export default Sharedlayout;
