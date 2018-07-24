
export const SEND_NOTE = '[Note] Send';
export const DELETE_NOTE = '[Note] Delete';

export class Actions {
    static sendNote(roomId, noteText, noteTheme) {
        return {
            type: SEND_NOTE,
            noteText,
            noteTheme,
            date: new Date().toString().split(' ').splice(1,3).join(' '),
            roomId
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