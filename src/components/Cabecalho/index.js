import { Link } from "react-router-dom";
import logo from './logo.png'
import styles from './Cabecalho.module.css';
import CabecalhoLink from "components/CabecalhoLink/Index";


function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt="Logo do Cinetag"></img>
            </Link>
            <nav>
                <CabecalhoLink url="./">
                    Interesse
                </CabecalhoLink>
                <CabecalhoLink url="./Favoritos">
                    Já lidos
                </CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho;