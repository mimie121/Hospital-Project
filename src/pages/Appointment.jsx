
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import RelatedDoctor from '../component/RelatedDoctor';
import { format } from 'date-fns';

const Appointment = () => {
  const { docId } = useParams()
  const { doctors, currencySymbol } = useContext(AppContext)
  const [docInfo, setDocInfo] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [bookingConfirmed, setBookingConfirmed] = useState(false)

  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"]

  useEffect(() => {
    const fetchDocInfo = () => {
      const doc = doctors.find(doc => doc._id === docId)
      setDocInfo(doc)
    }
    fetchDocInfo()
  }, [doctors, docId])

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      setBookingConfirmed(true)
    } else {
      alert('Please select both Date and Time for your appointment.')
    }
  }

  return (
    <div>
      {docInfo ? (
        <div className='flex flex-col sm:flex-row gap-4 mt-5'>
          <div>
            <img className='bg-Ccolor w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt={docInfo.name || "Doctor"} />
          </div>

          <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
            <span className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
              <h1>{docInfo.name}</h1>
              <img className='w-5' src={assets.verified_icon} alt="" />
            </span>
            <p>{docInfo.speciality}</p>
            <div className='flex gap-2 items-center text-gray-600'>
              <p className='gap-2 text-sm mt-1'>{docInfo.degree} - {docInfo.speciality}</p>
              <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
            </div>

            <div>
              <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
                About <img src={assets.info_icon} alt="" />
              </p>
              <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
            </div>
            <p className='whitespace-nowrap text-gray-500 font-medium mt-4'>
              Appointment fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span>
            </p>

            <div className='mt-6'>
              <label className='text-gray-700 font-medium'>Select Date:  </label>
              <DatePicker 
                selected={selectedDate} 
                onChange={(date) => setSelectedDate(date)} 
                minDate={new Date()} 
                className='border rounded-lg p-2 mt-2 w-full'
                placeholderText="Choose a date"
              />
            </div>

            {selectedDate && (
              <div className='mt-6'>
                <label className='text-gray-700 font-medium'>Select Time:</label>
                <div className='grid grid-cols-3 gap-3 mt-2'>
                  {timeSlots.map((time, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedTime(time)}
                      className={`border rounded-lg py-2 ${selectedTime === time ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {selectedDate && selectedTime && (
              <div className='mt-6 text-sm font-medium text-gray-700'>
                <p>Selected Appointment:</p>
                <p>
                  Date: {format(selectedDate, 'MMMM d, yyyy')} at {selectedTime}
                </p>
              </div>
            )}

            <button 
              onClick={handleBooking}
              className='mt-6 bg-blue-500 text-white py-2 px-4 rounded-full  font-medium'
            >
              Book Appointment
            </button>

            {bookingConfirmed && (
              <p className='mt-4 text-green-600 font-medium'>
                Your appointment is booked for {format(selectedDate, 'MMMM d, yyyy')} at {selectedTime}.
              </p>
            )}
          </div>
        </div>
      ) : (
        <p>Loading doctor information...</p>
      )}
      {docInfo && <RelatedDoctor docId={docId} speciality={docInfo.speciality} />}
    </div>
  )
}

export default Appointment

