
export const ADD_NOTE = '[Note] Add';

export const ADD_USER = '[User] Add';
export const DELETE_NOTE = '[Note] Delete';

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

}