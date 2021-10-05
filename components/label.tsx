import styles from '../styles/Label.module.css';

export interface Props {
    /**Weather the button is disabled*/
    disabled?: boolean;

    /**Text */
    text: String;
}

function Label(props: Props) {

    return (
        <p className={props.disabled ? styles.disabled : styles.enabled}>
            {props.text}
        </p>
    )
}

export default Label;