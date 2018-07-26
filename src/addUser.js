import React, {Component} from 'react';
import {data} from './redux/data'

class AddUserContainer extends Component {
    state = {
        iterator: data.users.slice(-1)[0] ? data.users.slice(-1)[0].id+1 : 0,
        userName: '',
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

            this.setState({
                userName: '',
                iterator: this.state.iterator+1,
                user:[]
            });
            return this.props.submit(this.state.user)
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
            <div className="login">
                <form className="loginform" onSubmit={this.submit} action="#">
                    <p>
                        <label htmlFor="login">Login:</label>
                    </p>
                    <input type="text" id="login" onChange={this.readUser} value={this.state.userName}/>
                    <p>
                        <label htmlFor="password">Password:</label>
                    </p>
                    <input type="text" id="password"/>

                    <button>send</button>
                </form>
            </div>
        );
    }
}

export default AddUserContainer;
