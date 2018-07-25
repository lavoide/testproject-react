import * as noteActions from "./actions";
import {data} from "./data"


export function reducer(state = data, action) {
    switch (action.type) {
        case noteActions.ADD_NOTE: {
            const oldUsers = state.users.map((el, index) => {
                return el.id === parseInt(action.userId,10)
                    ? {
                        ...el,
                        notes: [
                            ...state.users[index].notes,
                            {
                                noteText: action.noteText,
                                noteTheme: action.noteTheme,
                                noteColor: action.noteColor,
                                date: action.date
                            }
                        ]
                    }
                    : el
            });
            return {
                ...state,
                users: oldUsers
            }
        }
        case noteActions.DELETE_NOTE:{
            const oldUsers1 = state.users.map((el, index) => {
                if(el.id === parseInt(action.userId,10)){
                    state.users[action.userId].notes.splice(action.noteId,1);
                    return {
                        ...el,
                        notes: state.users[action.userId].notes
                    }
                } else {
                    return el;
                }

            });
            return {
                ...state,
                users: oldUsers1
            }
        }
        case noteActions.ADD_USER: {
            state = action.users;
            console.log(state);
            return state;
        }

        default:
            return state;
    }
}