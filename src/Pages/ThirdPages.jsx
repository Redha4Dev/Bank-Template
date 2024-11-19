import React from 'react';

function ThirdPages() {
  return (
    <div className="w-full h-fit px-16  py-24">
      <div className="bg-white rounded-3xl shadow-2xl text-black font-IBM p-12 grid lg:grid-cols-7 grid-cols-1 gap-4">
        <div className='col-span-4'>
            <h1 className="font-semibold w-full my-6 text-[2.25rem] md:text-[3rem] leading-relaxed">
              Empower Your Business with Our Cutting-Edge <span className="underline text-green-400">Features</span>
            </h1>
            <div className="w-full my-6 bg-[#EFEFEF] p-4 rounded-3xl grid md:grid-cols-3 grid-cols-1 gap-4">
              <div className="col-span-2">
                <h1 className="font-semibold text-2xl mx-2 my-4"> 
                  Expert Advice and Support
                </h1>
                <p className="text-gray-500 text-[1.25rem] leading-relaxed my-8 px-2 "> 
                  Our dedicated team is here to help you every step of the way, with expert guidance and tailored advice.
                </p>
              </div>
              <div>
                <img
                  src="src/assets/Man_received_a_certificate_Illustration-removebg-preview.png"
                  className="h-full bg-cover"
                  alt="Man receiving a certificate illustration"
                />
              </div>
            </div>
            <div className='w-full my-6 grid gap-3 grid-cols-8'>
                <div className='p-4 rounded-3xl border-gray-[#efefef] col-span-8 md:col-span-5 border-2 '>
                    <h1 className="font-semibold text-2xl mx-2 my-4"> 
                      Wild Range of Loan Products
                    </h1>
                    <p className="text-gray-500 text-[1.25rem] leading-relaxed my-8 px-2 "> 
                      Choose from a variety of loan options, including short-terms working capital and long-term invinsement
                    </p>
                </div>
                <div className='p-4 rounded-3xl flex flex-row md:flex-col  col-span-8  md:col-span-3 bg-[#12121b]'>
                    <h1 className="font-semibold text-white text-[1.5rem] leading-relaxed mx-2 my-4"> 
                      Privacy and <span className='text-green-400'>security</span>
                    </h1>
                    <div className='realative mx-auto button w-full my-6'>
                        <img src="src/assets/3d_Green_Shielded_With_Checklist_Icon__3d__Shield__Checklist_PNG_Transparent_Clipart_Image_and_PSD_File_for_Free_Download-removebg-preview.png"
                         className='max-h-52 green-shadow mx-auto object-cover' alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className='col-span-3'>
            <div className='w-full my-6 h-fit'>
                <div className='w-full p-8 rounded-3xl border-[#EFEFEF] border-2'>
                    <img className='max-h-44 mx-auto' src="src/assets/Man_HR_is_looking_for_an_online_resume_of_employees_Illustration-removebg-preview.png" alt="" />
                    <h1 className="font-semibold text-2xl mx-2 my-4"> 
                      Quick approval Process
                    </h1>
                    <p className="text-gray-500 text-[1.25rem] leading-relaxed my-8 px-2 "> 
                      Get pre-approved for your business load in as little 24 hours
                    </p>
                </div>
            </div> 
            <div className='w-full my-6 h-fit'>
                <div className='w-full p-8 rounded-3xl border-[#EFEFEF] grid md:grid-cols-2 grid-cols-1  border-2'>
                    <div>
                        <h1 className="font-semibold text-2xl mx-2 my-4"> 
                          Flexible Repayment options
                        </h1>
                        <p className="text-gray-500 text-[1.25rem] leading-relaxed my-8 px-2 "> 
                          Choose repayment options that fit your budget, with flexible and affordable options to choose from.
                        </p>
                    </div>
                    <img className='h-full mx-auto' src="src/assets/Man_is_filming_a_vlog_on_camera_Illustration-removebg-preview.png" alt="" />
                </div>
            </div> 
        </div>

      </div>
    </div>
  );
}

export default ThirdPages;
