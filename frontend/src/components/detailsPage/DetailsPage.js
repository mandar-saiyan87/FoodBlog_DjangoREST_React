import React, { useState, useEffect } from 'react'
import Category from '../category/Category'
import { useParams } from 'react-router-dom';
import StaticImages from "../../constants/images";

const DetailsPage = () => {

  const [postDetails, setPostDetails] = useState([])
  const [itemIngredients, setItemIngredients] = useState('')
  const { slug } = useParams()

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/api/blogs/${slug}`)
        const data = await res.json()
        setPostDetails(data)
        setItemIngredients(data.ingredients)
        // console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    getPost();
  }, [slug])

  return (
    <>
      <div className='w-screen max-w-1440px px-5 item-center text-center md:px-10 lg:px-16 xl:max-2xl:px-20'>
        <Category />
        <div className='my-8 text-4xl'>{postDetails.title}</div>
        <div className='mb-8 text-base text-slate-500'>{postDetails.excerpt}</div>
        <div className='my-3'>
          <p className='my-3'>{postDetails.content}</p>
          <div className='flex justify-center'>
            <img className='sm:max-w-[300px] md:max-w-[350px] lg:max-w-[450px]' src={`${postDetails.image}`} alt="" />
          </div>

          <div className='flex justify-start flex-col text-start my-3'>
            {/* <div className='my-3 text-2xl'>Ingredients</div> */}
            {itemIngredients.split(',').map(ingredient => {
              return (
                <>
                  <div className='flex my-2'>
                    <div>
                      <img src={StaticImages.chevronright} alt="" className='w-4 mr-2' />
                    </div>
                    <div className='flex text-xs sm:text-base'>
                      {ingredient}
                    </div>
                  </div>
                </>
              )
            })}
          </div>
          <div className='my-8'>{postDetails.contentTwo}</div>
        </div>
      </div>
    </>

  )
}

export default DetailsPage

//   < List >
// {
//   itemIngredients.split(',').map(ingredient => {
//     return (
//       <ListItemButton>
//         <ListItemIcon>
//           <DoubleArrowIcon />
//         </ListItemIcon>
//         <ListItemText primary={ingredient} />
//       </ListItemButton>
//     )
//   })
// }
//             </ List>
