import type { ReactNode } from "react"
import type { Todo } from "../model/types"
import { cn } from "@/lib/utils"

interface TodoItemProps {
  todo: Todo
  leading?: ReactNode
  actions?: ReactNode
}

export function TodoItem({ todo, leading, actions }: TodoItemProps) {
  return (
    <div className="flex items-center gap-3">
      {leading}
      <span className={cn("flex-1", todo.completed && "line-through opacity-60")}>
        {todo.title}
      </span>
      {actions}
    </div>
  )
}
