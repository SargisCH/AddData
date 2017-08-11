import React from "react";
import ReactDom from "react-dom"; 
import {render} from "react-dom"; 
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import reducer from './reducers/reducer'
import Home from './Home'
import {reducer as formReducer} from "redux-form";

let rootReducer = combineReducers(reducer, formReducer)
render(
<div>
    <Provider store={createStore(rootReducer)}>
        <Home/>
    </Provider>
</div>, document.getElementById("root"))


 