import express, { RequestHandler } from 'express';
import { createPostsHandler, listPostsHandler } from './controllers/PostHandler';

const app = express();
app.use(express.json())

// const posts: any[] = []

const requestLoggerMiddleware: RequestHandler = (req, _res, next) => {
  console.log(req.method, req.path, '-Body: ', req.body)
  next();
}

app.use(requestLoggerMiddleware);


app.get('/posts', listPostsHandler)
app.post('/posts', createPostsHandler)

app.listen(8080)