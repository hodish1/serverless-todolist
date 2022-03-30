import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button, Switch, TextField } from '@mui/material';
import { Todo } from '../globals/entities/todo.entity';
import { Loader } from './Loader';


export interface LayoutState {
    current: Partial<Todo>
}

export const Layout = (props: any) => {

    const { todos, loading, addNew } = props;
    const initialState: LayoutState = {
        current: {
            todo: "",
            done: false
        }
    }
    const [state, setState] = React.useState<LayoutState>(initialState)

    const handleTextInput = (val: string) => {
        const _current = state.current;
        _current.todo = val;
        setState({ ...state, current: _current })
    }

    return (
        <>
            {loading ? <Loader /> : null}
            <div className="container py-3">
                <div className="row justify-content-start py-3">
                    <div className="col-2">
                        <h3>My Todo List</h3>
                    </div>
                </div>
                <div className="row py-3">
                    <div className="col-10 d-flex justify-content-start">
                        <TextField id="outlined-basic" label="Something to do" value={state.current.todo} onChange={(e) => handleTextInput(e.target.value)} />
                        <Button variant="outlined" onClick={() => { addNew(state.current) }}>+</Button>
                    </div>
                </div>
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
        </>
    );

}