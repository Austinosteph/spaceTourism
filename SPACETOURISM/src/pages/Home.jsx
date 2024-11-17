import Explore from '/assets/home/Exploreicon.png';
import {} from 'module';
const Home = () => (
	<div className="lg:bg-bgDesktopHome md:bg-bgTabletHome bg-bgMobileHome bg-cover min-h-screen">
		<div className="lg:flex-row flex-col flex  text-CustomWhite lg:pt-60 md:pt-52 pt-36 lg:justify-center lg:space-x-20  items-center lg:space-y-0 md:space-y-14 space-y-20">
			<div className="lg:w-[520px] lg:space-y-7 md:space-y-24 space-y-10 flex-col align-middle ">
				<p className="font-balowCondensed md:text-xl text-lg text-lightBlue ml-10 md:ml-24 lg:ml-auto">
					SO, YOU WANT TO TRAVEL TO
				</p>
				<p className="font-Bellefair text-6xl md:text-8xl text-CustomWhite ml-16 md:ml-24 lg:ml-auto">
					SPACE
				</p>
				<p className="font-balowRegular text-lightBlue lg:text-base md:text-sm lg:w-auto md:w-[500px] w-[327px]">
					Let’s face it; if you want to go to space, you might as well genuinely
					go to outer space and not hover kind of on the edge of it. Well sit
					back, and relax because we’ll give you a truly out of this world
					experience!
				</p>
			</div>
			<div className="md:w-auto md:h-auto h-36 w-36">
				<img
					src={Explore}
					className="outline-none hover:outline hover:outline-55 hover:outline-CustomWhite/20 hover:outline-offset-0 rounded-full"
					style={{ '--tw-outline-opacity': 0.5 }}
				/>
			</div>
		</div>
	</div>
);

export default Home;
