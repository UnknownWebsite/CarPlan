import Label from "./label";
import styles from '../styles/ScaffoldElement.module.css'
import React from "react";


export interface Props {
    /**Weather the element is disabled*/
    disabled?: boolean;

    /**The  label for the element*/
    label: String;

    /**The element*/
    children: React.ReactElement
}

function ScaffoldElement(props: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.label}>
                <Label text={props.label} disabled={props.disabled} />
            </div>

            <div className={styles.element}>
                {React.cloneElement(
                    props.children,
                    { disabled: props.disabled }
                )}
            </div>
        </div>
    );
}

export default ScaffoldElement;
