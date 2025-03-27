import React, { useState } from 'react'
import {assets} from '../assets/assets'
// import { id } from 'date-fns/locale'

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name:"Michael  Jordan",
    image: assets.profile_pic,
    email: 'talk2mimie.reply@gmail.com',
    phone: '+1 234 567 890',
    address:{
      line1: '84th Cross, Vicente',
      line2: 'Crescent, Church Road, London'
    },
    gender:'Male',
    dob:'03-20-1998'
  })

  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm mt-3'>
        <img className='w-36 rounded' src={userData.image} alt="" />

        {
          isEdit
          ? <input className=' w-56 text-3xl font-medium max-60 mt-4 bg-gray-200' type='text' value={userData.name} onChange={ e => setUserData(prev =>({...prev, name:e.target.value}))}/>
          : <p className='font-medium text-3xl text-neutral-800 mt-4 '>{userData.name}</p>
        }

        <hr className=' bg-zinc-400 h-[1px] border-none' />

        <div>
          <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
          <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
            <p className='font-medium'>Email id:</p>
            <p className='text-blue-500'>{userData.email}</p>
            <p className='font-medium'>Phone:</p>

            {
          isEdit
          ? <input className=' bg-gray-200 max-w-52' type='text' value={userData.phone} onChange={ e => setUserData(prev =>({...prev, phone:e.target.value}))}/>
          : <p className='text-blue-400'>{userData.phone}</p>
        }
          <p className='font-medium'>Address:</p> 
          {
            isEdit
            ? <p>
              <input className='bg-gray-200 ' type="text" onChange={(e) => setUserData(prev =>({...prev, address: {...prev.address, line1: e.target.value}}))} value={userData.address.line1}/>
              <input className='bg-gray-200' onChange={(e) => setUserData(prev =>({...prev, address: {...prev.address, line2: e.target.value}}))} value={userData.address.line2} type="text" />
            </p>
            : <p className='text-gray-500'>
              {userData.address.line1} <br />
              {userData.address.line2}
            </p>
          } 

          </div>
        </div>
        <div>
          <p  className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
          <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
            <p className='font-medium'>Gender:</p>

            {
          isEdit
          ? <select className='max-w-20 bg-gray-200'  onChange={(e) => setUserData(prev => ({...prev, gender: e.target.value }))} >
            <option value="Male"> Male </option>
            <option value="Female"> Female </option>
          </select>
          : <p>{userData.gender}</p>
        } 
            <p className='font-medium'>Birthday:  </p>
               
              {
                   isEdit
                   ? <input className='max-w-28 bg-gray-200'  onChange={(e) => setUserData(prev => ({...prev, dob: e.target.value }))} type='date' value={userData.dob} />
                   : <p className='text-gray-400'>{userData.dob}</p>
              }
            
           

          </div>
        </div>
                  <div className='mt-10 '>
                    {
                      isEdit 
                      ? <button className='border border-blue-500 px-8 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-all' onClick={()=> setIsEdit(false)}>Save information</button>
                      : <button className='border border-blue-500 px-8 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-all' onClick={()=> setIsEdit(true)}>Edit </button>
                    }
                  </div>
    </div>
  )
}

export default MyProfile