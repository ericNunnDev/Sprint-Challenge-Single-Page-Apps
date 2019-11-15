import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';

const Navigation = () => {
    return ( 
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/characters'>Characters</Link>
            <SearchForm />
        </nav>
     );
}
 
export default Navigation;