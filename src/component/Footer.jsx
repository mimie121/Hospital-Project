
import { assets } from '../assets/assets'


const Footer = () => {
    
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img  className='w-15 h-32 cursor-pointer '  src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Officia inventore voluptatem  nemo,  dignissimos <br /> saepe delectus? Accusantium.</p>
            </div>

            <div>
                <p className='mt-16 font-medium mb-5'>COMPANY</p>
                <ul className='cursor-pointer flex flex-col gap-2 text-gray-600'>
                    <li >Home</li>
                    <li >About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='mt-16 font-medium mb-5'>GET IN TOUCH</p>
                <ul className=' flex flex-col gap-2 text-gray-600'>
                    <li>+123 456 7890</li>
                    <li>talk2mimie@gmail.com</li>
                </ul>
            </div>
        </div>
       
       <div>
             <hr />
             <p className='py-5 text-sm text-center'>Copyright 2025 @ MimiWorld - All right reserved</p>
       </div>
    </div>
  )
}

export default Footer