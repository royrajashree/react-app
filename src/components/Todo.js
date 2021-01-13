import React from "react";
import {ListGroup, ListGroupItem} from "reactstrap";
import {FaCheckDouble} from "react-icons/fa";

import {connect} from "react-redux";
import {removeTodo} from "../action/todo";

const Todo = (props) => {
    return (
        <ListGroup className="mt-5 mb-2">
            {props.todos.map((todo)=> (
                <ListGroupItem key={todo.id}>
                    {todo.title}
                    <span onClick={() => props.markComplete(todo.id)} className="float-right">
                        <FaCheckDouble />
                    </span>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return({
    todos: state.todos
})}

const mapDispatchToProps = dispatch => ({
    markComplete: id => {
        dispatch(removeTodo(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo);