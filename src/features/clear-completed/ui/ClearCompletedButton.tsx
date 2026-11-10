import { selectCompletedCount, useTodoStore } from "@/entities/todo"
import { Button } from "@/shared/ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/shared/ui/alert-dialog"

export function ClearCompletedButton() {
  const completedCount = useTodoStore((state) => selectCompletedCount(state.todos))
  const clearCompleted = useTodoStore((state) => state.clearCompleted)
  if (completedCount === 0) return null

  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button type="button" variant="outline" />}>
        Удалить выполненные
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Удалить выполненные задачи?</AlertDialogTitle>
          <AlertDialogDescription>
            Это действие удалит все выполненные задачи.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Отмена</AlertDialogCancel>
          <AlertDialogAction onClick={clearCompleted}>Удалить</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
