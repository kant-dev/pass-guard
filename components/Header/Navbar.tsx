import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <>
      <nav className='hidden lg:flex lg:space-x-6 lg:items-center'>
        <Link href={'/'} className='text-xl font-bold'>Home</Link>
        <Link href={'/store'} className='text-xl font-bold'>Passoword Store</Link>
      </nav>
    </>
  )
}
