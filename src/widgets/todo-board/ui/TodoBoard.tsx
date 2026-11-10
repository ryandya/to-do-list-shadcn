import { AddTodoForm } from "@/features/add-todo"
import { TodoFilterTabs } from "@/features/filter-todos"
import { Card, CardContent, CardFooter } from "@/shared/ui/card"
import { TodoFooter } from "./TodoFooter"
import { TodoList } from "./TodoList"

export function TodoBoard() {
  return (
    <Card className="gap-0">
      <CardContent className="space-y-4">
        <AddTodoForm />
        <TodoFilterTabs />
      </CardContent>
      <div className="max-h-[min(55vh,32rem)] min-h-0 overflow-y-auto scrollbar-themed px-4 py-4">
        <TodoList />
      </div>
      <CardFooter className="mt-4">
        <TodoFooter />
      </CardFooter>
    </Card>
  )
}
