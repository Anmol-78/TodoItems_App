

import {createContext,useContext} from "react"

export const TodoContent = createContext({
    todos : [
        {
         id : 1,
         todos : "todos msg",
         completed : false
        }
],
addTodo : (todo)=>{},
updateTodo :(id,todo) =>{},
deleteTodo : (id) =>{},
toogleComplete : (id) =>{}
 

})

export const useTodo = () =>{
    return useContext(TodoContent)
}

export const TodoProvider = TodoContent.Provider;