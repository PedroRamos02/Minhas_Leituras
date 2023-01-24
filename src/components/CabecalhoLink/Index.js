import { Children } from 'react';
import styles from './CabecalhoLink.module.css';

function CabecalhoLink ({ url, Children}){
    return (
        <link to={url} className={styles.link}>
            {Children}
        </link>
    )
}

export default CabecalhoLink;