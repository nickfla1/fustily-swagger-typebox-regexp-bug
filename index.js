const { TypeBoxValidatorCompiler } = require('@fastify/type-provider-typebox')
const { Type } = require('@sinclair/typebox')

const app = require('fastify')({
    logger: true
})

app.setValidatorCompiler(TypeBoxValidatorCompiler)

const Schema = Type.Object({
    bar: Type.RegExp(/[0-9]{3,10}/i)
})

app.get('/foo', {
    schema: {
        response: {
            200: Schema
        }
    }
}, () => {
    return {bar: 123}
})

module.exports = app

app.listen({host: '0.0.0.0', port: 3000})