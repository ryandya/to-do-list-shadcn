import { CheckCheck, ListTodo } from "lucide-react"
import type { TodoFilter } from "@/entities/todo"

export const emptyMessages: Record<
  TodoFilter,
  { title: string; hint: string; Icon: typeof ListTodo }
> = {
  all: { title: "Пока нет задач", hint: "Добавьте первую задачу выше", Icon: ListTodo },
  active: { title: "Активных задач нет", hint: "Все задачи выполнены", Icon: CheckCheck },
  completed: {
    title: "Выполненных задач пока нет",
    hint: "Отмечайте задачи по мере выполнения",
    Icon: CheckCheck,
  },
}
