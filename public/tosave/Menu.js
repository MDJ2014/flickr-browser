import React from 'react';

import { NavLink } from 'react-router-dom';



const Menu = (props) =>{

return(
    <nav className='main-nav'>
<ul >
<li>
    {/*props function gets called with cats*/}
 <NavLink to="/Cats"  onClick={() =>{this.setState({isSearching: false})}}>Cats</NavLink>
</li>
<li>
<NavLink to="/Dogs"  onClick={() =>{this.setState({isSearching: false})}}>Dogs</NavLink>
</li>
<li>
<NavLink to="/Monkeys"  onClick={() =>{this.setState({isSearching: false})}}>Monkeys</NavLink>
</li>
<li>
<NavLink to="/Elephants"  onClick={() =>{this.setState({isSearching: false})}}>Elephants</NavLink>
</li>

</ul>
</nav>
);
}
export default Menu;