import React, { useEffect, useState } from 'react';
import Card from '../posts/Card';
// import Pagination from '@mui/material/Pagination';
import { useParams } from 'react-router-dom';


const CategoryPosts = () => {
  const {id} = useParams()
  const [blog, setBlog] = useState([])

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/api/categoryBasedBlogs/${id}`)
        const data = await res.json()
        setBlog(data)
        // console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    getBlogs();
  }, [id])


  return (
    <>
      <div className='flex justify-center'>
        <div className='w-screen max-w-[1440px] flex flex-col'>
          <div className='text-2xl my-4 self-center'>Categories Page</div>
          <div className='min-w-[70%] max-w-[70%] self-center'>
          {blog.map(post => {
            return (
              <Card responsive={true} title={post.title} excerpt={post.excerpt} image={`${process.env.REACT_APP_API_URL}${post.image}`} blogHref={`/details/${post.slug}`} />
            )
          })}
          </div>
          {/* <div className='flex place-content-center mb-6'>
            <Pagination count={10} color={'warning'} />
          </div> */}
        </div>
      </div>
    </>
  )
}

export default CategoryPosts;
