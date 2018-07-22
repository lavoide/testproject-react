import React from 'react';

const ShowNoteContainer = ({
                                  notes
                              }) => (

    notes.map((el, index) =>
        <div key={index} className='note'>
            <h3>{el.noteTheme}</h3>
            <p>{el.noteText}</p>
            <p className="date">{el.date}</p>
        </div>
    )
);

export default ShowNoteContainer;
