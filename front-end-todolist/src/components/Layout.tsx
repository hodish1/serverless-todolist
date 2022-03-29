import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button, Switch, TextField } from '@mui/material';
import { Todo } from '../globals/entities/todo.entity';


export interface LayoutState {
    addNew: boolean
}

export const Layout = (props: any) => {

    const initialState: LayoutState = {
        addNew: false,

    }
    const [state, setState] = React.useState<LayoutState>(initialState)
    const [todos, setTodos] = React.useState<Partial<Todo>[]>([
        {
            todoId: 'ghgj',
            createdAt: 1,
            todo: "Walk the dog",
            done: false
        },
        {
            todoId: 'ghgj',
            createdAt: 1,
            todo: "Walk the dog",
            done: false
        },
        {
            todoId: 'ghgj',
            createdAt: 1,
            todo: "Walk the dog",
            done: false
        }
    ]);


    const handleAddNew = (addNew: boolean) => {
        setState({ ...state, addNew });
    }

    const addNewTodo = (todo: Partial<Todo>) => {
        setTodos([...todos, todo])
    }

    return (
        <div className="container py-3">
            <div className="row justify-content-start py-3">
                <div className="col-2">
                    <Button variant="contained" onClick={() => { handleAddNew(true) }}>Add new</Button>
                </div>
            </div>
            {state.addNew ? <div className="row py-3">
                <div className="col-10 d-flex justify-content-start">
                    <TextField id="outlined-basic" label="Something to do" />
                    <Button variant="outlined">+</Button>
                </div>
            </div> : null}
            <div className="row">
                <div className="col-12">
                    <FormGroup>
                        {todos.map((todo: Partial<Todo>, index: number) => {
                            return (
                                <FormControlLabel
                                    label={todo.todo}
                                    key={index}
                                    control={
                                        <Switch

                                            checked={todo.done}
                                        />}
                                />
                            )
                        })}
                    </FormGroup>
                </div>
            </div>
        </div>

    );

}