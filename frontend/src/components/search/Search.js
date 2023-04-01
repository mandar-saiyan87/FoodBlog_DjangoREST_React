import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
import Card from "../posts/Card";



const Search = () => {

  
  const [postSearch, setPostSearch] = useState([]);
  const [searched, setSearched] = useState()


  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/api/blogs/`)
        const data = await res.json()
        setPostSearch(data)
      } catch (error) {
        console.log(error)
      }
    }
    getBlogs();
  }, [])

  return (
    <>
       <div>
      <input className='p-2 w-full border-red-600 rounded-md border-2' type="text" placeholder='Search' onClick={() => {}} />
        { /* Modal Here */}
        
      </div>

    </>

  )
}

export default Search


  // < div className = 'absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[50%] border-2 border-[#000] border-solid bg-white p-4 min-h-[600px] max-h-[600px] overflow-auto' >
  //         <input className='p-2 w-full border-red-600 rounded-md border-2' type="text" placeholder='Search' onChange={(e) => setSearched(e.target.value)} />
  //         <div className='my-2'>
  //           {postSearch.filter((result) => result.title.toLowerCase().includes(searched)).map((result) => searched.length > 0 ?
  //             (
  //               <Card key={result.title} responsive={true} title={result.title} excerpt={result.excerpt} image={result.image} blogHref={`/details/${result.slug}`} />

  //             ) : ""
  //           )}
  //         </div>
  //   </ div>


