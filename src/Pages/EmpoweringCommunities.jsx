import { ArrowLeft, ArrowRight, MoveLeft, Quote, Star } from 'lucide-react';
import React , {useRef} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default function EmpoweringCommunities() {
  const userReviews = [
    { username: "johndoe", review: "This app is amazing! It has everything I need." },
    { username: "janedoe", review: "Good experience overall, but there are a few bugs." },
    { username: "alex123", review: "The interface is user-friendly and intuitive,I realy Like IT!!" },
    { username: "sarah_w", review: "I love the new update! It made everything smoother." },
    { username: "mike89", review: "Needs more features, but it's a solid app for now." }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  return (
    <div className='w-full h-fit px-16 py-24'>
      <div className='grid grid-cols-8'>
        <div className='font-IBM col-span-5'>
          <h2 className='text-gray-400 text-2xl font-semibold'>Empowering Communities</h2>
          <h1 className='font-semibold w-full my-6 text-[2.5rem] md:text-[4rem] leading-relaxed'>Our Positive <span className='text-green-500 underline'>Social Impact</span></h1>
          <p className='text-gray-400 text-xl'>Our lending solutions are designed to help businesses achieve their goals and drive economic growth in their local area.</p>
        </div>
        <div className='col-span-3'>
          <h1 className='font-semibold font-IBM text-4xl flex'> <Star color='green' size='2.5rem' fill='green'/> Trustpilot</h1>
          <div className='grid grid-cols-5 gap-1 my-10 w-fit'>
            <Star color='#FFFFFF' className='p-3 bg-green-700' size='3.5rem' fill='#FFFFFF'/> 
            <Star color='#FFFFFF' className='p-3 bg-green-700' size='3.5rem' fill='#FFFFFF'/>
            <Star color='#FFFFFF' className='p-3 bg-green-700' size='3.5rem' fill='#FFFFFF'/>
            <Star color='#FFFFFF' className='p-3 bg-green-700' size='3.5rem' fill='#FFFFFF'/>
            <Star color='#FFFFFF' className='p-3 bg-green-700' size='3.5rem' fill='#FFFFFF'/>
          </div>
          <p className='text-1xl font-semibold'>Trust Score 5.0 | 3,724 reviews</p>
        </div>
      </div>
      <div className=' mt-6 gap-3 slider-container'>
        <div className='text-4xl text-green-500 absolute left-[10%] z-50'>
          <Quote fill='#22c55e' size={80}/>
        </div>
        <Slider ref={slider => {
          sliderRef = slider;
        }} className='overflow-visible' {...settings}>
          {userReviews.map((user, index) => (
            <div className='bg-white mx-4 my-10  h-full max-w-[90%] rounded-3xl shadow-xl p-10 text-xl' key={index}>
              <div className='w-[90%]'>
                <p className='text-gray-400 leading-relaxed'>{user.review}</p>
                <div className='w-full flex justify-between'>
                  <div className='h-fit flex flex-col md:flex-row items-center mt-4'>
                    <span className='px-8 py-6 mx-2 h-fit rounded-full bg-blue-950 text-white font-bold'>{user.username.charAt(0).toUpperCase()}</span>
                    <h3 className='font-semibold'>{user.username}</h3>
                  </div>
                  <div className='my-auto'>
                    <h1 className='font-semibold text-xl flex'><Star fill='gold' color='gold'/> 5.0</h1>
                    <h1 className='text-gray-400 text-xl'>Rating</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className='text-center'>
          <button className="button mx-4 p-6 rounded-lg bg-white shadow-lg font-semibold text-xl" onClick={previous}>
            <ArrowLeft/>
          </button>
          <button className="button mx-4 p-6 rounded-lg bg-white shadow-lg font-semibold text-xl" onClick={next}>
            <ArrowRight/>
          </button>
        </div>
      </div>
    </div>
  );
}
