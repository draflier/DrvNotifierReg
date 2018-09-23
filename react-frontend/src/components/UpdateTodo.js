import React, {Component} from 'react';
import axios from 'axios';
//import TodoService from './TodoService';
import { connect } from 'react-redux';
import { getTodo, updateTodo } from '../actions/todoActions';

class UpdateTodo extends Component
{
    constructor(props)
    {
        super(props);

        //bind the instance to each method
        // (so you can use the THIS statement. Otherwise it will be null)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        console.log("constructing Updatetodo");
        let id = this.props.match.params.id;
        this.props.getTodo(id);
        this.state = {
            _id: '',
            desc: ''
        };

        //set the initial State

    }

    componentWillReceiveProps(nextProps)
    {
        this.setState({
            _id: nextProps.Todos.map(x => x._id),
            desc: nextProps.Todos.map(y => y.desc)
        })
    }

    componentDidMount()
    {
        console.log(this.props)
        
        var thisRef = this;

        /*
        this.todoService.get(id,function(data)
        {
            thisRef.setState(data);
        })
        */
    }

    handleChange(event)
    {
        //updates the state only for this parameter
        //(_id stays the same)
        event.preventDefault();
        this.setState({desc:event.target.value});  
        

    }

    handleSubmit(event)
    {
        console.log('heehhehehe');
        event.preventDefault();
        //reference to the component "this"
        var thisRef = this;
        //update in database
        var id = this.props.Todos.map(itemsTodo => itemsTodo._id)
        var strDesc = this.state.desc
        const newItemTodo = {
            _id: id,
            desc: this.state.desc
        }        
        this.props.updateTodo(id,newItemTodo)
        this.props.history.push('/')
        /*
        this.todoService.update(
            this.state.desc,
            this.state._id,
            function() 
            {
                thisRef.props.history.push('/')                
            }   
        );
        */            
    }

    handleCancel(event)
    {
        event.preventDefault();
        this.props.history.push('/')
    }

    render()
    {
        console.log(this.props);
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="panel panel-default">
                        <div className="panel-heading">Edit Task</div>
                        <div className="panel-body">
                            <input type="hidden" value={this.state._id}/>
                                <input type="text" value={this.state.desc} onChange={this.handleChange} className="form-control"/>
                        </div>
                        <div className="panel-footer">
                            <button type="submit" className="btn btn-primary">Update</button>
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
    { getTodo, updateTodo })
    (UpdateTodo);