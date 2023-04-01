import React, { useState } from 'react';
import StaticImages from '../../constants/images';
// import { Link } from "@mui/material";
import Slider from "../../widgets/slider";
import Modal from "../../widgets/modal";
import { Link } from 'react-router-dom';



const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const MenuTabs = [
    { name: 'Home', link: 'http://localhost:3000/' },
    { name: 'Recipes', link: '#' },
    { name: 'About Us', link: '#' },
    { name: 'Subscribe', link: '#' }
  ]

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true)
  const handleClose = () => setModalOpen(false)


  return (
    <>
      <div className='flex fixed top-0 z-50 h-14 bg-slate-100 px-5 py-2 justify-between w-full md:p-3 flex-row items-center'>
        <div className='flex text-red-600 text-2xl font-splash font-[550] md:text-3xl'>FoodieCoder</div>
        <div className='hidden md:flex flex-row ml-20'>
          {MenuTabs.map(tab => {
            return (
              <Link to="/">
                <div className='cursor-pointer mx-5'>
                {tab.name}
                </div>
              </Link>
            )
          })}
        </div>
        <div className='hidden md:flex w-72 flex-col'>
          {/* <Search /> */}
          <input className='p-2 w-full border-red-600 rounded-md border-2' type="text" placeholder='Search' onClick={handleOpen} />
        </div>

        <div className='flex md:hidden'>
          <img src={StaticImages.menu} alt="" className='w-6 cursor-pointer' onClick={() => setIsOpen(true)} />
          <Slider isOpen={isOpen} onClose={setIsOpen} menuTabs={MenuTabs} openModal={handleOpen} />
        </div>
        { /* Hamburger menu here*/}
      </div>
      <Modal isOpen={modalOpen} onClose={handleClose} />
    </>
  )
}

export default Navbar

//   < Drawer
// anchor = { 'top'}
// open = { isOpen }
// onClose = {() => setIsOpen(!isOpen)}
// className = 'md:hidden'
//   >
//           <div className='flex flex-row justify-evenly py-3 md:hidden'>
//             {MenuTabs.map(tab => {
//               return (
//                 <div className='cursor-pointer text-sm'>
//                   {tab.name}
//                 </div>
//               )
//             })}
//           </div>
//           <div className='flex w-full px-12 py-2'>
//             <input className='p-2 w-full border-red-600 rounded-md border-2' type="text" placeholder='Search' />
//           </div>
//         </ Drawer>

  
