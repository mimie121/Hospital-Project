import React from 'react'
import { assets } from '../assets/assets'

const contact = () => {
  return (
    <div>
       <div className='text-center text-2xl pt-10 text-gray-500'>
       <p>CONTACT <span className='text-gray-800 font-medium'>US</span></p>
        </div> 
        
        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
           <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />

           <div className='flex flex-col justify-start items-start gap-6'>
            <p className='font-semibold text-lg text-gray-600'>Our OFFICE </p>
            <p className='text-gray-500'>5678 Kinglsy Station <br /> Suite 260, Texas, USA</p>
            <p className='text-gray-500'>Tel: +(123) 456 7890 <br /> Email: talk2mimie.reply@gmail.com</p>
            <p className='text-gray-600 font-semibold text-lg'>Careers at MIMIWORLD</p>
            <p className='text-gray-500'>Learn more about our teams and job openings.</p>
            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
           </div>
        </div>  
    </div>
  )
}

export default contact