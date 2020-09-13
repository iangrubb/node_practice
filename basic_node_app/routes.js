
const fs = require('fs')

const requestHandler = (req, res) => {
    const { url, method } = req

    if (url === "/") {
        res.setHeader('Content-Type', 'text/html')
        res.write(`
            <html>
                <head><title>Basic Site</title></head>
                <body>
                    <form action="/message" method="POST">
                        <input type="text" name="message"
                        placeholder="beef">
                        <button type="submit">Send</button>
                    </form>
                </body>
            </html>
        `)
        return res.end()
    }
    
    if (url === '/message' && method === 'POST') {
        const body = []
        req.on('data', (chunk) => {
            body.push(chunk)
        })
        
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split("=")[1]
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302
                res.setHeader('Location', '/')
                return res.end()
            })
        })
    }

}

module.exports = requestHandler

