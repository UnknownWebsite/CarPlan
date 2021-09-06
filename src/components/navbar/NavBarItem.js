import './NavBarItem.css'

function NavBarItem(props){


    return (
        <li className={"nav-bar-item " + (props.right? "right" : "")}>
            <a href={props.target}>{props.children}</a>
        </li>
    )
}

export default NavBarItem;