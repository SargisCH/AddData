import React, {Component} from "react";
import {connect} from "react-redux"
import {redVisibilityAction, greenVisibilityAction,blueVisibilityAction} from "./actions/action"
class Home extends Component {
	console.log('adasdasd')
    constructor(props){
        super(props)
    }
    render(){
        return (
             <div>
                <div className="red" onClick={() =>this.props.changeRedVisibility(!this.props.redVisibility)}></div>
                <div className="green" onClick={()=>this.props.changeGreenVisibility(!this.props.greenVisibility)}></div>
                <div className="blue" onClick={()=>this.props.changeBlueVisibility(!this.props.blueVisibility)}></div>
                {this.props.redVisibility && <div className="subred" ></div>}
                {this.props.greenVisibility && <div className="subgreen"></div>}
                {this.props.blueVisibility && <div className="subblue"></div>}
            </div>
        )
    }


    
}
const mapStateToProps = (state) => {
	console.log(state.greenVisibility)
    return{
        redVisibility: state.redVisibility,
        greenVisibility: state.greenVisibility,
        blueVisibility: state.blueVisibility
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
         changeRedVisibility:(visibility) => {
              dispatch(redVisibilityAction(visibility)) 
        }, 
         changeGreenVisibility:(visibility) => {
              dispatch(greenVisibilityAction(visibility)) 
        }, 
         changeBlueVisibility:(visibility) => {
              dispatch(blueVisibilityAction(visibility)) 
        } 
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);