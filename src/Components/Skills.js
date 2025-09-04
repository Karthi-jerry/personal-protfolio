import React from "react";

export default function Skills() {
  return (
    <section id="skills" className="py-5">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">My Skills</h2>
          <p className="text-muted">
            Technologies and tools I use to build full-stack applications.
          </p>
        </div>

        <div className="row text-center gy-4">
          {/* Frontend Skills */}
          <div className="col-md-3 col-6">
            <i className="fab fa-html5 fa-3x text-danger mb-2"></i>
            <h6>HTML5</h6>
          </div>

          <div className="col-md-3 col-6">
            <i className="fab fa-css3-alt fa-3x text-primary mb-2"></i>
            <h6>CSS3</h6>
          </div>

          <div className="col-md-3 col-6">
            <i className="fab fa-js fa-3x text-warning mb-2"></i>
            <h6>JavaScript</h6>
          </div>

          <div className="col-md-3 col-6">
            <i className="fab fa-react fa-3x text-info mb-2"></i>
            <h6>React.js</h6>
          </div>

          {/* Backend Skills */}
          <div className="col-md-3 col-6">
            <i className="fab fa-java fa-3x text-danger mb-2"></i>
            <h6>Java</h6>
          </div>

          <div className="col-md-3 col-6">
            <i className="fas fa-leaf fa-3x text-success mb-2"></i>
            <h6>Spring Boot</h6>
          </div>

          <div className="col-md-3 col-6">
            <i className="fas fa-database fa-3x text-secondary mb-2"></i>
            <h6>MySQL</h6>
          </div>

          <div className="col-md-3 col-6">
            <i className="fab fa-git-alt fa-3x text-dark mb-2"></i>
            <h6>Git / GitHub</h6>
          </div>
        </div>
      </div>
    </section>
  );
}
