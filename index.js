const http = require('http')
const server = http.createServer()
const server2 = http.createServer()

server.listen(8080, () => {})

server2.listen(8080, () => {})

process.on('uncaughtException', err => {
  process.stderr.write(`Caught Exception. Err: ${err}`)
  process.exit(1)
})
