import {useState} from 'react'
import './ToogleButton.css'

function ToogleButton(props){
    const [isActive, setActive] = useState(false)

    function action() {
        setActive(!isActive);
        if(isActive){
            props.onChangeToActive.call()
        }else{
            props.onChangeToInactive.call();
        }
    }

    return (
        <div className="ToogleButton">
            <button onClick={action}>
            </button>
        </div>
    )
}



export default ToogleButton;