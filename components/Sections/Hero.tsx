import React from 'react'
import CardsHero from '../Cards/CardsHero'

export default function Hero() {
  return (
    <>
      <section className='w-full flex justify-center' >
        <div className="container py-8 ">
          <h1 className='text-center font-bold text-4xl'>Welcome to Passguard</h1>
          <p className='text-center text-lg text-gray-600 tracking-widest'>Your secure password management solution</p>
          <CardsHero/>
        </div>
      </section>
    </>
  )
}
