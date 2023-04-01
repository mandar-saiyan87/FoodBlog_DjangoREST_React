import React from 'react'

const Footer = () => {

  const MenuTabs = [
    { name: 'Home', link: '#' },
    { name: 'Recipes', link: '#' },
    { name: 'About Us', link: '#' },
    { name: 'Subscribe', link: '#' }
  ]

  return (
    <>
      <div className='sticky top-[100vh] bg-red-500 h-32 px-5 md:px-10 lg:px-16 xl:max-2xl:px-20 text-white font-bold text-center text-sm md:text-base'>
        <div className='flex w-full justify-center my-5 md:flex-row md:justify-between'>
          <div className='hidden md:flex flex-row'>
            {MenuTabs.map(tab => {
              return (
                <div className='cursor-pointer mx-5'>
                  {tab.name}
                </div>
              )
            })}
          </div>
          <div>@2022 FoodieCoder. Enjoy Food while coding.</div>
        </div>
        <div className='text-3xl font-semibold mt-5'>Never Stop Learning</div>
      </div>
    </>
  )
}

export default Footer
