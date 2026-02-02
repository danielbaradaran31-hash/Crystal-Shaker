import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div>
            <a href='#home' className='flex items-center gap-2'>
                <p>Crystal Shaker</p>
            </a>

            <ul>
                {[{ title: 'About Us', id: '#about' },]}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar