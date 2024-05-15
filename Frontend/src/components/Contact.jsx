import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
<>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex-row  md:flex-row my-10'>
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
      </div>
      <div>
      <div className='flex items-center justify-center'>
        <div  className="w-[600px]">
      <div className="modal-box dark:bg-slate-600 dark:text-white">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
       
        <h3 className="font-bold text-lg">Contact</h3>
        <div className='mt-4 space-y-2'>
            <span>
                Name
            </span>
            <br/>
            <input type="text" placeholder='Enter Your Name' className='w-80 px-3 py-1 border rounded-md outline-none' 
            {...register("name", { required: true })}></input>
            <br/>
            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
        
        </div>
        <div className='mt-4 space-y-2'>
            <span>
                Email
            </span>
            <br/>
            <input type="email" placeholder='Enter Your Email' className='w-80 px-3 py-1 border rounded-md outline-none'
            {...register("email", { required: true })}></input>
            <br/>
{errors.email && <span className='text-sm text-red-500'>This field is required</span>}
       
        </div>
        <div className='mt-4 space-y-2'>
            <span>
                Message
            </span>
            <br/>
            <input type="text"  placeholder='Enter Your Message' className='w-80 px-3 py-1 border rounded-md outline-none'{...register("message", { required: true })} ></input>
            <br/>
            {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
        </div>
        <div className='flex justify-around mt-4'>
            <button className='bg-pink-500 text-white rounded-md px-2 py-1 hover:bg-pink-700 duration-200' >Signup</button>
        </div>
        </form>
        </div>
    </div>
        </div>
        </div>
      </>
  )
}

export default Contact