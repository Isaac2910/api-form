import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routeReservation from './routes/reservationsRoutes.js'
const port = process.env.PORT || 3500
dotenv.config();

const app = express();

app.use(express.json())
app.use(express.json(urlencoded({extended: true})))

app.get('/api', (req, res) => {
    res.status(200).json({ message: 'Bonjour et bienevue sur notre API de reservation.'})
})

app.use('/api', routeReservation);

app.listen(port, () => {
    console.log(`le serveur écoute bien au port ${port}`)
})

