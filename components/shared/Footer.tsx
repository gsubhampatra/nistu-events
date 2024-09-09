import React from 'react'

const Footer = () => {
  return (
    <footer className='w-screen flex md:flex-row flex-col  items-center justify-center md:space-x-2  border-t-2 p-1 ' >
            <img
             src="https://www.nist.edu/images/nist.png"
              alt="nist"
              className="md:h-10 h-7"
               />
            <p className='text-sm'>NISTU Events .© 2024 all rights are reserved  </p>
       
    </footer >
  )
}

export default Footer