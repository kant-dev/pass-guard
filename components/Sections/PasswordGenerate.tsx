"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '../ui/card'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { CheckCircle, CheckIcon, CopyIcon, SparklesIcon } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { Slider } from '../ui/slider'
import { Checkbox } from '../ui/checkbox'
import { generatePassword } from '@/utils/generate-password'
import FormSavedPwd from '../Form/FormSavedPwd'

export default function PasswordGenerate() {
  const { toast } = useToast()

  const [password, setPassword] = useState('')
  const [isCopy, setIsCopy] = useState(false)
  const [length, setLength] = useState<number>(8)

  const [uppercase, setUppercase] = useState(true)
  const [lowercase, setLowercase] = useState(true)
  const [numbers, setNumbers] = useState(true)
  const [symbols, setSymbols] = useState(true)

  const handleCopy = () => {
    console.log(password)
    navigator.clipboard.writeText(password)
    setIsCopy(true)
    setTimeout(() => setIsCopy(false), 1000)
    toast({
      title: 'Password copied to clipboard',
      description: (
        <div className="flex items-center space-x-2">
          <CheckCircle className="w-5 h-5 text-white" />
          <span>Success! Your password is now in the clipboard.</span>
        </div>
      ),
      duration: 2000,
      className: 'bg-green-500 text-white',
    })
  }

  const handleGeneratePassword = () => {
    const newPassword = generatePassword(
      length,
      uppercase,
      lowercase,
      numbers,
      symbols
    )
  
    setPassword(newPassword)
    toast({
      title: 'New password generated!',
      description: (
        <div className="flex items-center space-x-2">
          <SparklesIcon className="w-5 h-5 text-white" />
          <span>Your secure password is ready to use.</span>
        </div>
      ),
      duration: 2000,
      className: 'bg-blue-500 text-white',
    })
  }
  


  return (
    <>
      <section className='w-full flex justify-center'>
        <div className='container px-4 lg:flex lg:space-x-8 space-y-8 lg:space-y-0'>
          <Card className='pt-4 flex-grow'>
            <CardContent>
              <CardTitle className='text-3xl'>Password Generator</CardTitle>
              <CardDescription className='text-md'>Create a strong and unique password</CardDescription>
              <div className='mt-4'>
                <Label htmlFor='password' className='text-xl font-medium'>Generated Password</Label>
                <div className='flex mt-2 space-x-2'>
                  <Input
                    className='flex-grow lg:max-w-72 rounded-sm text-xl'
                    id='password'
                    type='text'
                    readOnly
                    value={password}
                  />
                  <Button onClick={handleCopy}>
                    {
                      isCopy ? (
                        <CheckIcon size={35} />
                      ) : (
                        <CopyIcon size={35} />
                      )
                    }
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Label htmlFor='length'>Password Length: {length}</Label>
                <Input
                  id="length"
                  type="range"
                  value={length}
                  onChange={(e) => setLength(Number(e.target.value))}
                  min={8}
                  max={20}
                  className="w-full accent-gray-800 lg:max-w-72"
                />
              </div>
              <div className='space-y-2'>

                <div className='flex items-center gap-2'>
                  <Checkbox
                    id='uppercase'
                    checked={uppercase}
                    onCheckedChange={() => setUppercase(!uppercase)}
                    className='w-5 h-5'
                  />
                  <Label htmlFor='uppercase' className='text-md font-semibold'>ABC</Label>
                </div>

                <div className='flex items-center gap-2'>
                  <Checkbox
                    id='lowercase'
                    checked={lowercase}
                    onCheckedChange={() => setLowercase(!lowercase)}
                    className='w-5 h-5'
                  />
                  <Label htmlFor='lowercase' className='text-md font-semibold'>abc</Label>
                </div>

                <div className='flex items-center gap-2'>
                  <Checkbox
                    id='numbers'
                    checked={numbers}
                    onCheckedChange={() => setNumbers(!numbers)}
                    className='w-5 h-5'
                  />
                  <Label htmlFor='numbers' className='text-md font-semibold'>123</Label>
                </div>

                <div className='flex items-center gap-2'>
                  <Checkbox
                    id='symbols'
                    checked={symbols}
                    onCheckedChange={() => setSymbols(!symbols)}
                    className='w-5 h-5'
                  />
                  <Label htmlFor='symbols' className='text-md font-semibold'>@#$</Label>
                </div>

              </div>
              
                <Button 
                  className='mt-4 rounded-sm text-lg' 
                  onClick={handleGeneratePassword}
                >Generate Password</Button>
            </CardContent>
          </Card>
          <FormSavedPwd password={password}/>
        </div>
      </section>
    </>
  )
}
