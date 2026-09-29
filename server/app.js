import express  from 'express';

import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
  res.send('Welcome to Notes App');
});


app.post('/notes', (req, res) => {

  const body = req.body
  res.send({body});
  // console.log(body);
});



app.listen(5500);