import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full h-16 backdrop-filter backdrop-blur-xl  border-b flex items-center justify-center bg-primary">
      <div className="max-w-7xl w-full flex item-center justify-between p-4">
        <h6 className="font-bold text-backgroundputih">Books Store</h6>
        <ul className="flex gap-8">
          <li><a className="text-backgroundputih hover:text-fuchsia-500 transition-colors text-xs sm:text-base" rel="stylesheet" href="/home" > BookStore </a></li>
          <li><a className="text-backgroundputih hover:text-fuchsia-500 transition-colors text-xs sm:text-base" rel="stylesheet" href="#home" > Link </a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
