import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {Header} from "./components/Header";
import AddTodo from "./components/AddTodo";
import IndexItem from "./components/ListTodo";
import UpdateTodo from "./components/UpdateTodo";

import './index.css';
//Redux imports
import { Provider } from 'react-redux';
import store from './store'


ReactDom.render(
    <Provider store={store}>
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <Header/>
                </div>
            </div>
            <div>
                <Router>
                    <div>
                        <Route path='/add' component={AddTodo} />
                        <Route exact path='/' component={IndexItem} />
                        <Route path='/update/:id' component={UpdateTodo}/>
                    </div>
                </Router>
            </div>
        </div>
    </Provider>
    ,
    document.getElementById('root')
);