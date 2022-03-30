import React, { useEffect, useState } from "react";
import { Todo } from "../globals/entities/todo.entity";
import todoService from "../globals/services/todo.service";

export const LayoutHOC = (props: any) => {

    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const getItems = async () => {
            setLoading(true)
            const items = await todoService.get()
            setTodos(items);
            setLoading(false)
        }
        getItems()
    }, [])


    const addNew = async (todo: Partial<Todo>) => {
        try {
            setLoading(true);
            await todoService.post(todo);
            const items = await todoService.get()
            setTodos(items);
            setLoading(false);
        } catch (err) {
            console.error(err);
        }
    }


    return <>
        {React.cloneElement(props.children, { todos, loading, addNew })}
    </>


} 