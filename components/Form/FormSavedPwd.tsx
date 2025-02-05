"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardTitle } from '../ui/card'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useToast } from '@/hooks/use-toast'
import { usePasswordStore } from '@/storage/password-storage'
import { ToastAction } from '../ui/toast'
import Link from 'next/link'

type FormSavedPwdProps = {
  password: string,
}

export default function FormSavedPwd({ password }: FormSavedPwdProps) {

  const { toast } = useToast()

  const savePassword = usePasswordStore(state => state.addPassword)

  const [usage, setUsage] = useState('')
  const [category, setCategory] = useState('')

  const handleSavePassword = () => {
    try {
      if (password && usage && category) {
        savePassword(password, usage, category)
        setUsage("")
        setCategory("")
      }
      toast({
        title: 'Password Saved!',
        description: 'Your password has been saved.',
        action: <ToastAction altText='seePwd'><Link href={'/store'}>See Password</Link></ToastAction>,
        duration: 2000
      })
    } catch (error) {
      console.error("Error saving password:", error) // <-- Log para erros
      toast({
        title: 'Error!',
        description: 'Something went wrong while trying to save the password.',
        duration: 2000,
        variant: 'destructive'
      })
    }
  }

  return (
    <>
      <Card className='pt-4 flex-grow'>
        <CardContent className='space-y-4'>
          <CardTitle className='text-xl'>Save Your Password</CardTitle>
          <div >
            <Label htmlFor='usage'>Usage</Label>
            <Input
              id='usage'
              type='text'
              placeholder='ex: Gmail, Facebook....'
              value={usage}
              onChange={(e) => setUsage(e.target.value)}
              className='flex-grow '
            />
          </div>
          <div>
            <Label htmlFor='category'>Category</Label>
            <Input
              id='category'
              type='text'
              placeholder='ex: Personal, Work....'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='flex-grow'
            />
          </div>

          <div>
            <Button onClick={handleSavePassword} className='mt-4 rounded-sm text-lg'>Save Password</Button>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
