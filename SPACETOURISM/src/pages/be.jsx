<div className="flex flex-col lg:pt-32 md:pt-32 space-y-20">
	<div className="pl-32">
		<p className="font-balowCondensed text-CustomWhite">
			<span className="pr-3 opacity-45 font-bold">01</span>PICK YOUR DESTINATION
		</p>
	</div>
	<div className="lg:flex space-x-20 self-center lg:pl-0 md:pl-20">
		<div className="mb-8 md:pl-8 lg:pl-0">
			<img src={state.image} className="w-[370px] h-[370px]" />
		</div>
		<div>
			<div className="lg:space-y-3 md:space-y-5">
				<div className="flex space-x-5 text-lightBlue font-balowCondensed text-sm">
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
				<p className="text-CustomWhite font-Bellefair text-8xl">
					{state.space}
				</p>
				<p className="text-lightBlue font-balowRegular text-sm lg:w-[440px] lg:h-[128px] md:w-[500px] md:h-[87px] leading-6">
					{state.details}
				</p>
			</div>
			<div className="border-t border-gray-600"></div>
			<div className="flex space-x-20">
				<div>
					<p className="text-lightBlue font-balowCondensed text-sm">
						{state.distance}
					</p>
					<p className="text-CustomWhite font-Bellefair text-3xl">
						{state.avgDistance}
					</p>
				</div>
				<div>
					<p className="text-lightBlue font-balowCondensed text-sm">
						{state.travelTime}
					</p>
					<p className="text-CustomWhite font-Bellefair text-3xl">
						{state.estTravelTime}
					</p>
				</div>
			</div>
		</div>
	</div>
</div>;
