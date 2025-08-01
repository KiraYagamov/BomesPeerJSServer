const fs = require("fs");
const { PeerServer } = require("peer");

const peerServer = PeerServer({
	port: 9000,
	ssl: {
		cert: fs.readFileSync('./ssl/domain_name.crt'),
        key: fs.readFileSync('./ssl/private.key'),
        chain: fs.readFileSync('./ssl/chain.crt')
	},
});

peerServer.on("connection", (client) => {
    console.log("Connection: " + client.id);
});

peerServer.on("disconnect", (client) => {
    console.log("Disconnection: " + client.id);
});