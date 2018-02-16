const Ipfs = require('ipfs')

const node = new Ipfs({
  repo: './repo-' + Math.random(),
  config: {
    Addresses: {
      Swarm: [
        '/ip4/127.0.0.1/tcp/4003/ws',
        '/ip4/127.0.0.1/tcp/4002',
        '/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star/'
      ]
    }
  }
})

node.once('ready', () => {
  console.log('Node running')
  setInterval(() => {
    node.swarm.peers((err, peers) => {
      if (err) throw err
      console.log('peers', peers.length)
    })
  }, 1000)
})

node.on('error', (err) => {
  throw err
})
