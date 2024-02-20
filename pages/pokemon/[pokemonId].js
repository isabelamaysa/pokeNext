import styles from '@/styles/Card.module.css'

export const getStaticPaths = async () => {
    const maxPokemons = 251
    const api = 'https://pokeapi.co/api/v2/pokemon/'

    const res = await fetch(`${api}/?limit=${maxPokemons}`)
    const data = await res.json()

    //params
    const paths = data.results.map((pokemon, index) => {
        return {
            params: { pokemonId: (index + 1).toString() },
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    
    const id = context.params.pokemonId

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

    const data = await res.json()

    return {
        props: { pokemon: data}
    }
}

import Image from "next/image"
import Link from "next/link";

export default function pokemonId({pokemon}) {
    return (
        <>
            <div className={styles.pokemon}>
                <h1 className={styles.nome}>{pokemon.name}</h1>
                <Image
                    src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
                    width="200"
                    height="200"
                    alt={pokemon.name}
                />
                <div className={styles.numero}>
                    <h3>Número:</h3>
                    <p>#{pokemon.id}</p>
                </div>
                <div className={styles.numero}>
                    <h3>Tipo:</h3>
                    <div className={styles.types_container}>
                        {pokemon.types.map((item, index) => (
                            <span
                                key={index}
                                className={`${styles.type} ${styles['type_' + item.type.name]}`}
                            >
                                {item.type.name}
                            </span>
                        ))}
                    </div>
                </div>
                <div className={styles.data_container}>
                    <div className={styles.data_height}>
                        <h4>Altura:</h4>
                        <p>{pokemon.height * 10} cm</p>
                    </div>
                    <div className={styles.data_weigth}>
                        <h4>Peso:</h4>
                        <p>{pokemon.weight / 10} kg</p>
                    </div>
                </div>
                <Link href="/" className={styles.botão}>
                    <p>Voltar para Home</p>
                </Link>
            </div>
        </>
    )
}