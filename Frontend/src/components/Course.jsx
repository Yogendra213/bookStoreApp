import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from "axios"
import {Link} from "react-router-dom"
function Course() {
    const [book,setBook]=useState([])
    useEffect(()=>{
          const getBook=async()=>{
            try{
          const res= await axios.get("http://localhost:4001/book");
          console.log(res.data)
          setBook(res.data)
            }
            catch(error){
               console.log(error);
            }
          }
          getBook();
    },[])
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4   flex-row   md:flex-row '>
            <div className='mt-20 items-center justify-center text-center'>
                <h1 className='text-2xl  md:text-4xl'> We are Delighted to have you <span className='text-pink-500'>here :)</span>
                </h1>
                 <p className='mt-12'>
                 Adjust these width classes according to 
                 your design requirements. This should make the card size responsive and adjust according to different screen sizes.</p>
                 <Link to="/">
                 <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg'>Back</button>
                 </Link>
                 </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                {
                    book.map((item)=>(
                        <Cards key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Course