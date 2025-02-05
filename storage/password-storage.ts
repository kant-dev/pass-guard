import { create } from "zustand"
import { persist } from "zustand/middleware"

interface PasswordEntry {
  id: string
  password: string
  usage: string
  category: string
}

interface PasswordStore {
  passwords: PasswordEntry[]
  addPassword: (password: string, usage: string, category: string) => void
  updatePassword: (id: string, usage: string, category: string) => void
  deletePassword: (id: string) => void
}

export const usePasswordStore = create(
  persist<PasswordStore>(
    (set) => ({
      passwords: [],
      addPassword: (password, usage, category) =>
        set((state) => ({
          passwords: [...state.passwords, { id: Date.now().toString(), password, usage, category }],
        })),
      updatePassword: (id, usage, category) =>
        set((state) => ({
          passwords: state.passwords.map((p) => (p.id === id ? { ...p, usage, category } : p)),
        })),
      deletePassword: (id) =>
        set((state) => ({
          passwords: state.passwords.filter((p) => p.id !== id),
        })),
    }),
    {
      name: "password-store",
    },
  ),
)

