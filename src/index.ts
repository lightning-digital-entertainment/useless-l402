import express from 'express'
import apiRoutes from './features/api';
import bodyParser from 'body-parser'


    const app = express()
app.use(bodyParser.json())

app.use('/api/', apiRoutes)

app.listen(8000, () => {
  console.log(`Listening: http://localhost:8000`);
});
