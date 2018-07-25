import React, {Component} from 'react';
import {data} from './redux/data'

class AddUserContainer extends Component {
    state = {
        iterator: data.users.slice(-1)[0] ? data.users.slice(-1)[0].id+1 : 0,
        userName: '',
        data: JSON.parse(JSON.stringify(data)),
        user: []
    };

    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);
        this.readUser = this.readUser.bind(this);
    }

    submit(evt) {
        evt.preventDefault();
        if(this.state.userName){
            this.state.user.name=this.state.userName;
            this.state.user.id=this.state.iterator;
            this.state.user.notes=[];
            this.state.data.users.push(this.state.user);

            this.setState({
                userName: '',
                iterator: this.state.iterator+1,
                user:[]
            });
            return this.props.submit(this.state.data)
        }
        else alert('Wrong values!');
        evt.target.reset();
    }

    readUser(evt){
        return this.setState({
            userName: evt.target.value
        });
    }


    render() {
        return (
            <div className="note">
                <form className="noteform" onSubmit={this.submit} action="#">
                    <input type="text" onChange={this.readUser} value={this.state.userName}/>
                    <button>send</button>
                </form>
            </div>
        );
    }
}

export default AddUserContainer;
