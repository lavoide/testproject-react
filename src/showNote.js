import React from 'react';
import EditButtons from "./editButtons";

const ShowNoteContainer = ({
                               notes
                           }) => (

    notes.map((el, index) =>
        <div key={index} className='note'>
            <EditButtons id={index}/>
            <h3>{el.noteTheme}</h3>
            <p>{el.noteText}</p>
            <p className="date">{el.date}</p>
        </div>
    )
);

export default ShowNoteContainer;
