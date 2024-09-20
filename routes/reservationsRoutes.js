import express from 'express'
import { Reservation, ReservationAll, ReservationById } from '../controller/reservationsControllers.js';

const router = express.Router();

router.get('/reservations', ReservationAll);
router.get('/reservations/:id', ReservationById);
router.post('/reservations', Reservation);

export default router;
