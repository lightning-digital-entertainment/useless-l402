import express, { Request, Response } from 'express'
import apiRoutes from './features/api';
import bodyParser from 'body-parser'


const app = express()
app.use(bodyParser.json())

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

app.use('/api/', apiRoutes)

app.listen(8000, () => {
  // eslint-disable no-console
  console.log(`Listening: http://localhost:8000`);
});