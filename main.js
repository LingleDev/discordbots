const fetch = require('node-fetch')
const base = "https://discordbots.org/api/"

module.exports = class DBL {
  constructor(token) {
    Object.defineProperty(this, "token", {value: token, writable: true })
  }
  
  updateStats(opts) {
    return new Promise((res,rej) => {
      fetch(`${base}bots/stats`, {
        method: "POST",
        headers: {"Content-Type": "application/json", "Authorization": this.token},
        body: JSON.stringify({server_count: opts.server_count, shards: opts.shards, shard_id: opts.shard_id, shard_count: opts.shard_count })
      })
      .then(check)
      .then(bOre => {
        if (bOre instanceOf Error) throw bOre; else {
          res(bOre)
        }
      })
      .catch(rej)
    })
  }
}

function check(r) {
  if (r.ok) {
    return r.json()
  } else {
    return new Error("error"); 
  }
}
