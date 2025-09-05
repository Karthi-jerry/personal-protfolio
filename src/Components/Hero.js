import React from "react";



export default function Hero() {
  return (
    <section
      id="home"
      className="vh-100 d-flex align-items-center bg-light text-dark"
      style={{ paddingTop: "80px" }} 
    >
      <div className="container">
        <div className="row align-items-center">
          
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <img
              src={process.env.PUBLIC_URL + "/Photos/karthiJerry.jpg"}
              alt="Karthick Muthupandi"
              className="img-fluid rounded-circle shadow"
              width="250"
            />
          </div>

          
          <div className="col-md-7 text-center text-md-start">
            <h1 className="display-4 fw-bold">Hi, I'm Karthick</h1>
            <p className="lead mb-1">Full Stack Developer | React & Spring Boot</p>
            <p className="text-secondary">
              Passionate about building modern web applications and solving
              real-world problems.
            </p>

            
            <div className="mt-3">
              <a href="#contact" className="btn btn-primary me-3">
                <i className="fas fa-paper-plane me-2"></i> Hire Me
              </a>
              <a
                href="/Karthick_MuthupandiResume.pdf"
                className="btn btn-outline-dark"
                download
              >
                <i className="fas fa-download me-2"></i> Download Resume
              </a>
            </div>

            
            <div className="mt-4 d-flex justify-content-center justify-content-md-start">
              <a
                href="https://www.linkedin.com/in/karthick_muthupandi"
                target="_blank"
                rel="noreferrer"
                className="text-dark fs-4 me-4"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/Karthi-jerry"
                target="_blank"
                rel="noreferrer"
                className="text-dark fs-4 me-4"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="mailto:karthikutty1040746@gmail.com"
                className="text-dark fs-4"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


  
