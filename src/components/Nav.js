import {Link} from 'react-router-dom';

function Nav() {
    const navStyle={
        color: 'white',
    };

    return (
      <nav>
          <Link style={navStyle} to='/'>
          <h2>Coin Assistant</h2>
          </Link>

          <ul className='nav-links'>
          <Link style={navStyle} to='/direct'>
              <li>Direct order</li>
              </Link>
          <Link style={navStyle} to='/rules'>
              <li>Trade Rules</li>
              </Link>
              <Link style={navStyle} to='/wallet'>
              <li>Wallet</li>
              </Link>
              <Link style={navStyle} to='/about'>
              <li>About</li>
              </Link>
          </ul>
      </nav>
    );
  }
  
  export default Nav