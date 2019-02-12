let peerToPeer = require("./core/p2p.lib"),
    ip = require("ip"),
    port = eval(process.env.PORT) || 3000,
    p2p = new peerToPeer(ip.address(), port, {
        host: ip.address(),
        port: 4000
    }),
    repl = require("repl"),
    cli = repl.start("umbrella> ");

cli.context.p2p = p2p;