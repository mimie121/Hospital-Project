import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();
  const [showFilter, setShowFilter] = useState(false);

  
  const applyFilter = () => {
    if (speciality) {
      const filtered = doctors.filter(doc => 
        doc.speciality.toLowerCase() === speciality.toLowerCase()
      );
      setFilterDoc(filtered);
      console.log(`Filtering for: ${speciality}`, filtered); // Debugging
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div onClick={() => scrollTo(0, 0)}>
      <p className='text-gray-600 mt-3'>Browse through the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-4 mt-10'>

        
        <button 
          className={`mb-5 py-1 px-3 border rounded text-sm transition-all md:hidden 
          ${showFilter ? 'bg-Ccolor text-white' : ''}`} 
          onClick={() => setShowFilter(prev => !prev)}
        >
          Filters
        </button>

        
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          {[
            "Gynecologist",
            "Dermatologist",
            "Pediatricians",
            "Neurologist",
            "Gastroenterologist",
            "General physician"
          ].map((spec, index) => (
            <p 
              key={index}
              onClick={() => speciality === spec ? navigate('/doctors') : navigate(`/doctors/${spec}`)}  
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer mr-5 mb-3 
              ${speciality === spec ? "bg-Ccolor text-black" : "" }`}
            >
              {spec}
            </p>
          ))}
        </div>

   
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {filterDoc.length > 0 ? (
            filterDoc.map((item, i) => (
              <div 
                key={i}
                onClick={() => navigate(`/appointment/${item._id}`)} 
                className='border border-red-400 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
              >
                <img className='bg-red-100 w-full' src={item.image} alt={item.name} />
                <div className='p-4'>
                  <div className='flex items-center gap-2 text-sm text-green-500'>
                    <p className='w-2 h-2 bg-green-500 rounded-full'></p> 
                    <p>Available</p>
                  </div>
                  <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                  <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-900">No Doctor Available for this speciality.</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default Doctors;
