
export const SEND_NOTE = '[Note] Send';

export const ADD_USER = '[User] Add';
export const DELETE_NOTE = '[Note] Delete';

export class Actions {
    static sendNote(userId, noteText, noteTheme) {
        return {
            type: SEND_NOTE,
            noteText,
            noteTheme,
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
    static deleteNote(noteId,roomId) {
        return {
            type: DELETE_NOTE,
            noteId,
            roomId
        }
    }

}