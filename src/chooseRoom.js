import React, {Component} from 'react';
import {routeName} from "./constants"
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class ChooseRoomContainer extends Component {

    render() {
        return (
            <div className="card">
                {
                    this.props.rooms.map((el, index) =>
                        <Link
                            key={index}
                            to={`/${routeName.ROOM}/${el.id}`}
                        >
                            <div
                                className="choose-room-item"
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
        rooms: state.rooms
    }
}

export default connect(mapStateToProps)(ChooseRoomContainer);
