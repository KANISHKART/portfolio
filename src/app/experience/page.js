import "./experience.css";

export default function Experience() {
  return (
    <section id="experience" className="experience-block">
      <div className="container">
        <span className="title">Where I&apos;ve worked</span>
        <div className="companies">
          <div className="company">Tech Mahindra</div>
          <div className="company">Infosys</div>
        </div>
        <div className="expereince-summary">
          <div className="company-block">
            <div className="experience-company">Software Engineer</div>

            <div className="experience-duration">Jun 2022 - Jul 2023</div>

            <div className="experience-summary">
              <ul>
                <li>
                  Led the design and digitization of cloud native simulation
                  tool using React, Spring Boot, and PostgreSQL in AWS. This
                  transformation enhanced automation of simulations by over 70%
                  and streamlining report document management for analysis.
                </li>

                <li>
                  Implemented UI/UX wireframes, designed database schema, set up
                  a Continuous Delivery pipeline using Jenkins, utilized Git for
                  version control systems, setup Docker and Kubernetes
                  configuration within AWS EKS, resulting in enhanced
                  performance, scalability, and reliability. Collaborated
                  closely with the product organization to clarify and prune
                  requirements.
                </li>

                <li>
                  Ideated and developed a new simulation algorithm based on the
                  Monte Carlo method, resulting in an improved forecast
                  prediction by over 90%, directly correlating with a 30%
                  increase in sales. Utilized multi-threaded and asynchronous
                  programming paradigms to optimize performance and scalability
                  of the algorithm.
                </li>

                <li>
                  Managed TCP/IP, HTTP connections and optimized DNS
                  infrastructure using Route 53 on AWS Cloud, Improved the
                  product&apos;s high availability and fault-tolerance using
                  health checks and failover policies, ensuring reliability of
                  service, and enhancing user experience. This project
                  successfully completed and delivered well ahead of the
                  deadline.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="contents">
          <div className="company-block">
            <div className="experience-company">
              Software Engineer @ Tech Mahindra
            </div>
            <div className="experience-duration">Jun 2022 - Jul 2023</div>
            <div className="experience-summary">
              <ul>
                <li>
                  Led the design and digitization of cloud native simulation
                  tool using React, Spring Boot, and PostgreSQL in AWS. This
                  transformation enhanced automation of simulations by over 70%
                  and streamlining report document management for analysis.
                </li>

                <li>
                  Implemented UI/UX wireframes, designed database schema, set up
                  a Continuous Delivery pipeline using Jenkins, utilized Git for
                  version control systems, setup Docker and Kubernetes
                  configuration within AWS EKS, resulting in enhanced
                  performance, scalability, and reliability. Collaborated
                  closely with the product organization to clarify and prune
                  requirements.
                </li>

                <li>
                  Ideated and developed a new simulation algorithm based on the
                  Monte Carlo method, resulting in an improved forecast
                  prediction by over 90%, directly correlating with a 30%
                  increase in sales. Utilized multi-threaded and asynchronous
                  programming paradigms to optimize performance and scalability
                  of the algorithm.
                </li>

                <li>
                  Managed TCP/IP, HTTP connections and optimized DNS
                  infrastructure using Route 53 on AWS Cloud, Improved the
                  product&apos;s high availability and fault-tolerance using
                  health checks and failover policies, ensuring reliability of
                  service, and enhancing user experience. This project
                  successfully completed and delivered well ahead of the
                  deadline.
                </li>
              </ul>
            </div>
          </div>

          <div className="company-block">
            <div className="experience-company">
              Senior Systems Engineer @ Infosys
            </div>
            <div className="experience-duration">Sep 2019 - Jun 2022</div>
            <div className="experience-summary">
              <ul>
                <li>
                  Led the development of an API automation tool using AngularJS,
                  Spring Boot, Oracle & DynamoDB. Implemented code refactoring
                  following REST APIs principle & guidelines, leveraging
                  object-oriented design patterns (OO design).
                </li>
                <li>
                  Eliminated anti-patterns in code, employed caching mechanisms,
                  used event-based messaging system using Apache Kafka and
                  asynchronous API requests to optimize performance, resulting
                  in an 80% reduction in API execution time.
                </li>
                <li>
                  Performed code reviews, resolved system issues by
                  troubleshooting codebase, employed test-driven development
                  (TDD) by unit tests with Junit, resulting in a 60% reduction
                  in post-release defects. These efforts guaranteed the
                  tool&apos;s quality assurance.
                </li>
                <li>
                  Integrated distributed tracing with Jaeger, Kibana for log and
                  time-series analytics, and Apache Jmeter for performance
                  testing, thereby contributing to a significant increase in
                  user count from 800 to over 3000.
                </li>
                <li>
                  Collaborated with internal teams using Behavior-Driven
                  Development (BDD) to develop an image processing algorithm.
                  This involved defining behavior specifications for features
                  such as image hashing and Tesseract OCR, ensuring alignment
                  with project requirements and stakeholder expectations.
                </li>
              </ul>
            </div>
          </div>

          <div className="company-block">
            <div className="experience-company">
              Internship Trainee @ Infosys
            </div>
            <div className="experience-duration">Dec 2018 - May 2019</div>
            <div className="experience-summary">
              <ul>
                <li>
                  Worked on backend services, improved security & application
                  resiliency, and optimized database queries for a SaaS
                  application.
                </li>
                <li>
                  Gained knowledge in OWASP secure coding practices, agile
                  methodologies (Scrum/XP), debugging, and code maintenance.
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
