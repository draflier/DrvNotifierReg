import React, {Component} from 'react';
//import TodoService from './TodoService';
import { getAllTodo,
        deleteTodoItems } from '../actions/todoActions';
//import axios from 'axios';
import ListTodoRow from './ListTodoRow';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class IndexItem extends Component
{
    constructor (props)
    {
        super(props);
        this.state = {items: ''};
        //this.todoService = new TodoService();

        //bind
        this.onDelete = this.onDelete.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.handleAdd = this.handleAdd.bind(this);         
        //this.fillData();
        //console.log(this.props)
        this.props.getAllTodo();
        
        
    }

    /*
    componentDidMount() {
        this.props.getAllTodo();
      }

   
   
    componentWillMount()
    {
        this.fillData();
    }
    */

    fillData()
    {
        var thisRef = this;
        //this.todoService.all((data) => thisRef.setState({items:data}));        

    }

    tabRow()
    {
        console.log("inside tabRow");
        console.log(this.props);
        if(this.props.Todos instanceof Array)
        {
            var thisRef = this;
            return this.props.Todos.map(function(object,i)
            {
                return (<ListTodoRow onDelete={thisRef.onDelete} onUpdate={thisRef.onUpdate} obj={object} key={i} />);

            });
        }
    }

    onDelete(event)
    {
        let id = event.target.id;
        //var thisRef = this;
        this.props.deleteTodoItems(id)
        //this.todoService.delete(id, () =>{thisRef.fillData();});
    }

    onUpdate(event)
    {
        let id = event.target.id;
        this.props.history.push('/update/' + id)        
    }

    handleAdd()
    {
        this.props.history.push('/add');        
    }

    render()
    {
        return(
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">Driver List</div>
                    <div className="panel-body">
                        <p>Click on the record to edit</p>
                        <table id="todo-list" className="table table-bordered">
                            <tbody>
                                {this.tabRow()}
                            </tbody>
                        </table>                        
                    </div>
                    <div className="panel-footer">
                        <button onClick={this.handleAdd} className="btn btn-info">New Driver</button>
                    </div>
                </div>
            </div>
        );
    }
};

IndexItem.propTypes = {
    getAllTodo: PropTypes.func.isRequired,
    Todos: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    Todos: state.Todos.itemsTodo
});

export default connect(mapStateToProps,
    { getAllTodo,
    deleteTodoItems })
    (IndexItem);