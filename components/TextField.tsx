import { useState, useRef, useEffect } from 'react';
import styles from './../styles/TextField.module.css';

export interface Props {
    /**Weather the button is disabled*/
    disabled?: boolean;

    /**Callback for checking weather the entered text is valid */
    validate?: (newText: string) => boolean;

    /**Callback for when the text changed
     * Only called when the validation callback returned true or no callback is supplied */
    onChange?: (newText: string) => void;

    /**The start text of the textfield */
    start?: string;

    /**The placeholder text */
    placeholder?: string;
}

function TextField(props: Props) {

    const [text, setText] = useState(props.start ? props.start : "");
    const [width, setWidth] = useState(0);
    const span = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (span != null && span.current != null) {
            setWidth(span.current.offsetWidth);
        }
    }, [text]);

    function onChange(e: React.FormEvent<HTMLInputElement>) {
        if (!props.disabled) {
            if (props.validate) {
                const valid = props.validate(e.currentTarget.value)
                if (valid) {
                    setText(e.currentTarget.value);
                    if (props.onChange)
                        props.onChange(e.currentTarget.value);
                }
                else {
                    setText(text);
                }
            }
            else {
                setText(e.currentTarget.value);
                if (props.onChange)
                    props.onChange(e.currentTarget.value);
            }
        }

    }

    return (
        <div>
            <div className={styles.text}>
                <input className={(props.disabled ? styles.disabled : styles.enabled)} style={{ width }} disabled={props.disabled} type="text" onChange={onChange} value={text} placeholder={props.placeholder} />
                <span className={styles.hidden} ref={span}>{text.trim() == "" ? props.placeholder : text}</span>
            </div>
            <div className={styles.spacer} style={{ width }}></div>
        </div>
    )
}

export default TextField;