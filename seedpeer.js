let peerToPeer = require("./core/p2p.lib"),
    port = eval(process.env.PORT) || 3000,
    p2p = new peerToPeer(ip.address(), port);