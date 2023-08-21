import express, { RequestHandler } from 'express';
import { db } from './datastore';

const app = express();
app.use(express.json())

// const posts: any[] = []

const requestLoggerMiddleware: RequestHandler = (req, _res, next) => {
  console.log(req.method, req.path, '-Body: ', req.body)
  next();
}

app.use(requestLoggerMiddleware);


app.get('/posts', (_request, response) => {
  response.send({ posts: db.listPosts() })
  // console.log("Done")
})

app.post('/posts', (req, res) => {
  const post: any = req.body
  db.createPost(post)
  res.sendStatus(200)
})
// app.get('/', (req, res) => {
//   res.end("ok")
// })


app.listen(8080)