import { ArrowUpRight, Calendar, CircleDollarSign, Clock7, Wallet, CreditCard, BarChart } from 'lucide-react';
import React, { useState } from 'react';
import HeroButton from '../Components/HeroButton';

function SecondPage() {
    const servicesData = [
        {
            name: "Flexible Business Line of Credit",
            def: "A flexible and convenient way to access funds for your business needs. Use it as you need it and only pay interest on what you borrow. Perfect for unexpected expenses.",
            benefits: [
                { 
                    icon: CircleDollarSign,
                    text: "Easy access to funds as and when needed"
                },
                { 
                    icon: Clock7,
                    text: "Flexible repayment options"
                },
                { 
                    icon: Wallet,
                    text: "Interest only on funds borrowed"
                }
            ],
            img: "src/assets/Everything You Need to Know About Lines of Credit.jpeg" // updated path
        },
        {
            name: "Equipment Financing",
            def: "A loan or lease option that enables businesses to purchase or lease equipment needed for operations without paying the full cost upfront. This financing helps companies conserve cash flow.",
            benefits: [
                { 
                    icon: CircleDollarSign,
                    text: "Cash Flow Management"
                },
                { 
                    icon: Clock7,
                    text: "Flexible Terms"
                },
                { 
                    icon: Calendar,
                    text: "Tax Advantages"
                }
            ],
            img: "src/assets/finance link.jpeg" // updated path
        },
        {
            name: "Merchant Services",
            def: "Merchant Services provide businesses with financial tools to accept and process electronic payments like credit and debit cards. This includes payment processing, gateways, point-of-sale systems.",
            benefits: [
                { 
                    icon: CreditCard,
                    text: "Enhanced Payment Options"
                },
                { 
                    icon: Wallet,
                    text: "Improved Cash Flow"
                },
                { 
                    icon: BarChart,
                    text: "Customer Insights"
                }
            ],
            img: "src/assets/Navigating the World of Offshore Merchant Accounts_ Benefits, Challenges, and Best Practices.jpeg" // updated path
        }
    ];
    
    
    const [selected, setSelected] = useState(0);  // Start with 0 to match array indexing

    const handleSelection = (index) => {
        setSelected(index);
    };

    return (
        <div className='py-28 px-16'>
            <h1 className="text-[5vw] text-center my-6 flex justify-center text-black font-IBM">
                Financial <span className='bg-green-500 cursor-pointer rounded-full px-6 mx-2 h-full py-2 '><ArrowUpRight width='5vw' height='5vw'/></span> Freedom with <span className='text-green-500 font-medium mx-2 underline'>Xenon</span>
            </h1>
            <p className='text-xl md:px-32 text-center text-gray-500'>
                Our offerings are tailored to meet the unique needs and challenges of each business, designed
                to provide the funding and support necessary to help businesses reach their full potential.
            </p>
            <div className='flex my-24 text-2xl text-center overflow-y-scroll py-8 hide-scrollbar gap-3'>
                <div onClick={() => handleSelection(0)} className={`py-12 min-w-[200px] md:w-[33%] font-semibold border-2 ${selected === 0 ? 'border-green-500' : 'border-white'} shadow-xl cursor-pointer rounded-[2rem]`}>
                    Business Line of Credit
                </div>
                <div onClick={() => handleSelection(1)} className={`py-12 min-w-[200px] md:w-[33%] font-semibold border-2 ${selected === 1 ? 'border-green-500' : 'border-white'} shadow-xl cursor-pointer rounded-[2rem]`}>
                    Equipment Financing
                </div>
                <div onClick={() => handleSelection(2)} className={`py-12 min-w-[200px] md:w-[33%] font-semibold border-2 ${selected === 2 ? 'border-green-500' : 'border-white'} shadow-xl cursor-pointer rounded-[2rem]`}>
                    Merchant Services
                </div>
            </div>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-4 '>
                    <div className='bg-white py-6 h-fit px-12 rounded-3xl'>
                        <h1 className='text-3xl my-6 font-semibold'>{servicesData[selected].name}</h1>
                        <p className='text-lg leading-8 text-gray-500'>
                            {servicesData[selected].def}
                        </p>
                        <h2 className='text-2xl my-6 font-semibold'>
                            Benefits:
                        </h2>
                        {servicesData[selected].benefits.map((benefit, index) => (
                            <p key={index} className='flex my-2 font-semibold text-lg leading-8 text-gray-500'>
                                <span className='mr-4 text-green-500'><benefit.icon /></span>
                                {benefit.text}
                            </p>
                        ))}
                        <div className='mt-12'>
                            <HeroButton text="APPLY NOW"/>
                        </div>
                    </div>
                    
                    <div className='bg-white rounded-3xl overflow-hidden relative'>
                        <img 
                            src={servicesData[selected].img} 
                            alt="service image" 
                            className="h-full  object-cover"
                        />
                    </div>
             </div>

        </div>
    );
}

export default SecondPage;
