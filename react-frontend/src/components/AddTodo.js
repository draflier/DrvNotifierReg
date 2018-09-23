import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions';
//import TodoService from './TodoService';

class AddTodo extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        console.log(this.props)

    }

    handleSubmit(event)
    {
        //alert("this.state.value ==>" + this.state.value)
        event.preventDefault();
        const newItemTodo = {
            desc: this.state.value
        }        
        this.props.addTodo(newItemTodo);
        this.props.history.push('/');
    }

    handleCancel(event)
    {
        //alert("Cancel")
        event.preventDefault();
        this.props.history.push('/');
    }

    handleChange(event)
    {        
        event.preventDefault();
        this.setState({value: event.target.value});        
    }

    render()
    {
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="panel panel-default">
                        <div className="panel-heading">Add Task</div>
                        <div className="panel-body">
                            <p>Task Description</p>
                            <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control"/>                            
                        </div>
                        <div className="panel-footer">
                            <button type="submit" className="btn btn-primary">Add</button>
                            <button type="button" className="btn btn-default" onClick={this.handleCancel}>Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    Todos: state.Todos.itemsTodo
});


export default connect(mapStateToProps,
    { addTodo })
    (AddTodo);