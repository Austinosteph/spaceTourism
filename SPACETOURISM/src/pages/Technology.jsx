import imageA from '/assets/technology/image-launch-vehicle-portrait.jpg';
import imagea from '/assets/technology/image-launch-vehicle-landscape.jpg';
import imageB from '/assets/technology/image-spaceport-portrait.jpg';
import imageb from '/assets/technology/image-spaceport-landscape.jpg';
import imageC from '/assets/technology/image-space-capsule-portrait.jpg';
import imagec from '/assets/technology/image-space-capsule-landscape.jpg';

import { useReducer } from 'react';
const Technology = () => {
	const initialState = {
		id: 1,
		tittle: 'THE TERMINOLOGY…',
		vehicle: 'LAUNCH VEHICLE',
		imagedesktop: imageA,
		imagemobile: imagea,
		details:
			"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
	};
	function reducer(state, action) {
		switch (action.type) {
			case 1:
				return initialState;
			case 2:
				return {
					id: 2,
					tittle: 'THE TERMINOLOGY…',
					vehicle: ' SPACEPORT',
					imagedesktop: imageB,
					imagemobile: imageb,
					details:
						'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
				};
			case 3:
				return {
					id: 3,
					tittle: 'THE TERMINOLOGY…',
					vehicle: ' SPACE CAPSULE',
					imagedesktop: imageC,
					imagemobile: imagec,
					details:
						"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
				};
		}
	}
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<div className="lg:bg-bgDesktopTechnology md:bg-bgTabletTechnology bg-bgMobileTechnology bg-cover min-h-screen ">
			<div className="lg:pt-36 pt-28 space-y-14">
				<div className="flex justify-center md:justify-start lg:pl-20 md:pl-10">
					<p className="font-balowCondensed text-CustomWhite lg:text-xl md:text-lg text-base">
						<span className="pr-3 opacity-45 font-bold">03</span>
						SPACE LAUNCH 101
					</p>
				</div>
				<div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-9">
					<div className="flex lg:flex-row flex-col space-x-8 items-center lg:space-y-0 md:space-y-10 space-y-6">
						<div className="lg:hidden w-screen md:h-[447px] h-[258px]">
							<img
								src={state.imagemobile}
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="flex flex-row lg:flex-col lg:space-y-8 space-y-0 lg:space-x-0 space-x-4 font-Bellefair text-lg items-center">
							<button
								onClick={() => dispatch({ type: 1 })}
								className={`w-14 h-14 rounded-full
            ${
							state.id === 1
								? 'bg-CustomWhite'
								: 'border border-CustomWhite border-opacity-30 text-CustomWhite hover:border-opacity-65'
						}`}
							>
								1
							</button>
							<button
								onClick={() => dispatch({ type: 2 })}
								className={`w-14 h-14 rounded-full
            ${
							state.id === 2
								? 'bg-CustomWhite'
								: 'border border-CustomWhite border-opacity-30 text-CustomWhite hover:border-opacity-65'
						}`}
							>
								2
							</button>
							<button
								onClick={() => dispatch({ type: 3 })}
								className={`w-14 h-14 rounded-full
            ${
							state.id === 3
								? 'bg-CustomWhite'
								: 'border border-CustomWhite border-opacity-30 text-CustomWhite hover:border-opacity-65'
						}`}
							>
								3
							</button>
						</div>
						<div className="flex flex-col items-center lg:items-start space-y-1 md:space-y-4">
							<p className="text-CustomWhite font-Bellefair text-2xl md:text-3xl opacity-60">
								{state.tittle.toUpperCase()}
							</p>
							<p className="text-CustomWhite md:text-5xl text-3xl font-Bellefair pb-4">
								{state.vehicle.toUpperCase()}
							</p>
							<p className="font-balowRegular text-lightBlue leading-relaxed text-sm md:text-lg w-[290px] pb-6  md:w-[600px] lg:w-[500px]">
								{state.details}
							</p>
						</div>
					</div>
					<div className="w-[508px] h-[500px] hidden lg:block">
						<img
							src={state.imagedesktop}
							className="w-full h-full object-contain"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Technology;
