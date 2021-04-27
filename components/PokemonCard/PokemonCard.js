import React from 'react'
import styles from '../../styles/explore.module.css'

const PokemonCard = (props) => {

    return (
        <div className={styles.pokecardCard}>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`} className={styles.pokecardImg}/>
            <h1 className={styles.pokecardTitle}>{props.name}</h1>
            <p className="pokecard-data">Type: {props.type}</p>
            <p className="pokecard-data">Exp: {props.exp}</p>
        </div>
    )
}

export default PokemonCard
