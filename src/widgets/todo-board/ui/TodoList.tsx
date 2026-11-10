import { useMemo } from "react"
import { filterTodos, TodoItem, useTodoStore } from "@/entities/todo"
import { useTodoFilterStore } from "@/features/filter-todos"
import { DeleteTodoButton } from "@/features/delete-todo"
import { ToggleTodoCheckbox } from "@/features/toggle-todo"
import { TodoEmptyState } from "./TodoEmptyState"

export function TodoList() {
  const filter = useTodoFilterStore((state) => state.filter)
  const todos = useTodoStore((state) => state.todos)
  const visibleTodos = useMemo(() => filterTodos(todos, filter), [todos, filter])

  if (visibleTodos.length === 0) return <TodoEmptyState filter={filter} />

  return (
    <ul className="divide-y">
      {visibleTodos.map((todo) => (
        <li key={todo.id} className="animate-in fade-in slide-in-from-bottom-1 duration-200 py-3 first:pt-0 last:pb-0">
          <TodoItem
            todo={todo}
            leading={<ToggleTodoCheckbox id={todo.id} />}
            actions={<DeleteTodoButton id={todo.id} title={todo.title} />}
          />
        </li>
      ))}
    </ul>
  )
}
