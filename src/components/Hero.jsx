import React from 'react'

const Hero = () => {
  return (
    <>
    <section id='hero' className='noisy'>
         <h1 className='title'>Crystal Shaker</h1>

         <img 
         src='/images/hero-left-left.png'
         alt='left-leaf'
         className='left-leaf'/>

         <img 
         src='/images/hero-right-left.png'
         alt='right-leaf'
         className='right-leaf'/>
    </section>
    </>
  )
}

export default Hero