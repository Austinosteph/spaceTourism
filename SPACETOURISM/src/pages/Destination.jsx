import { useReducer } from 'react';
import imagemoon from '/assets/destination/image-moon.png';
import imagemars from '/assets/destination/image-mars.png';
import imageeuropa from '/assets/destination/image-europa.png';
import imagetitan from '/assets/destination/image-titan.png';

const Destination = () => {
	const initialState = {
		image: imagemoon,
		space: 'MOON',
		details:
			'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
		distance: 'AVG. DISTANCE',
		avgDistance: '384,400 KM',
		travelTime: 'Est. travel time',
		estTravelTime: '3 DAYS',
	};
	function reducer(state, action) {
		switch (action.type) {
			case 'MOON':
				return initialState;

			case 'MARS':
				return {
					image: imagemars,
					details:
						'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
					space: 'MARS',
					distance: 'AVG. DISTANCE',
					avgDistance: '225 MIL. KM',
					travelTime: 'Est. travel time',
					estTravelTime: '9 MONTHS',
				};
			case 'EUROPA':
				return {
					image: imageeuropa,
					space: 'EUROPA',
					details:
						'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
					distance: 'AVG. DISTANCE',
					avgDistance: '628 MIL. KM',
					travelTime: 'Est. travel time',
					estTravelTime: '3 YEARS',
				};
			case 'TITAN':
				return {
					image: imagetitan,
					space: 'TITAN',
					details:
						'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
					distance: 'AVG. DISTANCE',
					avgDistance: '1.6 BIL. km',
					travelTime: 'Est. travel time',
					estTravelTime: '7 YEARS',
				};
			default:
				return state;
		}
	}
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<div className="lg:bg-bgDesktopDestination md:bg-bgTabletDestination bg-bgMobileDestination min-h-screen bg-cover ">
			<div className="lg:pt-28 md:pt-36 pt-28 lg:space-y-20 md:space-y-10 space-y-10">
				<div className="flex lg:pl-32 md:pl-10 justify-center	 md:justify-start">
					<p className="font-balowCondensed text-CustomWhite lg:text-xl md:text-lg text-base">
						<span className="pr-3 opacity-45 font-bold">01</span>PICK YOUR
						DESTINATION
					</p>
				</div>
				<div className="flex flex-col lg:flex-row lg:space-x-20 justify-center items-center space-y-14 md:space-y-20 lg:space-y-0">
					<div>
						<img
							src={state.image}
							className="lg:w-[370px] lg:h-[370px] md:w-[280px] md:h-[280px] w-[150px] h-[150px]"
						/>
					</div>
					<div className="space-y-6 md:space-y-8 lg:space-y-5 flex flex-col items-center lg:items-start">
						<div className="flex lg:space-x-5 space-x-8 text-lightBlue font-balowCondensed text-sm">
							<button
								onClick={() => dispatch({ type: 'MOON' })}
								className={`${
									state.space === 'MOON'
										? 'border-b-2 text-CustomWhite'
										: 'hover:border-b-2 border-lightBlue border-opacity-50'
								}`}
							>
								MOON
							</button>
							<button
								onClick={() => dispatch({ type: 'MARS' })}
								className={`${
									state.space === 'MARS'
										? 'border-b-2 text-CustomWhite'
										: 'hover:border-b-2 border-lightBlue border-opacity-50'
								}`}
							>
								MARS
							</button>
							<button
								onClick={() => dispatch({ type: 'EUROPA' })}
								className={`${
									state.space === 'EUROPA'
										? 'border-b-2 text-CustomWhite'
										: 'hover:border-b-2 border-lightBlue border-opacity-50'
								}`}
							>
								EUROPA
							</button>
							<button
								onClick={() => dispatch({ type: 'TITAN' })}
								className={`${
									state.space === 'TITAN'
										? 'border-b-2 text-CustomWhite'
										: 'hover:border-b-2 border-lightBlue border-opacity-50'
								}`}
							>
								TITAN
							</button>
						</div>
						<p className="text-CustomWhite font-Bellefair text-6xl md:text-8xl">
							{state.space}
						</p>
						<div>
							<p className="px-2 text-lightBlue font-balowRegular text-sm lg:w-[440px] lg:h-[128px] md:w-[500px] md:h-[87px] w-[337px] h-[135px] leading-6">
								{state.details}
							</p>
							<div className="border-t border-gray-600"></div>
						</div>
						<div className="space-y-2 flex flex-col md:flex-row items-center md:space-x-20 space-x-0">
							<div>
								<p className="text-lightBlue font-balowCondensed text-xs md:text-sm pl-8 lg:pl-0">
									{state.distance}
								</p>
								<p className="text-CustomWhite font-Bellefair text-3xl">
									{state.avgDistance}
								</p>
							</div>
							<div>
								<p className="text-lightBlue font-balowCondensed text-xs md:text-sm pl-3 lg:pl-0">
									{state.travelTime}
								</p>
								<p className="text-CustomWhite font-Bellefair text-3xl">
									{state.estTravelTime}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Destination;
