import React from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as noteActions from "./redux/actions";

class HomeButton extends React.Component{
    constructor(props) {
        super(props);
        this.handler=this.handler.bind(this);
    }
    handler(){
        this.props.changeVis("active");
        this.props.changeVisPlus("active");
        this.props.history.push(`/`);
    }
    render(){
        return <button className="home" onClick={this.handler}>&#8962;</button>
    }
}


function mapDispatchToProps(dispatch) {
    return {
        changeVis: bindActionCreators(noteActions.Actions.changeVis, dispatch),
        changeVisPlus: bindActionCreators(noteActions.Actions.changeVisPlus, dispatch),
    }
}


export default withRouter(connect(null,mapDispatchToProps)(HomeButton));