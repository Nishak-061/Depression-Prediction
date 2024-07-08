import './App.css';
import web from "../src/images/img2.gif";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
      <div className="container-fluid nav_bg">
      <div className="row">
            <div className="col-11 mx-auto">
            <div className="row">
               <div className="col-md-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  
                  <h1><strong className="brand-name">Depression prediction</strong></h1>
                  <h4 className="my-3">
                    Get Yourself Tested With Easy Step
                  </h4>
                  <div className="mb-0">
                    <NavLink to="/quiz" className="btn btn-primary ">Get Started </NavLink>
                    </div>
                    </div>                  
                 <div className="cl-lg-6 order-1 order-lg-2 mb-3 header-img mb-2">
                 <img src={web} className="image-fluid animated " alt="home" width={550} height={350}  />
                </div>
                </div>
              </div> 
            </div>
          </div>           
      
    
      </section>
    </>
  );
}

export default Home;