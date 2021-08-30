import './navbar.css'

function NavBar(props){

  console.log(props.menuEntries);

  return(
    <div class="navbar">
    

      {props.menuEntries.map(entry => (
         <a href={entry.link} className="navbar a.active">{entry.name}</a>
      ))}
    
          
          
        </div>
    )
}
export default NavBar; 