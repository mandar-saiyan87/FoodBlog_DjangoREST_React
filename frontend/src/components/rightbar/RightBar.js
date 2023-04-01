import React from 'react';
import StaticImages from '../../constants/images';


const RightBar = () => {
  return (
    <>
      <div className='text-xl my-2'>HEY I'M SHAKIRA</div>
      <img className='w-full h-[300px]' src={`${StaticImages.chef}`} alt="burger1" />
      <div className='text-left'>I love to sing and cook! My best time spent around the Table.<br />Don't forget to subscribe FoodieCoder!
      </div>
      <div className='text-left'>
        <a href="#" className='text-blue-900 underline'>Read More</a>
      </div>
      <div className='h-[250px] shadow-md rounded my-3 text-sm'>Ads Here</div>
      <div className='my-4 bg-red-500 text-white font-semibold'>Subscribe via Email</div>
      <div className='flex justify-center mt-2'>
        <input type="text" placeholder='Your email here!' className='border border-r-0 border-l-0 border-t-0 border-b-red-500 focus:outline-none text-center mr-3' />
        <img src={ StaticImages.sendico} alt="" className='w-6 cursor-pointer'/>
      </div>

    </>
  )
}

export default RightBar
