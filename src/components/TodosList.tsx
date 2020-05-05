import React from "react";
import {ITodo} from "../interfaces/todos";
import {Alert, Col, Input, ListGroup, ListGroupItem, Row} from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface TodosListProps {
    todosList: ITodo[]

    onToggle(todoId: number): void

    onRemove(todoId: number): void
}

export const TodosList: React.FC<TodosListProps> = ({todosList, onRemove, onToggle}) => {
    if (!todosList.length) {
        return (
            <Alert color="danger">
                Todos list is empty
            </Alert>
        )
    }

    const removeHandler = (event: React.MouseEvent, todoId: number): void => {
        event.preventDefault();
        onRemove(todoId)
    };

    return (
        <ListGroup className="todo">
            {todosList.map(todo => {
                const classes: string[] = [];
                if (todo.isCompleted) {
                    classes.push('todo_done')
                }

                return (
                    <ListGroupItem className={`todo__item  ${classes.join(' ')}`} key={todo.id}>
                        <Row className="justify-content-between align-items-center">
                            <Col md={4}>
                                <Input type="checkbox"
                                       className="todo__checkbox"
                                       defaultChecked={todo.isCompleted}
                                       onChange={() => onToggle(todo.id)}
                                />
                            </Col>
                            <Col md={4}>
                                <span>
                                    {todo.title}
                                </span>
                            </Col>
                            <Col md={1}>
                                <FontAwesomeIcon icon="trash"
                                                 className="text-danger"
                                                 onClick={event => removeHandler(event, todo.id)}
                                />
                            </Col>
                        </Row>
                    </ListGroupItem>
                )
            })}

        </ListGroup>
    )
};
