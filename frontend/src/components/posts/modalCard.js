import React from 'react';
import { Link } from "react-router-dom";

const ModalCard = ({ responsive, mostpopular, title, excerpt, image, blogHref }) => {

  return (
    <>
      <Link>
        <div className={`block shadow-md rounded mb-7 hover:opacity-80 box-border z-[1] transition-all ease-in cursor-pointer md:max-w-[450px] ${responsive && 'lg:flex space-x-4 lg:max-w-max'}`}>
          <img className={`shadow-md rounded max-h-[250px] w-full ${mostpopular && 'max-h-[200px]'} ${responsive && 'lg:max-w-[250px] lg:h-[250px]'}`} src={image} alt="burger1" />
          <div>
            <div className='text-2xl my-3 text-black'>{title}</div>
            <div className={`text-left text-slate-600 text-base ${mostpopular && 'px-4'}`} >
              {excerpt}
            </div>
            <div className={`flex flex-row ${mostpopular && 'ml-4'}`}>
              <div className='m-4 text-sm text-red-500 font-bold'>SHARE</div>
              <div className='m-4 text-sm text-red-500 font-bold'>LEARN MORE</div>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default ModalCard;


// <div className={`block shadow-md rounded mb-7 hover:opacity-80 box-border z-[1] transition-all ease-in cursor-pointer lg:flex space-x-4`}>
//   <img className='shadow-md rounded lg:max-w-[250px]' src={`${StaticImages.burger1}`} alt="burger1" srcset="" />
//   <div>
//     <div className='text-2xl my-3'>Yummy Burger</div>
//     <div className='text-left text-slate-600 text-lg'>
//       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia ullam voluptatum esse iusto animi! Quod quisquam maiores esse est temporibus?
//     </div>
//     <div className='flex flex-row'>
//       <div className='m-4 text-sm text-red-500 font-bold'>SHARE</div>
//       <div className='m-4 text-sm text-red-500 font-bold'>LEARN MORE</div>
//     </div>
//   </div>
// </div>

//* <img className={`shadow-md rounded max-h-[250px] w-full ${responsive && 'lg:max-w-[250px] lg:h-[250px]'}`} src={image} alt="burger1" srcset="" /> */ }
