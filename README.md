## Run

```sh
node index.js
```

## Description
Using `Type.RegExp` from `TypeBox` throws a `FST_ERR_SCH_SERIALIZATION_BUILD`.
This seems to be the case since they've renamed the type from `RegEx` to `RegExp` as the error was not there in older versions.

Example of the thrown error:
```
/projects/typebox-swagger-fastify-bug/node_modules/fastify/lib/route.js:429
              throw new FST_ERR_SCH_SERIALIZATION_BUILD(opts.method, url, error.message)
                    ^
FastifyError [Error]: Failed building the serialization schema for GET: /foo, due to error schema is invalid: data/properties/bar/type must be equal to one of the allowed values
    at Boot.<anonymous> (/projects/typebox-swagger-fastify-bug/node_modules/fastify/lib/route.js:429:21)
    at Object.onceWrapper (node:events:631:28)
    at Boot.emit (node:events:529:35)
    at /projects/typebox-swagger-fastify-bug/node_modules/avvio/boot.js:102:12
    at /projects/typebox-swagger-fastify-bug/node_modules/avvio/boot.js:437:7
    at done (/projects/typebox-swagger-fastify-bug/node_modules/avvio/lib/plugin.js:226:5)
    at check (/projects/typebox-swagger-fastify-bug/node_modules/avvio/lib/plugin.js:250:9)
    at node:internal/process/task_queues:140:7
    at AsyncResource.runInAsyncScope (node:async_hooks:203:9)
    at AsyncResource.runMicrotask (node:internal/process/task_queues:137:8) {
  code: 'FST_ERR_SCH_SERIALIZATION_BUILD',
  statusCode: 500
}
```
