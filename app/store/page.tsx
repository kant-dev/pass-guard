"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { EyeIcon, EyeOffIcon, CopyIcon } from "lucide-react"
import { usePasswordStore } from "@/storage/password-storage"
import { Separator } from "@/components/ui/separator"

export default function Page() {
  const { passwords, updatePassword, deletePassword } = usePasswordStore()
  const [editId, setEditId] = useState<string | null>(null)
  const [editUsage, setEditUsage] = useState("")
  const [editCategory, setEditCategory] = useState("")
  const [visiblePasswords, setVisiblePasswords] = useState<{ [key: string]: boolean }>({})

  const handleEdit = (id: string, usage: string, category: string) => {
    setEditId(id)
    setEditUsage(usage)
    setEditCategory(category)
  }

  const handleSave = (id: string) => {
    updatePassword(id, editUsage, editCategory)
    setEditId(null)
  }

  const handleDelete = (id: string) => {
    deletePassword(id)
  }

  const togglePasswordVisibility = (id: string) => {
    setVisiblePasswords((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const copyPassword = (password: string) => {
    navigator.clipboard.writeText(password)
  }

  return (
    <>
      <section className=" w-full flex justify-center">
        <div className="space-y-4 container py-4 px-4 lg:px-0">
          <div className="">
            <h2 className="text-3xl font-bold">Password Store</h2>
            <p className="text-gray-500 font-medium">Manage and analyze your saved passwords</p>
          </div>
          <Separator className="mt-2"/>
          <h2 className="text-xl font-bold">Saved Passwords</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">Usage</TableHead>
                <TableHead className="text-center">Category</TableHead>
                <TableHead className="text-center">Password</TableHead>
                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {passwords.map((pwd) => (
                <TableRow key={pwd.id}>
                  <TableCell className="text-center">
                    {editId === pwd.id ? (
                      <Input value={editUsage} onChange={(e) => setEditUsage(e.target.value)} />
                    ) : (
                      pwd.usage
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {editId === pwd.id ? (
                      <Input value={editCategory} onChange={(e) => setEditCategory(e.target.value)} />
                    ) : (
                      pwd.category
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="font-mono">{visiblePasswords[pwd.id] ? pwd.password : "••••••••"}</span>
                      <Button size="icon" variant="ghost" onClick={() => togglePasswordVisibility(pwd.id)}>
                        {visiblePasswords[pwd.id] ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                      </Button>
                      <Button size="icon" variant="ghost" onClick={() => copyPassword(pwd.password)}>
                        <CopyIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    {editId === pwd.id ? (
                      <Button onClick={() => handleSave(pwd.id)}>Save</Button>
                    ) : (
                      <>
                        <div className="flex flex-col gap-y-2 lg:flex-row lg:gap-2 justify-center">
                          <Button onClick={() => handleEdit(pwd.id, pwd.usage, pwd.category)}>Edit</Button>
                          <Button onClick={() => handleDelete(pwd.id)} variant="destructive">
                            Delete
                          </Button>
                        </div>
                      </>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </>
  )
}

