const fastify = require('fastify')
const nodeEnv = process.env.NODE_ENV || 'development'

const app = fastify(
    {
        logger: true
    }
)

app.get('/', async () => {
    return { status: 'ok', 
    nodeEnv     
}
})

app.listen(91, '0.0.0.0') 