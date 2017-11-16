const express = require('express');
const next = require('next');
var bodyParser = require('body-parser');
const LRUCache = require('lru-cache');
const fs = require('fs');
// const graphqlHTTP = require('express-graphql');
// const {buildSchema} = require('graphql')

// var { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
// var { makeExecutableSchema } = require('graphql-tools');

const port = parseInt(process.env.PORT, 10) || 8080;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: '.', dev });
const handle = app.getRequestHandler();

// const LZString = require('lz-string');
const base64ToImage = require('base64-to-image');

const scripts = require("./scripts.js");

// var typeDefs = [`
// type Query {
//   hello: String
// }

// schema {
//   query: Query
// }`];

// var resolvers = {
//   Query: {
//     hello(root) {
//       return 'world';
//     }
//   }
// };

// var schema = makeExecutableSchema({typeDefs, resolvers});

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 // 1hour
});


app.prepare()
.then(() => {
  const server = express()
  
  server.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
  server.use(bodyParser.json({limit:'50mb'}));

  // Use the `renderAndCache` utility defined below to serve pages
  server.get('/', (req, res) => {
    renderAndCache(req, res, '/index')
  });

  //////////////////////////////////////////////
  //Post image to image_store/processing
  //
  //
  server.post('/api/post', (req, res) => {
    var newData = req.body.data;
    var path = "./image_store/processing/"
    var pathToRendered = "./image_store/rendered/"
    console.log(req.body.data);

    var name = base64ToImage(newData,path).fileName;

    scripts.run(res, name);
  });

//   server.get('/graphiql', (req, res) => {
//     renderAndCache(req, res, '/GraphiqlTest')
//   })

  server.get('*', (req, res) => {
    return handle(req, res)
  });

//   server.use('/graphql', bodyParser.json(), graphqlExpress({schema}));

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  });
});

/*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
function getCacheKey (req) {
  return `${req.url}`
}

function renderAndCache (req, res, pagePath, queryParams) {
  const key = getCacheKey(req)

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    console.log(`CACHE HIT: ${key}`)
    res.send(ssrCache.get(key))
    return
  }

  // If not let's render the page into HTML
  app.renderToHTML(req, res, pagePath, queryParams)
    .then((html) => {
      // Let's cache this page
      console.log(`CACHE MISS: ${key}`)
      ssrCache.set(key, html)

      res.send(html)
    })
    .catch((err) => {
      app.renderError(err, req, res, pagePath, queryParams)
    });
}