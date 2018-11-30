import React from 'react';
import  Iframe from 'react-iframe'
const Landing = () => 
<React.Fragment>
    <header className="masthead">
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in">We are hiring!</div>
          <div className="intro-heading text-uppercase">Join our team</div>
          <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
        </div>
      </div>
    </header>

  
    <section id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Services</h2>
            <h3 className="section-subheading text-muted">Vignam offers the services in staffing for developing Technology solutions, QA testing and Project management for the customer needs.</h3>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary"></i>
              <i className="fas fa-key fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Technology solutions</h4>
            <p className="text-muted">Vignam offers your engineering teams a Software Engineers with the expert knowledge of a wide array of technology stacks.</p>
            <ul className="text-muted" style={{fontStyle:"italic",textAlign:"left"}}>
              <li>Enterprise/consumer Full stack Web application development </li>
              <li>Consumer mobile applications development on both Android and iOS platforms with support of wearable devices and IOT devices.</li>
            </ul>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary"></i>
              <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">QA Testing</h4>
            <p className="text-muted">Vignam offers Quality-engineering services, which will help our customers to get their product out with high quality. </p>
            <ul className="text-muted" style={{fontStyle:"italic",textAlign:"left"}}>
              <li>QA and Testing consulting </li>
              <li>Manual testing</li>
              <li>Mobile testing</li>
            </ul>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary"></i>
              <i className="fas fa-project-diagram fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Project Management</h4>
            <p className="text-muted">Vignam offers Project management services.</p>
            <ul className="text-muted" style={{fontStyle:"italic",textAlign:"left"}}>
              <li>Agile Scum </li>
              <li>Traditional water fall model</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
 { /* About Section */}
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">About</h2>
            <h3 className="section-subheading text-muted">Vignam Systems is a US based company, located in San Ramon, California. We offer a wide range of software and technology staffing solutions.</h3>
           </div>
        </div>
        <div className="row">
          <div className="col-lg-12 mx-auto text-center staff_image">
            <img className="object-fit_cover mx-auto img-fluid" src="img/about/about-us.jpg" alt=""/>
          </div>
      </div>
       <div className="row">
          <div className="col-lg-12 text-center">
            <h4 className="service-heading">Our team expertise enables us to provide services in the area of </h4>
            <ul className="text-muted" style={{fontStyle:"italic",textAlign:"left"}}>
              <li>Full stack web application development </li>
              <li>Mobile Application development on both iOS and Android</li>
              <li>Project management </li>
              <li>QA software testing</li>
            </ul>
          </div>
        </div>
     
      </div>
    </section>

 
    <section className="bg-light" id="team">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src="img/team/1.jpg" alt=""/>
              <h4>Kay Garland</h4>
              <p className="text-muted">Lead Designer</p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src="img/team/2.jpg" alt=""/>
              <h4>Larry Parker</h4>
              <p className="text-muted">Lead Marketer</p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src="img/team/3.jpg" alt=""/>
              <h4>Diana Pertersen</h4>
              <p className="text-muted">Lead Developer</p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
          </div>
        </div>
      </div>
    </section>

  
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <a href="#">
              <img className="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt=""/>
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="#">
              <img className="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt=""/>
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="#">
              <img className="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt=""/>
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="#">
              <img className="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt=""/>
            </a>
          </div>
        </div>
      </div>
    </section>


    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Contact Us</h2>
            <h3 className="section-subheading text-muted hidden">At Vignam Systems, we build long term relationships with our technical professionals .</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <h4 className="service-heading" style={{color:"white"}}>We build long term relationships with our technical professionals by</h4>
            <ul className="text-muted" style={{fontStyle:"italic",textAlign:"left"}}>
              <li> Consistently providing them with great career opportunities. </li>
              <li> Providing opportunities to excel and grow.</li>
              <li>Matching their technical and industry experience to jobs worthy of their abilities </li>
              <li> Vignam Systems values its employees and offers a competitive package.</li>
            </ul>
            <p  style={{color:"white"}}>Submit a detailed resume with education, Project experience and geographic preference at the following address via email: <a href="mailto:resume@vignamsys.com?subject=Resume of ">resume@vignamsys.com</a></p>
          </div>
        </div>
      </div>
    </section>

    </React.Fragment>

 
export default Landing;