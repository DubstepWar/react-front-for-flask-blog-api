import React, {useState} from "react";
import {Form, FormGroup, Input, Label} from "reactstrap";

interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = props => {
    const [title, setTitle] = useState<string>('');

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    };

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            props.onAdd(title);
            setTitle('');
        }
    };

    return (
        <Form>
            <FormGroup>
                <Label for="title">Todos title</Label>
                <Input type="text"
                       id="title"
                       placeholder="Enter title"
                       value={title}
                       onChange={inputHandler}
                       onKeyPress={keyPressHandler}
                />
            </FormGroup>
        </Form>

    )
};
