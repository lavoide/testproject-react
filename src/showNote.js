import React from 'react';
import EditButtons from "./editButtons";

class ShowNoteContainer extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(this.props.notes.map((el, index) =>
            <div key={index} className='note'>
                <EditButtons id={index} room={this.props.room}/>
                <h3>{el.noteTheme}</h3>
                <p>{el.noteText}</p>
                <p className="date">{el.date}</p>
            </div>))
    }
}
export default ShowNoteContainer;
