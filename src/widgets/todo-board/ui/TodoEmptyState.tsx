import type { TodoFilter } from "@/entities/todo"
import { emptyMessages } from "../model/emptyMessages"

interface TodoEmptyStateProps {
  filter: TodoFilter
}

export function TodoEmptyState({ filter }: TodoEmptyStateProps) {
  const { title, hint, Icon } = emptyMessages[filter]

  return (
    <div className="flex min-h-44 flex-col items-center justify-center gap-2 px-4 text-center">
      <Icon aria-hidden="true" className="size-8 text-muted-foreground" />
      <p className="font-medium">{title}</p>
      <p className="text-sm text-muted-foreground">{hint}</p>
    </div>
  )
}
