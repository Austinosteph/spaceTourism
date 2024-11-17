import image1 from '/assets/crew/image-douglas-hurley.webp';
import image2 from '/assets/crew/image-mark-shuttleworth.webp';
import image3 from '/assets/crew/image-victor-glover.webp';
import image4 from '/assets/crew/image-anousheh-ansari.webp';
import { useReducer } from 'react';
const Crew = () => {
	const initialState = {
		id: 1,
		tittle: 'COMMANDER',
		name: 'DOUGLAS HURLEY',
		image: image1,
		details:
			'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
	};
	function reducer(state, action) {
		switch (action.type) {
			case 1:
				return initialState;
			case 2:
				return {
					id: 2,
					tittle: 'Mission Specialist ',
					name: 'MARK SHUTTLEWORTH',
					image: image2,
					details:
						'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
				};
			case 3:
				return {
					id: 3,
					tittle: ' PILOT ',
					name: 'Victor Glover ',
					image: image3,
					details:
						'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
				};
			case 4:
				return {
					id: 4,
					tittle: ' Flight Engineer ',
					name: ' Anousheh Ansari ',
					image: image4,
					details:
						'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
				};
			default:
				return state;
		}
	}
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<div className="bg-cover min-h-screen lg:bg-bgDesktopCrew md:bg-bgTabletCrew bg-bgMobileCrew">
			<div className="lg:pt-36 pt-28 space-y-14">
				<div className="flex justify-center md:justify-start lg:pl-20 md:pl-10">
					<p className="font-balowCondensed text-CustomWhite lg:text-xl md:text-lg text-base">
						<span className="pr-3 opacity-45 font-bold">02</span>
						MEET YOUR CREW
					</p>
				</div>
				<div className="flex flex-col lg:flex-row justify-center items-center lg:space-y-0 space-y-8">
					<div className="lg:space-y-36 md:space-y-5 space-y-2 flex flex-col items-center lg:items-start">
						<div className="flex flex-col items-center lg:items-start space-y-1 md:space-y-4">
							<p className="text-CustomWhite font-Bellefair text-2xl md:text-3xl opacity-60">
								{state.tittle.toUpperCase()}
							</p>
							<p className="text-CustomWhite md:text-5xl text-3xl font-Bellefair pb-4">
								{state.name.toUpperCase()}
							</p>
							<p className="font-balowRegular text-lightBlue leading-relaxed text-sm md:text-lg w-[330px] md:w-[730px] lg:w-[600px]">
								{state.details}
							</p>
						</div>
						<div className="space-x-8">
							<button
								onClick={() => dispatch({ type: 1 })}
								className={`w-2.5 h-2.5 lg:w-4 lg:h-4 rounded-full
            ${
							state.id === 1
								? 'bg-white'
								: 'bg-white opacity-20 hover:opacity-55'
						}`}
							></button>
							<button
								onClick={() => dispatch({ type: 2 })}
								className={`w-2.5 h-2.5 lg:w-4 lg:h-4 rounded-full
            ${
							state.id === 2
								? 'bg-white'
								: 'bg-white opacity-20 hover:opacity-55'
						}`}
							></button>
							<button
								onClick={() => dispatch({ type: 3 })}
								className={`w-2.5 h-2.5 lg:w-4 lg:h-4 rounded-full
            ${
							state.id === 3
								? 'bg-white'
								: 'bg-white opacity-20 hover:opacity-55'
						}`}
							></button>
							<button
								onClick={() => dispatch({ type: 4 })}
								className={`w-2.5 h-2.5 lg:w-4 lg:h-4 rounded-full
            ${
							state.id === 4
								? 'bg-white'
								: 'bg-white opacity-20 hover:opacity-55'
						}`}
							></button>
						</div>
					</div>
					<div className="md:w-[500px] md:h-[676px] w-[330.8px] h-[400px]">
						<img src={state.image} className="w-full h-full object-contain" />
					</div>
				</div>
			</div>
		</div>
	);
};
export default Crew;
