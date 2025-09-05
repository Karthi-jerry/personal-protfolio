import React from "react";

export default function About() {
  return (
    <section id="about" className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">
          
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <img
              src={process.env.PUBLIC_URL + "/Photos/karthiJerry.jpg"}
              alt="About Karthick"
              className="img-fluid rounded shadow"
              width="300"
            />
          </div>

          
          <div className="col-md-7">
            <h2 className="fw-bold mb-3">About Me</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
        I'm <span className="font-bold text-indigo-600">Karthick Muthupandi</span>, 
        a passionate aspiring developer with a strong interest in building scalable and 
        modern web applications. I completed my{" "}
        <span className="font-semibold text-indigo-600">
          Bachelor of Commerce (B.Com)
        </span> degree, and later transitioned my career into{" "}
        <span className="font-semibold text-indigo-600">Full Stack Development</span>.
      </p>

      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        Skilled in <span className="font-medium">React.js</span> for frontend and{" "}
        <span className="font-medium">Spring Boot</span> for backend development, 
        I enjoy solving real-world problems through clean code and efficient design.
      </p>

      <p className="text-lg leading-relaxed text-gray-700">
        My goal is to contribute to impactful projects, continuously improve my 
        technical expertise, and grow as a professional Full Stack Developer in 
        the IT industry.
      </p>

           
            <ul className="list-unstyled mt-3">
              <li>
                <b>Email:</b>{" "}
                <a href="mailto:karthikutty1040746@gmail.com">
                  karthikutty1040746@gmail.com
                </a>
              </li>
              <li>
                <b>Phone:</b> +91 6383304012
              </li>
              <li>
                <b>Location:</b> Chennai, India
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
