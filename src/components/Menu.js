import React from 'react';

import { NavLink } from 'react-router-dom';


//the nav links at the top of the page
const Menu = (props) =>{

return(
    <nav className='main-nav'>
<ul >
<li>
    {/*props function gets called with cats*/}
 <NavLink to="/Cats">Cats</NavLink>
</li>
 <li>
<NavLink to="/Dogs">Dogs</NavLink>
</li>
<li>
<NavLink to="/Monkeys">Monkeys</NavLink>
</li>
<li>
<NavLink to="/Elephants">Elephants</NavLink>
</li> 
<li>
<NavLink to="/Search">Search</NavLink>
</li> 
</ul>
</nav>
);
}
export default Menu;