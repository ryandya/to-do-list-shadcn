import { useRef, useState, type FormEvent } from "react"
import { useTodoStore } from "@/entities/todo"
import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"

export function AddTodoForm() {
  const [title, setTitle] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const addTodo = useTodoStore((state) => state.addTodo)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!title.trim()) return
    addTodo(title)
    setTitle("")
    inputRef.current?.focus()
  }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <Input
        ref={inputRef}
        value={title}
        onChange={(event) => setTitle(event.target.value.slice(0, 200))}
        maxLength={200}
        placeholder="Добавить задачу"
        aria-label="Новая задача"
      />
      <Button type="submit">Добавить</Button>
    </form>
  )
}
