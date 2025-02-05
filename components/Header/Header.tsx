import { ShieldIcon } from 'lucide-react'
import React from 'react'
import Navbar from './Navbar'
import Sidebar from '../Toggle/Sidebar'

export default function Header() {
  return (
    <>
      <header className='w-full flex justify-center bg-gray-800 text-white'>
        <div className="container flex items-center justify-between px-4 lg:px-0 py-4">
          <h1 className='flex space-x-2 items-center'>
            <ShieldIcon />
            <span className='text-xl font-bold'>Pass Guard</span>
          </h1>
          <Navbar/>
          <Sidebar/>
        </div>
      </header>
    </>
  )
}
