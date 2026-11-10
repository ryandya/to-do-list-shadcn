import type { Todo, TodoFilter } from "./types"

export const selectLeftCount = (todos: Todo[]): number =>
  todos.reduce((count, todo) => count + Number(!todo.completed), 0)

export const selectCompletedCount = (todos: Todo[]): number =>
  todos.reduce((count, todo) => count + Number(todo.completed), 0)

export function filterTodos(todos: Todo[], filter: TodoFilter): Todo[] {
  if (filter === "active")
    return todos.filter((todo) => !todo.completed)
  if (filter === "completed")
    return todos.filter((todo) => todo.completed)
  return todos
}
