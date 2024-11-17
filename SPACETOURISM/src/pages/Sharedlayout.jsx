import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
const Sharedlayout = () => (
	<div>
		<div>
			<Navbar />
		</div>
		<div>
			<Outlet />
		</div>
	</div>
);
export default Sharedlayout;
