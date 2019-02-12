const p2p = require('p2p');
class peerToPeer {
    constructor(host, port, wellKnownPeers, serviceInterval) {
        if (serviceInterval == undefined) {
            this.serviceInterval = "10s";
        } else {
            this.serviceInterval = serviceInterval;
        }
        this.wellKnownPeers = wellKnownPeers;
        this.host = host;
        this.port = port;
        this.peer = p2p.peer({
            host: this.host,
            port: this.port,
            wellKnownPeers: this.wellKnownPeers,
            serviceInterval: this.serviceInterval
        });
    }
}
module.exports = peerToPeer;