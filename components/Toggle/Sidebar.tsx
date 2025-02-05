import React from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { MenuIcon, ShieldIcon } from 'lucide-react'
import Link from 'next/link'
import { Separator } from '../ui/separator'

export default function Sidebar() {
  return (
    <>
      <div className='lg:hidden'>
        <Sheet>
          <SheetTrigger>
            <MenuIcon size={30}/>
          </SheetTrigger>
          <SheetContent className='bg-gray-800 border-none text-white'>
            <SheetHeader>
              <SheetTitle className='flex items-center space-x-2 text-white'><ShieldIcon/> <span>Pass Guard</span></SheetTitle>
            </SheetHeader>
            <Separator className='my-4'/>
            <div className='space-y-4 flex flex-col'>
              <Link href={'/'} className='text-lg font-bold'>Home</Link>
              <Link href={'/store'} className='text-lg font-bold'>Passeword Store</Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}
