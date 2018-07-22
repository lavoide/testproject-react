export const SEND_NOTE = '[Note] Send';

export class Actions {
    static sendNote(roomId, noteText, noteTheme) {
        return {
            type: SEND_NOTE,
            noteText,
            noteTheme,
            date: new Date().now(),
            roomId
        }
    }
}