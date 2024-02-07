import React from "react"; 
import logo from './logo192.png';

const MainContainer = () =>{
    return(
        <div className="main-container  bg-dark ">
        <div className = "col" id = "profile-container">
        <div className="profile-container">
            <h1 data-aos = "fade-down">Nihal Gour</h1>
            <div data-aos = "fade-right">Web Devloper</div>
            <p data-aos = "fade-up">I am web devloper I was completed My Fullstack Web devlopment in html, css,javascript</p>
            <button className = "btn btn-primary">Show More</button>

        </div>
        <div className = "social-media" data-aos = "fade-up">
            <a href = "/" className = "social-media-icon" >
            <i className = "fa fa-twitter rounded-circle" ></i>
            
            </a>
            <a href = "/" className = "social-media-icon" >
            <i className = "fa fa-instagram rounded-circle" ></i>
            
            </a>
            <a href = "/" className = "social-media-icon" >
            <i className = "fa fa-facebook-official rounded-circle"></i>
            
            </a>
            <a href = "/" className = "social-media-icon" >
            <i className = "fa fa-whatsapp rounded-circle"></i>
            
            </a>
        </div>
      
       
        </div>
        <div className="col profile-image">
        <img src = {logo} alt = "..." className=" profileimage rounded-circle"/>
        </div>
       </div>
    )
}
export default MainContainer;