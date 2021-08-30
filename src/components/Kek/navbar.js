import './navbar.css'

function NavBar(props){

  return(
    <div class="navbar">
    

      {props.menuEntries.map(entry => (
         <a href={entry.link} className={entry.class}>{entry.name}</a>
      ))}
    
          
          
        </div>
    )
}
export default NavBar; 
