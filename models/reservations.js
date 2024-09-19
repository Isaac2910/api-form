import db from '../config/db.js';

export const creerReservation = async (reservation) => {
    const { nom, telephone, email, date, heure, nombreDePlace } = reservation;
    const [resultat] = await db.query(`INSERT INTO reservations (nom, telephone, email, date, heure, nombre_de_place) VALUES (?, ?, ?, ?, ?, ?)`,
    [nom, telephone, email, date, heure, nombreDePlace]);
    return resultat.insertId; 
};

export const recupererReservations = async () => {
    const [resultat] = await db.query('SELECT * FROM reservations');
    return resultat;
}

export const recupererReservationsId = async (id) => {
    const [resultat] = await db.query(`SELECT * FROM reservations WHERE id = ?`, [id]);
    return resultat[0];
}
