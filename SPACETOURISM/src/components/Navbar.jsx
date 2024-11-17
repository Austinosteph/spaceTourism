import { useState } from 'react';
import logo from '/assets/shared/logo.svg';
import iconhamburger from '/assets/shared/icon-hamburger.svg';
import iconclose from '/assets/shared/icon-close.svg';
import { Link, NavLink } from 'react-router-dom';
function Navbar() {
	const [toggle, setToggle] = useState(false);

	return (
		<nav className="relative">
			<div className="absolute left-0 right-0 flex justify-between items-center lg:py-8">
				<div className="bg-CustomWhite rounded-full ml-5 md:ml-10 mt-7 md:mt-3 lg:mt-0">
					<Link to={'/'}>
						<img src={logo} />
					</Link>
				</div>
				<div className="relative left-10  border-t border-CustomWhite w-1/2 h-1  z-10 opacity-35 hidden lg:flex"></div>
				<div className="hidden text-CustomWhite backdrop-blur-lg bg-CustomWhite bg-opacity-5 max-w-[640px]  lg:max-w-[736px]  md:flex self-center space-x-6 text-nowrap font-balowCondensed pl-16 p-6 lg:pt-10 lg:py-3">
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive
								? 'border-b-[3px] pb-6 border-lightBlue'
								: 'hover:border-b-[3px] hover:border-lightBlue hover:border-opacity-40 pb-6'
						}
					>
						<span className="font-bold pr-3">00</span>HOME
					</NavLink>

					<NavLink
						to="/destination"
						className={({ isActive }) =>
							isActive
								? 'border-b-[3px] pb-6 border-lightBlue'
								: 'hover:border-b-[3px] hover:border-lightBlue hover:border-opacity-40 pb-6'
						}
					>
						<span className="font-bold pr-3">01</span>DESTINATION
					</NavLink>
					<NavLink
						to="/crew"
						className={({ isActive }) =>
							isActive
								? 'border-b-[3px] pb-6 border-lightBlue'
								: 'hover:border-b-[3px] hover:border-lightBlue hover:border-opacity-40 pb-6'
						}
					>
						<span className="font-bold pr-3">02</span>CREW
					</NavLink>
					<NavLink
						to="/technology"
						className={({ isActive }) =>
							isActive
								? 'border-b-[3px] pb-6 border-lightBlue'
								: 'hover:border-b-[3px] hover:border-lightBlue hover:border-opacity-40 pb-6'
						}
					>
						<span className="font-bold pr-3">03</span>TECHNOLOGY
					</NavLink>
				</div>
				{/* mobilenav */}
				<div className="md:hidden mt-8 mr-5">
					<button
						onClick={() => {
							setToggle((prev) => !prev);
						}}
					>
						<img
							src={toggle ? undefined : iconhamburger}
							className={`w-6 h-6 ${toggle ? 'hidden' : 'block'}`}
						/>
					</button>
					{/* Side Nav */}
					<div
						className={`${
							toggle ? '' : 'hidden'
						} min-h-screen font-balowCondensed bg-veryDarkNavy absolute w-[254px] right-0 text-CustomWhite top-0 bg-opacity-5 backdrop-blur-lg`}
					>
						<button
							className="float-right mt-8 mr-5"
							onClick={() => {
								setToggle((prev) => !prev);
							}}
						>
							<img src={toggle ? iconclose : undefined} className="h-7 w-7" />
						</button>
						<div className="mt-32 flex space-y-10 flex-col">
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive
										? 'border-r-[6px] pr-32 border-lightBlue'
										: 'hover:border-r-[6px] hover:border-lightBlue hover:border-opacity-40 pr-32'
								}
							>
								<span className="font-bold pr-3 pl-5">00</span>HOME
							</NavLink>
							<NavLink
								to="/destination"
								className={({ isActive }) =>
									isActive
										? 'border-r-[6px] pr-32 border-lightBlue'
										: 'hover:border-r-[6px] hover:border-lightBlue hover:border-opacity-40 pr-32'
								}
							>
								<span className="font-bold pr-3 pl-5">01</span>DESTINATION
							</NavLink>
							<NavLink
								to="/crew"
								className={({ isActive }) =>
									isActive
										? 'border-r-[6px] pr-32 border-lightBlue'
										: 'hover:border-r-[6px] hover:border-lightBlue hover:border-opacity-40 pr-32'
								}
							>
								<span className="font-bold pr-3 pl-5">02</span>CREW
							</NavLink>
							<NavLink
								to="/crew"
								className={({ isActive }) =>
									isActive
										? 'border-r-[6px] pr-32 border-lightBlue'
										: 'hover:border-r-[6px] hover:border-lightBlue hover:border-opacity-40 pr-32'
								}
							>
								<span className="font-bold pr-3 pl-5">03</span>TECHNOLOGY
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
export default Navbar;
