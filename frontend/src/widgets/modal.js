import React, { useState, useEffect } from 'react';
import Card from "../components/posts/Card";
// import ModalCard from "../components/posts/modalCard"

const Modal = (props) => {

  const { isOpen, onClose } = props;

  const [postSearch, setPostSearch] = useState([]);
  const [searched, setSearched] = useState()

  function modalClose() {
    setSearched(null)
    onClose()
  }

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
      {isOpen && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-gray-500 opacity-75" onClick={modalClose}></div>
            <div className="bg-white rounded-lg py-8 px-4 z-50 min-w-[80%] md:min-w-[50%] max-w-[50%]">
              <input className='p-2 w-full border-red-600 rounded-md border-2' type="text" placeholder='Search' onChange={(e) => setSearched(e.target.value)} />
              <div className='my-2'>
                {postSearch.filter((result) => result.title.toLowerCase().includes(searched)).map((result) =>
                  searched.length > 0 ?
                    // console.log(result.slug)
                    <div onClick={modalClose}>
                      <Card key={result.title} responsive={true} title={result.title} excerpt={result.excerpt} image={result.image} blogHref={`/details/${result.slug}`} />
                    </div>

                    : ""
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal


// const modalRef = useRef();

// useEffect(() => {
//   function handleClickOutside(event) {
//     if (modalRef.current && !modalRef.current.contains(event.target)) {
//       onClose();
//     }
//   }

//   document.addEventListener('mousedown', handleClickOutside);
//   return () => {
//     document.removeEventListener('mousedown', handleClickOutside);
//   };
// }, [modalRef, onClose]);
