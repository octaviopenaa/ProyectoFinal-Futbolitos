"use client"

import Card from "./Card"
import styles from "./CardTable.module.css"

export default function CardTable({Cadena}) {
    return (
        <div className = {styles.Desk}>
            {Cadena.map((jugador) => (
              <Card
              media = {jugador.Media}
              posicion = {jugador.Posicion}
              nacionalidad = {jugador.Nacionalidad}
              imagenJugador = {jugador.Imagen}
              escudo = {jugador.Equipo}
              nombreJugador = {jugador.Nombre}
              ataque = {jugador.Ataque}
              control = {jugador.Control}
              defensa = {jugador.Defensa}
              />
            ))}
        </div>
    )
}