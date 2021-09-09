import {useState} from 'react'
import './ToggleButton.css'

function ToggleButton(props){
    const [isActive, setActive] = useState(props.startState ? props.startState : false)

    function action() {
        if(!props.disabled){
            setActive(!isActive);
            if(isActive){
                props.onChangeToActive.call()
            }else{
                props.onChangeToInactive.call();
            }
        }
    }

    return (
        <div className="margin">
            <div className="switch" onClick={action}>
                <div className={isActive? "slider-on" : ""}/>
                <span className={(props.round? "round" : "") + (props.disabled? " slider-disabled" : " slider")}></span>
            </div>
        </div>
    )
}



export default ToggleButton;