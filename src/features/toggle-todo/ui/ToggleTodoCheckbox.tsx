import { useTodoStore } from "@/entities/todo"
import { Checkbox } from "@/shared/ui/checkbox"

interface ToggleTodoCheckboxProps {
  id: string
}

export function ToggleTodoCheckbox({ id }: ToggleTodoCheckboxProps) {
  const todo = useTodoStore((state) => state.todos.find((item) => item.id === id))
  const toggleTodo = useTodoStore((state) => state.toggleTodo)
  if (!todo) return null

  return (
    <Checkbox
      checked={todo.completed}
      onCheckedChange={() => toggleTodo(id)}
      aria-label={todo.title}
    />
  )
}
