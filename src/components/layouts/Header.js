import React, {useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo  from '../../Assets/logo.png';
import menu from '../../Assets/menu.png';


  function Header() {
    const [show, setShow ] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scroll > 200 ){
          setShow(true)
        } else setShow(false)
      })
      return () => {
      window.removeEventListener("scroll");
      };
    }, [])

    return(
   <div className="container-fluid2">
    <div className="header">
     <nav className={`navbar navbar-expand-lg navbar-transparent ${show && "nav-active"}`} id="navigation">
      <Link to="/" className="navbar-brand">
       <img src={ logo } className="d-inline-block align-top" alt="brand logo"/>
     </Link>
     <button className="navbar-toggler order-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navicon">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          </span>
      </button>	
<div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
				<Link to="/" className="navbar-brand order-1 d-none d-lg-block" >
			     
			  </Link>
     <ul className="navbar-nav my-2 my-lg-0">
         <li className="nav-item active">
             <Link to="/" className="nav-link"><span className="sr-only">(current)</span>Home</Link>
         </li>
           <li className="nav-item">
             <Link to="/rooms" className="nav-link">Rooms</Link>
           </li>
           <li className="nav-item">
             <Link to="/Recipes" className="nav-link">Recipes</Link>
           </li>
     </ul>
     <div className="menu order-3 d-flex justify-content-end">
					<img className="img- sideIcon" src={menu}/>
				</div>
			</div>
    </nav>
    
    </div>
</div>
    )
}
export default Header;