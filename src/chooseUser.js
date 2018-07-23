import React, {Component} from 'react';
import {routeName} from "./constants"
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class ChooseUserContainer extends Component {
    render() {
        return (
            <div className="card">
                {
                    this.props.users.map((el, index) =>
                        <Link
                            key={index}
                            to={`/${routeName.USER}/${el.id}`}
                        >
                            <div
                                className="user"
                            >
                                {el.name}
                            </div>
                        </Link>
                    )
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(ChooseUserContainer);
