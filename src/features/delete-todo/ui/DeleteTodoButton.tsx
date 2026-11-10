import { Trash2 } from "lucide-react"
import { toast } from "sonner"
import { useTodoStore } from "@/entities/todo"
import { Button } from "@/shared/ui/button"

interface DeleteTodoButtonProps {
  id: string
  title: string
}

export function DeleteTodoButton({ id, title }: DeleteTodoButtonProps) {
  const removeTodo = useTodoStore((state) => state.removeTodo)

  function handleDelete() {
    removeTodo(id)
    toast.success("Задача удалена")
  }

  return (
    <Button type="button" variant="ghost" size="icon" onClick={handleDelete} aria-label={`Удалить задачу: ${title}`}>
      <Trash2 aria-hidden="true" />
    </Button>
  )
}
