import { KeyIcon, PinIcon, ShieldCheckIcon } from 'lucide-react'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

const contentCardsHero = [
  {
    icon: <ShieldCheckIcon size={30} />,
    title: 'Secure',
    description: 'Your passwords are encrypted and stored on your device.',
  },
  {
    icon: <KeyIcon size={30} />,
    title: 'Generate',
    description: 'Create strong, unique passwords with our advanced generator.',
  },
  {
    icon: <PinIcon size={30} />,
    title: 'Manage',
    description: 'Easily store, organize and retrive your passwords when needed.',
  }
]

export default function CardsHero() {
  return (
    <>
      <div className='w-full'>
        <div className="container py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-0">
          {
            contentCardsHero.map((card, index) => (
              <Card key={index} className='rounded-sm py-4 m-2'>
                <CardContent>
                  <div className='flex items-center space-x-2 mb-2'>
                    <div>{card.icon}</div>
                    <CardTitle className='text-2xl'>{card.title}</CardTitle>
                  </div>
                  <CardDescription className='text-lg'>{card.description}</CardDescription>
                </CardContent>
              </Card>
            ))
          }
        </div>
      </div>
    </>
  )
}
