import React, { useState, useEffect } from 'react';
// import { Link } from "@mui/material";
import { Link } from "react-router-dom";

const Category = () => {

  const [category, setCategory] = useState([])

  useEffect(() => {
    const getCategory = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/api/category/`)
        const data = await res.json()
        setCategory(data)
        // console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    getCategory();
  }, [])

  return (
    <>
      <div className='flex flex-row overflow-auto py-3 no-scrollbar lg:justify-center'>
        {category.map(option => {
          return (
            <Link to={`/category/${option.id}`}>
              <div className='flex flex-col text-center px-3'>
                <div className='flex bg-no-repeat bg-cover h-[60px] w-[60px] rounded-full cursor-pointer md:min-h-[65px] md:min-w-[65px]' style={{ backgroundImage: `url(${option.image})` }}></div>
                <div className='text-sm mt-1'>{option.name}</div>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default Category

  // <div div className = 'flex bg-no-repeat bg-cover h-[60px] w-[60px] rounded-full md:h-[75px] md:w-[75px]' style = {{ backgroundImage: `url(${option.image})` }}></div >
