import React from 'react';
import Posts from '../posts/Posts';
import RightBar from '../rightbar/RightBar';
import Hero from "../hero/Hero";

const Main = () => {
  return (
    <>
      <Hero />
      <div className='flex justify-center my-8'>
        <div className='flex flex-row w-screen max-w-[1440px] md:px-10 lg:px-16 xl:max-2xl:px-20 space-x-6'>
          <div className='px-3 md:basis-3/5 w-full text-center'>
            <Posts />
          </div>
          <div className='hidden md:block w-full basis-2/5 text-center'>
            <RightBar />
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
