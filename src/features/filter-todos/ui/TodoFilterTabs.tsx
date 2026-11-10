import type { TodoFilter } from "@/entities/todo"
import { Tabs, TabsList, TabsTrigger } from "@/shared/ui/tabs"
import { useTodoFilterStore } from "../model/store"

const filters: { value: TodoFilter; label: string }[] = [
  { value: "all", label: "Все" },
  { value: "active", label: "Активные" },
  { value: "completed", label: "Выполненные" },
]

export function TodoFilterTabs() {
  const filter = useTodoFilterStore((state) => state.filter)
  const setFilter = useTodoFilterStore((state) => state.setFilter)

  return (
    <Tabs value={filter} onValueChange={(value) => setFilter(value as TodoFilter)}>
      <TabsList aria-label="Фильтр задач">
        {filters.map((item) => (
          <TabsTrigger key={item.value} value={item.value}>{item.label}</TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}
