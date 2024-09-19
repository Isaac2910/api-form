import { creerReservation, recupererReservations, recupererReservationsId } from "../models/reservations.js";

export const Reservation = async (req, res) => {
    try {
        const reservationId = await creerReservation(req.body);
        res.status(201).json({ message: "Réservation créée avec succès", reservationId });
    } catch (erreur) {
        console.error("Erreur lors de la création de la réservation :", erreur); // Ajout d'un log
        res.status(500).json({ message: `Erreur de la création de l'ajout d'une réservation`, erreur });
    }
}

export const ReservationAll = async (req, res) => {
    try {
        const reservations = await recupererReservations();
        res.status(200).json(reservations);
    } catch (erreur) {
        console.error("Erreur lors de la récupération de toutes les réservations :", erreur); // Ajout d'un log
        res.status(500).json({ message: `Erreur lors de la récupération de toutes les réservations`, erreur });
    }
}

export const ReservationById = async (req, res) => {
    try {
        const reservation = await recupererReservationsId(req.params.id);
        if (!reservation) {
            return res.status(404).json({ message: "Réservation introuvable" });
        }
        res.status(200).json(reservation);
    } catch (erreur) {
        console.error("Erreur lors de la récupération de la réservation :", erreur); // Ajout d'un log
        res.status(500).json({ message: `Erreur lors de la récupération de la réservation avec l'id ${req.params.id}`, erreur });
    }
}
