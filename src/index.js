import React from "react";
import ReactDom from "react-dom"; 
import {render} from "react-dom"; 
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from './reducers/reducer'
import Home from './Home'
render(
<div>
    <Provider store={createStore(reducer)}>
        <Home/>
    </Provider>
</div>, document.getElementById("root"))


 