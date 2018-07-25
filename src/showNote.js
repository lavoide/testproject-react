import React from 'react';
import EditButtons from "./editButtons";

class ShowNoteContainer extends React.Component{

    render(){
        return(this.props.notes.map((el, index) =>
            <div key={index} className={`note ${el.noteColor}`} >
                <EditButtons id={index} user={this.props.user}/>
                <h3>{el.noteTheme}</h3>
                <p className="notetext">{el.noteText}</p>
                <p className="date">{el.date}</p>
            </div>))
    }
}
export default ShowNoteContainer;
