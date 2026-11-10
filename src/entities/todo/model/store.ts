import { create } from "zustand"
import { persist } from "zustand/middleware"
import { STORAGE_KEY, STORAGE_VERSION } from "@/shared/config"
import { createTodo } from "../lib/createTodo"
import type { Todo } from "./types"

interface TodoState {
  todos: Todo[]
  addTodo: (title: string) => void
  toggleTodo: (id: string) => void
  removeTodo: (id: string) => void
  clearCompleted: () => void
}

export const useTodoStore = create<TodoState>()(
  persist(
    (set) => ({
      todos: [],
      addTodo: (title) => {
        if (!title.trim()) return
        set((state) => ({ todos: [createTodo(title), ...state.todos] }))
      },
      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        })),
      removeTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
      clearCompleted: () =>
        set((state) => ({
          todos: state.todos.filter((todo) => !todo.completed),
        })),
    }),
    { name: STORAGE_KEY, version: STORAGE_VERSION }
  )
)
