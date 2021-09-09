import {useState} from 'react'
import "./TextField.css"

function TextField(props){

    const [text, setText] = useState(props.start ? props.start : "");

    function onChange(e){
        if(props.validate){
            const valid = props.validate.call(this, e.target.value);
            if(valid){
                setText(e.target.value);
                if(props.onChange)
                    props.onChange.call(this, e.target.value);
            }
            else{
                setText(text);
            }
        }
        else{
            setText(e.target.value);
            if(props.onChange)
                props.onChange.call(this, e.target.value);
        }
        
    }

    return(
        <div>
            <input className={(props.disabled? "text-field-disabled" : "text-field")} type="text" onChange={onChange} value={text}></input>
        </div>
    )
}

export default TextField;