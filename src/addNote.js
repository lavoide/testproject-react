import React, {Component} from 'react';

class AddNoteContainer extends Component {

    state = {
        noteText: '',
        noteTheme:''
    };

    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);
        this.readNote = this.readNote.bind(this);
        this.readTheme = this.readTheme.bind(this);
    }

    submit(evt) {
        evt.preventDefault();
        this.setState({
            noteText: '',
            noteTheme: ''
        });
        return this.props.submit(this.state.noteText,this.state.noteTheme);

    }

    readNote(evt) {
        return this.setState({
            noteText: evt.target.value
        });
    }
    readTheme(evt){
        return this.setState({
            noteTheme: evt.target.value
        });
    }

    render() {
        return (
            <div className="note">
                <form className="noteform" onSubmit={this.submit} action="#">
                    <input type="text" onChange={this.readTheme} value={this.state.noteTheme}/>
                    <textarea onChange={this.readNote}
                               value={this.state.noteText} name="note" id="note" cols="30" rows="10">{this.state.noteText}</textarea>
                    <button>send</button>
                </form>
            </div>
        );
    }
}

export default AddNoteContainer;
