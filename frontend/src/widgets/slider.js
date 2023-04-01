import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Slider = (props) => {


  const { isOpen, onClose, menuTabs, openModal } = props
  const sliderRef = useRef();


  const handleClickOutside = (event) => {
    if (sliderRef.current && !sliderRef.current.contains(event.target)) {
      onClose(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className={`${isOpen ? "-translate-x-0" : "translate-x-full"} fixed top-0 right-0 w-[64%] h-full bg-white z-20 transition-transform duration-300 ease-in-out`} ref={sliderRef}>
        {/* Menu items go here */}
        <div className='p-5'>
          {menuTabs.map(tab => {
            return (
              <Link to='/'>
                <div className='cursor-pointer text-sm mb-5 text-red-600'>
                  {tab.name}
                </div>
              </Link>
            )
          })}
          <div className='flex w-full py-2'>
            {/* <Search /> */}
            <input className='p-2 w-full border-red-600 rounded-md border-2' type="text" placeholder='Search' onClick={ openModal} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider
