import { useState } from 'react'
import styles from '../styles/ToggleButton.module.css';

export interface Props {
    /**The start state of the button*/
    startState?: boolean;

    /**Weather the button is disabled*/
    disabled?: boolean;

    /**Weather the button should be round */
    round?: boolean;

    /**Callback for when the button is switched off */
    onChangeToInactive?: () => void;

    /**Callback for when the button is switched on */
    onChangeToActive?: () => void;

    /**Callback for when the button is switched */
    onChange?: (state: boolean) => void;
}

function ToggleButton(props: Props) {
    const [isActive, setActive] = useState(props.startState ? props.startState : false)

    function action() {
        if (!props.disabled) {
            setActive(!isActive);
            if (isActive) {
                if (props.onChangeToActive != null)
                    props.onChangeToActive();
            } else {
                if (props.onChangeToInactive != null)
                    props.onChangeToInactive();
            }
            if (props.onChange != null)
                props.onChange(isActive);
        }
    }

    return (
        <div className={styles.margin}>
            <div className={styles.switch} onClick={action}>
                <div className={isActive ? styles.on : ""} />
                <span className={(props.round ? styles.round : "") + " " + (props.disabled ? styles.disabled : styles.slider)}></span>
            </div>
        </div>
    )
}



export default ToggleButton;