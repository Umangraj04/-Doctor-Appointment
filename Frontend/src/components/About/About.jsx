import React from 'react'
import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section>
        <div className='container'>
            <div className='flex justify-between gap-[50px] lg:gap-0 flex-col lg:flex-row'>
              
         {/* ========= about img ================== */}
         <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
            <img src={aboutImg} alt=''/>
            <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>
                <img src={aboutCardImg} alt=''/>
            </div> 
         </div>

         {/* =========== about content ========== */}
             <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
             <h2 className='heading'>Proud to be one of the nations best</h2>
             <p className='text__para'> for 30 Years in a row, U.S News & World Report has recognized us as one of the best publics hospitals in the Nation and #1 in Texas. Lorem ispumd dolor sit aamet, consectectur adipisicing elit.Aliquid,modi?</p>
              <p className='text__para mt-[30px]'>Our best is something we strive for each day,caring for our patient
               -not looking back at what we accomplished but towards what we can do tomorrow. providing the best.Lorem ispumd dolor sit aamet, consectectur adipisicing elit.Aliquid,modi? 
              </p>
              <Link to="/">
                <button className='btn'>Learn More</button>
              </Link>
              </div>
            </div>
        </div>
    </section>
  )
}

export default About
