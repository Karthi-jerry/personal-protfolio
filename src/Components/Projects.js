import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
       
        <div className="text-center mb-5">
          <h2 className="fw-bold">My Projects</h2>
          <p className="text-muted">
            A showcase of some applications I’ve built using React & Spring Boot.
          </p>
        </div>

        <div className="row g-4">
          
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <img
                src="/Photos/taskman.jpg"
                className="card-img-top"
                alt="Task Management App"
              />
              <div className="card-body">
                <h5 className="card-title">Task Management App</h5>
                <p className="card-text text-muted">
                  A full-stack application where team leads assign tasks and employees manage them.
                  Built with React, Spring Boot & MySQL.
                </p>
              </div>
              <div className="card-footer bg-white border-0">
                <a
                  href="https://github.com/Karthi-jerry"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm btn-dark"
                >
                  <i className="fab fa-github me-2"></i> View Code
                </a>
              </div>
            </div>
          </div>

          
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <img
                src="/Photos/taskman.jpg"
                className="card-img-top"
                alt="Event Booking Platform"
              />
              <div className="card-body">
                <h5 className="card-title">Event Booking Platform</h5>
                <p className="card-text text-muted">
                  A platform for users to book and manage events seamlessly.
                  Built with React & Spring Boot REST APIs.
                </p>
              </div>
              <div className="card-footer bg-white border-0">
                <a
                  href="https://github.com/Karthi-jerry"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm btn-dark"
                >
                  <i className="fab fa-github me-2"></i> View Code
                </a>
              </div>
            </div>
          </div>

          
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <img
                src="/Photos/taskman.jpg"
                className="card-img-top"
                alt="Online Notes App"
              />
              <div className="card-body">
                <h5 className="card-title">Online Notes App</h5>
                <p className="card-text text-muted">
                  A simple online notes application with add & delete features.
                  Built using React for frontend & Spring Boot backend.
                </p>
              </div>
              <div className="card-footer bg-white border-0">
                <a
                  href="https://github.com/Karthi-jerry"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm btn-dark"
                >
                  <i className="fab fa-github me-2"></i> View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
