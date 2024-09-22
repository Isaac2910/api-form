import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routeReservation from './routes/reservationsRoutes.js'
const port = process.env.PORT || 3500
dotenv.config();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

const app = express();

app.use(express.json())
app.use(express.json(urlencoded({extended: true})))
app.use(cors());

app.get('/api', (req, res) => {
    res.status(200).json({ message: 'Bonjour et bienevue sur notre API de reservation.'})
})

app.use('/api', routeReservation);

app.listen(port, () => {
    console.log(`le serveur écoute bien au port ${port}`)
})

