import React from 'react';

import { NavLink } from 'react-router-dom';



const Menu = () =>{

return(
    <nav className='main-nav'>
<ul >
<li>
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

</ul>
</nav>
);
}
export default Menu;