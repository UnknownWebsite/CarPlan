import "./NavBar.css"

function NavBar(props){


    return (
        <ul className="nav-bar">
            {props.children}
        </ul>
    )
}

export default NavBar;