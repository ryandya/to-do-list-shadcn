import type { Todo } from "../model/types"

export function createTodo(title: string): Todo {
  return {
    id: crypto.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    title: title.trim(),
    completed: false,
    createdAt: Date.now(),
  }
}
