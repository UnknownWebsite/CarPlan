import Label from "./label";
import React, { useState } from 'react';
import styles from '../styles/ScaffoldCollapse.module.css'


export interface Props {
    /**Weather the scaffold is disabled*/
    disabled?: boolean;

    /**The children */
    children: React.ReactNode

    /**The label */
    label: String;
}

function ScaffoldCollapse(props: Props) {

    const [closed, setClosed] = useState(false);

    return (
        <div>
            <div className={(closed ? styles.head : " ")} onClick={() => setClosed(!closed)}>
                <i className={styles.arrow + " " + (closed ? styles.right : styles.down) + " " + styles.inline}></i>
                <div className={styles.inline}><Label text={props.label} /> </div>
            </div>

        </div >
    )
}

export default ScaffoldCollapse;