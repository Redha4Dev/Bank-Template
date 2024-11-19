import GlowingList from "../Components/GlowingList";
import HeroButton from "../Components/HeroButton";


const Hero = () => {
    return (
        <div className="bg-[#12121b] px-16 pt-24 rounded-bl-[10rem]">
            <h1 className="text-[6vw] my-6 text-white font-IBM">
                Unlock Your <span className="font-bold">Business</span> Potenial With Xenon Bank
            </h1>
            <div className="w-full flex flex-col md:flex-row lg:flex-row">
                <div className="text-white md:w-[25%] flex flex-col w-full text-xl font-IBM">
                    <p className="leading-8 mb-24">achive business success with Xenon Bank. <br />
                        Our comprehensive financial solutions help unlock business potential and take your vision to the next level.</p>
                    <HeroButton text='APPLY NOW'/>
                </div>
                <img src="src/assets/manHero.png" className="md:w-[800px] hidden md:block w-[100vw]" alt="" />
                <GlowingList/>
                <img src="src/assets/manHero.png" className="md:w-[800px] block md:hidden w-[100vw]" alt="" />
            </div>
        </div>
    )
}

export default Hero;