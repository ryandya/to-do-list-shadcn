import { TodoBoard } from "@/widgets/todo-board"

export function HomePage() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-xl flex-col gap-8 px-4 py-10 sm:px-6 sm:py-16">
      <header className="text-center">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Мои задачи</h1>
        <p className="mt-2 text-muted-foreground">Записывайте планы и отмечайте выполненное</p>
      </header>
      <TodoBoard />
    </main>
  )
}
