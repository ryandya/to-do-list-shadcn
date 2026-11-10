import { selectLeftCount, useTodoStore } from "@/entities/todo"
import { ClearCompletedButton } from "@/features/clear-completed"
import { Badge } from "@/shared/ui/badge"

export function TodoFooter() {
  const leftCount = useTodoStore((state) => selectLeftCount(state.todos))

  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <Badge variant="secondary">Осталось: {leftCount}</Badge>
      <ClearCompletedButton />
    </div>
  )
}
