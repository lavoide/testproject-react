
export const ADD_NOTE = '[Note] Add';
export const ADD_USER = '[User] Add';
export const DELETE_NOTE = '[Note] Delete';
export const EDIT_NOTE = '[Note] Edit';
export const READ_NOTE = '[Note] Text Updated';
export const READ_THEME = '[Note] Theme Updated';
export const READ_COLOR = '[Note] Color Updated';
export const LOGIN_LOGOUT = '[Form] Visibility Changed';

export class Actions {
    static addNote(userId, noteText, noteTheme, noteColor) {
        return {
            type: ADD_NOTE,
            noteText,
            noteTheme,
            noteColor,
            date: new Date().toString().split(' ').splice(1,3).join(' '),
            userId
        }
    }
    static addUser(users) {
        return {
            type: ADD_USER,
            users
        }
    }
    static deleteNote(noteId,userId) {
        return {
            type: DELETE_NOTE,
            noteId,
            userId
        }
    }
    static editNote(noteId,userId) {
        return {
            type: EDIT_NOTE,
            noteId,
            userId
        }
    }
    static readNote(noteText) {
        return {
            type: READ_NOTE,
            noteText
        }
    }
    static readTheme(noteTheme) {
        return {
            type: READ_THEME,
            noteTheme
        }
    }
    static readColor(noteColor) {
        return {
            type: READ_COLOR,
            noteColor
        }
    }
    static changeVis(vis){
        return {
            type: LOGIN_LOGOUT,
            vis
        }
    }
}