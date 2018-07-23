import * as noteActions from "./actions";
import {data} from "./data"


export function reducer(state = data, action) {
    switch (action.type) {
        case noteActions.SEND_NOTE: {
            const oldUsers = state.users.map((el, index) => {
                return el.id === parseInt(action.userId)
                    ? {
                        ...el,
                        notes: [
                            ...state.users[index].notes,
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
                users: oldUsers
            }
        }
        default:
            return state;
    }
}