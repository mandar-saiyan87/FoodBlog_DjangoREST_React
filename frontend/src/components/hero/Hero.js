import React from 'react';
import StaticImages from '../../constants/images';
import Category from '../category/Category';


const Hero = () => {
  return (
    <>
      <div className='flex flex-col text-center py-3 md:flex-row justify-center'>
        <div className='text-large md:text-2xl'>Simple Recipe made for Coders!</div>
        <div className='text-xl font-splash text-red-600 md:text-3xl'> Real Recipes Real Coders</div>
      </div>
      <div className='flex justify-center'>
        <div className='w-screen max-w-[1440px] px-5 flex-auto md:px-14 lg:px-16 xl:max-2xl:px-20'>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <div className='flex justify-center bg-no-repeat bg-cover bg-center min-h-[170px] hover:opacity-80 box-border z-[1] transition-all ease-in cursor-pointer md:min-h-[255px] lg:min-h-[280px] xl:max-2xl:min-h-[340px]' style={{ backgroundImage: `url(${StaticImages.meat})` }}>
              <div className='w-[60%]'>
                <div className='flex bg-red-500 text-white justify-center text-[13px] font-semibold'>MEAT</div>
              </div>
            </div>
            <div className='flex justify-center bg-no-repeat bg-cover bg-center min-h-[170px] hover:opacity-80 box-border z-[1] transition-all ease-in cursor-pointer md:min-h-[255px] lg:min-h-[280px] xl:max-2xl:min-h-[340px]' style={{ backgroundImage: `url(${StaticImages.appetizer})` }}>
              <div className='w-[60%]'>
                <div className='flex bg-red-500 text-white justify-center text-[13px] font-semibold'>APPETIZER</div>
              </div>
            </div>
            <div className='flex justify-center bg-no-repeat bg-cover bg-center min-h-[170px] hover:opacity-80 box-border z-[1] transition-all ease-in cursor-pointer md:min-h-[255px] lg:min-h-[280px] xl:max-2xl:min-h-[340px]' style={{ backgroundImage: `url(${StaticImages.burger1})` }}>
              <div className='w-[60%]'>
                <div className='flex bg-red-500 text-white justify-center text-[13px] font-semibold'>BURGER</div>
              </div>
            </div>
            <div className='flex justify-center bg-no-repeat bg-cover bg-center min-h-[170px] hover:opacity-80 box-border z-[1] transition-all ease-in cursor-pointer md:min-h-[255px] lg:min-h-[280px] xl:max-2xl:min-h-[340px]' style={{ backgroundImage: `url(${StaticImages.drinks})` }}>
              <div className='w-[60%]'>
                <div className='flex bg-red-500 text-white justify-center text-[13px] font-semibold'>DRINKS</div>
              </div>
            </div>
          </div>
          <Category />
        </div>
      </div>
      
    </>
  )
}

export default Hero


  // < div className = ' max-w-[1440px] flex-auto px-6 sm:max-md:px-12 md:max-lg:px-16 lg:max-xl:px-20 xl:max-2xl:px-24' >
  //   <div class="grid grid-cols-2 gap-4 md:max-lg:grid-cols-2 lg:max-xl:grid-cols-4">
  //     <div className='flex relative bg-no-repeat bg-cover bg-center min-h-[170px] justify-center hover:opacity-80 box-border z-[1] transition-all ease-in cursor-pointer sm:max-lg:min-h-[330px] lg:max-xl:min-h-[290px] xl:max-2xl:min-h-[350px]' style={{ backgroundImage: `url(${meat})` }}>
  //       <div className='absolute pt-[90%] w-[60%] lg:max-xl:pt-[135%] xl:max-2xl:pt-[130%]'>
  //         <div className='flex bg-red-500 text-white justify-center text-[13px] font-semibold md:text-[18px]'>MEAT</div>
  //       </div>
  //     </div>
  //     <div className='flex relative bg-no-repeat bg-cover bg-center min-h-[170px] justify-center hover:opacity-80 box-border z-[1] transition-all ease-in cursor-pointer sm:min-h-[330px] lg:min-h-[290px]' style={{ backgroundImage: `url(${appetizer})` }}>
  //       <div className='absolute pt-[90%] w-[60%] lg:pt-[98%]'>
  //         <div className='flex bg-red-500 text-white justify-center text-[13px] font-semibold md:text-[18px]'>APPETIZER</div>
  //       </div>
  //     </div>
  //     <div className='flex relative bg-no-repeat bg-cover bg-center min-h-[170px] justify-center hover:opacity-80 box-border z-[1] transition-all ease-in cursor-pointer sm:min-h-[330px] lg:min-h-[290px]' style={{ backgroundImage: `url(${burger1})` }}>
  //       <div className='absolute pt-[90%] w-[60%] lg:pt-[98%]'>
  //         <div className='flex bg-red-500 text-white justify-center text-[13px] font-semibold md:text-[18px]'>BURGER</div>
  //       </div>
  //     </div>
  //     <div className='flex relative bg-no-repeat bg-cover bg-center min-h-[170px] justify-center hover:opacity-80 box-border z-[1] transition-all ease-in cursor-pointer sm:min-h-[330px] lg:min-h-[290px]' style={{ backgroundImage: `url(${drinks})` }}>
  //       <div className='absolute pt-[90%] w-[60%] lg:pt-[98%]'>
  //         <div className='flex bg-red-500 text-white justify-center text-[13px] font-semibold md:text-[18px]'>DRINKS</div>
  //       </div>
  //     </div>
  //   </div>
