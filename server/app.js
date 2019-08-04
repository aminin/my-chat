import WebSocket from 'ws'

const wss = new WebSocket.Server({ port: 8989 });

wss.getUniqueID = function () {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4();
};

let users = {};

const broadcast = (data, ws) => {
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN && client !== ws) {
            client.send(JSON.stringify(data));
        }
    });
};

wss.on('connection', (ws) => {
    ws.id = wss.getUniqueID();
    ws.on('message', (message) => {
        const data = JSON.parse(message);
        switch (data.type) {
            case 'ADD_USER':
                users[ws.id] = { name: data.name, id: ws.id };
                ws.send(JSON.stringify({ type: 'USERS_LIST', users: Object.values(users)}));
                broadcast({ type: 'USERS_LIST', users: Object.values(users)}, ws);
                break;
            case 'ADD_MESSAGE':
                broadcast({
                    type: 'ADD_MESSAGE',
                    message: data.message,
                    author: data.author
                }, ws);
                break;
            default:
                break;
        }
    });
    ws.on('close', () => {
        delete users[ws.id];
        broadcast({ type: 'USERS_LIST', users: Object.values(users)}, ws);
    });
});
