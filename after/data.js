const ROLE = {
    ADMIN: 'admin',
    BASIC: 'basic'
}

module.exports = {
    ROLE: ROLE,
    users: [
        { id: 1, name: 'Midlaj', role: ROLE.ADMIN },
        { id: 2, name: 'Minha', role: ROLE.BASIC },
        { id: 3, name: 'Akhil', role: ROLE.BASIC }
    ],
    projects: [
        { id: 1, name: "Midlaj's Project", userId: 1 },
        { id: 2, name: "Minha's Project", userId: 2 },
        { id: 3, name: "Akhil's Project", userId: 3 }
    ]
}