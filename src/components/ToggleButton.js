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
        <div className="ToogleButton" onClick={action} >
            
        </div>
    )
}



export default ToogleButton;