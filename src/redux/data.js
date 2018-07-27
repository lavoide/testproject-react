export let data = {
    users: [
        {
            name: 'Fedya',
            password: '',
            id: 0,
            notes: []
        },
        {
            name: 'John',
            password: '1234',
            id: 1,
            notes: [

            ]
        },
        {
            name: 'Ivan',
            password: '1234',
            id: 2,
            notes: [
                {
                    noteText: "This is my note",
                    noteTheme: "This is my theme",
                    noteColor: "yellow",
                    date: new Date().toString().split(' ').splice(1,3).join(' '),
                }
            ]
        },
        {
            name: 'Nik',
            password: '1234',
            id: 3,
            notes: []
        },
        {
            name: 'Bill',
            password: '1234',
            id: 4,
            notes: []
        }
    ],
    username: "Anonymous",
    password: ""
};