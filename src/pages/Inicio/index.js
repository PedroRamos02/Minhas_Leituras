import Card from "components/Card";
import Titulo from "components/Titulo";
import videos from 'json/db.json';
import styles from './Inicio.module.css';

function Inicio() {
    return (
        <>
            <Titulo>
                <h1>Lista de livros que desejo ler!</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id}></Card>
                })}
            </section>
        </>
    )
}

export default Inicio;