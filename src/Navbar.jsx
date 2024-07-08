import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
      <>
         <div className="container-fluid nav_bg">
          <div className="row">
           <div className="col-12 mx-auto"> 
              <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                  <NavLink className="navbar-brand" to="/">
                    Depression prediction
                  </NavLink>
                  <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapCe" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div 
                    className="collapse navbar-collapse" 
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                      <NavLink className="nav-link active" aria-current="page" to="/"><b>
                         Home  </b>
                       </NavLink>
                     </li>
                     <li className="nav-item">
                       <NavLink className="nav-link" to="/about"><b>
                         About</b>
                       </NavLink>
                       </li>
                       <li className="nav-item">
                       <NavLink className="nav-link" to="/quiz"><b>
                         Quiz Based Test</b>
                       </NavLink>
                     </li> 
                     <li className="nav-item">
                       <NavLink className="nav-link" to="/result"><b>
                         Result</b>
                       </NavLink>
                     </li> 
                    </ul>
                 </div>
                </div>
             </nav>
            </div>
          </div> 
          
        </div> 
     </>
  );
};

export default Navbar;