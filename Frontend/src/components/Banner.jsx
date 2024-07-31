import React from 'react'
import banner from '../../public/banner.png';


const Banner = () => {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 '>
        <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32'>
        <div className='space-y-12'>
            <h1 className='text-4xl font-bold'>
                Hello, welcome here to learn something {" "}
                <span className='text-pink-500'>new everyday!!!</span>
            </h1>
            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maxime in minima magni alias odio sunt nostrum! Saepe dolorem rerum, sequi voluptatem, tenetur ex reiciendis deserunt praesentium ea temporibus animi!
            </p>
            <label className="input input-bordered flex items-center gap-2">
  Email
  <input type="text" className="grow" placeholder="daisy@site.com" />
</label>

        </div>
        
<button className="btn mt-6 btn-secondary">Get Started</button>
        
        </div>
        <div className='order-1 w-full md:w-1/2 '>
        <img src={banner} alt="Banner" className='w-92 h-92'  />
        </div>
      </div>
    </>
  )
}

export default Banner
