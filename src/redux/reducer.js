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
            const newUsers = [...state.users,{
                id: action.id,
                name: action.user,
                password: action.pass,
                notes: []

            }];
            return{
                ...state,
                users: newUsers
            }
        }
        case noteActions.EDIT_NOTE: {
            const oldUsers1 = state.users.map((el, index) => {
                if(el.id === parseInt(action.userId,10)){
                    let x = state.users[action.userId].notes[action.noteId];
                    state.users[action.userId].notes.splice(action.noteId,1);
                    return {
                        ...el,
                        notes: state.users[action.userId].notes,
                        edited: x
                    }
                } else {
                    return el;
                }

            });
            const editedNote = oldUsers1[action.userId].edited;
            return {
                ...state,
                users: oldUsers1,
                editedNote,
                noteText: editedNote.noteText,
                noteTheme: editedNote.noteTheme,
                noteColor: editedNote.noteColor
            }
        }
        case noteActions.USER_LOGIN: {
            const hasUser = state.users.findIndex((el, index) => {
                if(el.name===action.username){
                    return index;
                }
                else return false;
            });
            return{
                ...state,
                hasUser
            }
        }
        case noteActions.USER_PASSWORD: {
            const hasPassword = state.users.findIndex((el, index) => {
                if(el.password===action.password){
                    return index;
                }
                else return false;
            });
            return{
                ...state,
                ...state,
                hasPassword
            }
        }
        case noteActions.READ_NOTE: {
            return{
                ...state,
                noteText:action.noteText
            }
        }
        case noteActions.READ_THEME: {
            return{
                ...state,
                noteTheme:action.noteTheme
            }
        }
        case noteActions.READ_COLOR: {
            return{
                ...state,
                noteColor: action.noteColor
            }
        }
        case noteActions.LOGIN_LOGOUT: {
            return{
                ...state,
                loginVisibility: action.vis
            }
        }
        case noteActions.FORM_CLICK: {
            return{
                ...state,
                plusVisibility: action.vis
            }
        }
        case noteActions.FORM_USERNAME: {
            return{
                ...state,
                username: action.username
            }
        }
        case noteActions.FORM_PASSWORD: {
            return{
                ...state,
                password: action.password
            }
        }
        default:
            return state;
    }
}