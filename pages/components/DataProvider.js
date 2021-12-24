import { useState, useEffect, createContext } from "react"
//usage react hooks
//UseState will endow our functional component with an internal state
//UseThe effect executes side effects from the functional component
export const DataContext = createContext();
//context data to be passed to all components

export const DataProvider = (props) => {
//array definition (list of tasks)
    const [todos, setTodos]=useState([ ])
//tracking list changes
    useEffect(() =>{
        const todoStore = JSON.parse(localStorage.getItem('todoStore'))
        if (todoStore) setTodos(todoStore)
    },[])
//and saving values to local storage
    useEffect(()=>{
        localStorage.setItem('todoStore', JSON.stringify(todos))
    },[todos])

    return (
        <DataContext.Provider value={[todos, setTodos]}>
            {props.children}
        </DataContext.Provider>
    )
}