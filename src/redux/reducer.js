import * as noteActions from "./actions";

const initialState = {
    rooms: [
        {
            name: 'John',
            id: 1,
            notes: []
        },
        {
            name: 'Ivan',
            id: 2,
            notes: []
        },
        {
            name: 'Nik',
            id: 3,
            notes: []
        },
        {
            name: 'Bill',
            id: 4,
            notes: []
        }
    ]
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case noteActions.SEND_NOTE: {
            const oldRooms = state.rooms.map((el, index) => {
                return el.id === parseInt(action.roomId)
                    ? {
                        ...el,
                        notes: [
                            ...state.rooms[index].notes,
                            {
                                noteText: action.noteText,
                                noteTheme: action.noteTheme,
                                date: action.date
                            }
                        ]
                    }
                    : el
            });

            return {
                ...state,
                rooms: oldRooms
            }
        }
        case noteActions.DELETE_NOTE:{
            console.log(state.rooms[0]);
            state.rooms[0].notes.map((el, index) => {
                if(index===action.noteId)
                {
                    state.rooms[0].notes.splice(index,1);
                }

            });

            return {
                ...state
            }
            // return action.noteId
        }
        default:
            return state;
    }
}