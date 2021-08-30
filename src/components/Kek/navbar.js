import './navbar.css'

function NavBar(props){

  return(
    <div class="navbar">
    

      {props.menuEntries.map(entry => (
         <a href={entry.link} className="navbar a.active">{entry.name}</a>
      ))}
    
          
  <a href='#' style = {{float:'right'}} className="navbar a.right">Abmelden</a>
        </div>

        
    )
}
export default NavBar; 