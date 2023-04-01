import React, { useEffect, useState } from 'react';
import Card from './Card';
import Pagination from '@mui/material/Pagination';


const Posts = () => {

  const [blog, setBlog] = useState([])
  const [popular, setPopular] = useState([])

  useEffect(() => {
    const getBlogs = async () => {
      try {
        // const res = await fetch(`${process.env.REACT_APP_API_URL}/api/blogs/`)
        const res = await fetch(`${process.env.REACT_APP_API_URL}/api/latestBlogs/`)
        const data = await res.json()
        setBlog(data)
        // console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    getBlogs();
  }, [])

  useEffect(() => {
    const getPopular = async () => {
      try {
        const res_popular = await fetch(`${process.env.REACT_APP_API_URL}/api/popularBlogs/`)
        const data_popular = await res_popular.json()
        setPopular(data_popular)
        // console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    getPopular();
  }, [])
  
  return (
    <>
      <div className=''>
        <div className='text-2xl mb-3'>Latest Recipes</div>
        {blog.map(post => {
          return (
            <Card responsive={true} title={post.title} excerpt={post.excerpt} image={`${process.env.REACT_APP_API_URL}${post.image}`} blogHref={`/details/${post.slug}`} /> 
          )
        })}
        <div className='bg-black text-white my-3 text-2xl'>MOST POPULAR</div>
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 md:gap-4 mt-4">
          {popular.map(poppost => {
            return (
              <Card mostpopular={true} title={poppost.title} excerpt={poppost.excerpt} image={`${process.env.REACT_APP_API_URL}${poppost.image}`} blogHref={`/details/${poppost.slug}`} />
            )
          })}

          {/* <Card mostpopular={true} />
          <Card mostpopular={true} /> */}
        </div>
        <div className='flex place-content-center mb-6'>
          <Pagination count={10} color={'warning'} />
        </div>
      </div>
    </>
  )
}

export default Posts;
