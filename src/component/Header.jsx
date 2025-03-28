
import { assets } from '../assets/assets'

const Header = () => {
  const scrollToSpeciality = () => {
    const section = document.getElementById("speciality");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-Ccolor rounded-lg px-6 md:px-10 lg:px-20 mt-5'>
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10  md:py-[10vw] md:mb-[-30px]'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold'>
          Book Appointment <br />
          With Trusted Doctors.
        </p>

        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-thin'>
          <img className='w-28' src={assets.group_profiles} alt="group_profiles" />
          <p>Simply browse through our extensive list of trusted Doctors, <br className='hidden sm:block'/>
            schedule your appointment hassle-free.
          </p>
        </div>

        
        <button 
          onClick={scrollToSpeciality}
          className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 cursor-pointer'
        >
          Book appointment 
          <img className='w-3' src={assets.arrow_icon} alt="arrow_icon" />
        </button>
      </div>

      <div className='md:w-1/2 relative'>
        <img className='w-100 md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="header_img" />
      </div>
    </div>
  );
}

export default Header;
