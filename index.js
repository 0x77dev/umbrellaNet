let peerToPeer = require("./core/p2p.lib"),
    ip = require("ip"),
    port = eval(process.env.PORT) || 3000,
    p2p = new peerToPeer(ip.address(), port, {
        host: ip.address(),
        port: 4000
    }),
    repl = require("repl"),
    cli = repl.start("umbrella> "),
    ProgressBar = require('ascii-progress'),
    bar = new ProgressBar({
        schema: 'Bootstrapping... :bar.gradient(red,blue)',
        total: 10
    });

cli.context.p2p = p2p;
cli.context.bar = bar;