"use client"

import { Todo } from "@/generated/prisma"
import { TodoItem } from "./TodoItem"
// import * as todosApi from "@/todos/helpers/todos"
// import { useRouter } from "next/navigation"
import { toggleTodo } from "@/todos/actions/todo-action"

interface TodosGridProps {
    todos?: Todo[]
}

export const TodosGrid = ({todos = []}: TodosGridProps) => {

    // const router = useRouter()

  //   const toggleTodo = async (id: string, complete: boolean) => {
  //   const updatedTodo = await todosApi.updateTodo(id, complete)
  //   router.refresh()
  //   return updatedTodo
    
  // }

  

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 ">
        {
            todos.map((todo) =>  (
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
            ))
        }
    </div>
  )
}
