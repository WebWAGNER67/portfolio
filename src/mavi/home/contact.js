import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { MouseContext } from "../context/mouseContext";
import { Helmet } from 'react-helmet';

const Contact = () => {
  const { cursorChangeHandler } = useContext(MouseContext);

  const currentYear = new Date().getFullYear();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to the server for email processing
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        alert('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred. Please try again later.');
    }
  };
  return (
    <React.Fragment>
      <Helmet>
        {/* SEO Page title tag */}
        <title>Contact Mavi - Personal Portfolio React Template</title>
        {/* Meta description */}
        <meta name="description" content="Bootstrap 5 Responsive Contact Mavi - Personal Portfolio React Template" />;

        {/* Twitter card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://avstechnolabs.com/og-images/seo-banner.png" />
        <meta name="twitter:title" content="Contact Mavi - Personal Portfolio React Template" />
        <meta name="twitter:creator" content="@Contact mavi" />
        <meta name="twitter:site" content="@Contact mavi" />
        <meta name="twitter:description" content="Bootstrap 5 Responsive Contact Mavi - Personal Portfolio React Template" />

        {/* Facebook card meta tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mavi.avstechnolabs.com/contact" />
        <meta property="og:title" content="Contact Mavi - Personal Portfolio React Template"
        />
        <meta property="og:description" content="Bootstrap 5 Responsive Contact Mavi - Personal Portfolio React Template"
        />
        <meta property="og:image" content="https://avstechnolabs.com/og-images/seo-banner.png"
        />
      </Helmet>
      {/* Contact section Start  */}
      <section id="contact" className="section active">
        <div className="homecolor-box"></div>
        <div className="common_bg animate__animated animate__zoomIn">
          <div className="container">
            {/* Contact-page Start  */}
            <div className="contact-section">
              {/* Contact-Section Title  */}
              <div className="row">
                <div className="col-12">
                  <div className="section-title animate__animated animate__fadeInDown animate__delay-1s">
                    <p className="common-desctiption">N'hésitez pas à me contacter à tout moment</p>
                    <h1 className="common-title">Mon <span>contact</span></h1>
                    <div className="animated-bar"></div>
                  </div>
                </div>
              </div>
              {/* Contact-Section Title End */}
              {/* Contact Form Start  */}
              <div className="contact-section">
                <div className="row">
                  {/* Contact form  */}
                  <div className="col-lg-7 col-12 ">
                    <form className="contact-form animate__animated animate__fadeInLeft animate__delay-2s" id="contact-form">
                      <h4 className="content-title">Me Contacter</h4>
                      <div className="row">
                        <div className="col-12 col-md-6 form-group">
                          <input
                            className="form-control"
                            id="contact-name"
                            type="text"
                            name="name"
                            placeholder="Nom"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col-12 col-md-6 form-group">
                          <input
                            className="form-control"
                            id="contact-email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col-12 form-group">
                          <input
                            className="form-control"
                            id="contact-subject"
                            type="text"
                            name="subject"
                            placeholder="Sujet"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col-12 form-group form-message">
                          <textarea
                            className="form-control"
                            id="contact-message"
                            name="message"
                            placeholder="Message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                          ></textarea>
                        </div>
                        <div className="col-12 mb-4 form-submit">
                          <button
                            className="clickbtn button-main button-scheme"
                            id="contact-submit"
                            type="submit"
                            onClick={handleSubmit}
                          >
                            Envoyer
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* Contact form End  */}
                  {/* Contact info  */}
                  <div className="col-lg-5 col-12 ">
                    <div className="contact-info animate__animated animate__fadeInRight animate__delay-3s">
                      <h4 className="content-title">Informations de contact</h4>
                      <p className="info-description">Toujours disponible pour travailler en freelance si le bon projet se présente, n'hésitez pas à me contacter !</p>
                      <ul className="list-unstyled list-info" style={{ display: 'inline-grid' }}>
                        <li>
                          <div className="media d-flex align-items-center"><span className="info-icon"><i
                            className="fas fa-user-alt"></i></span>
                            <div className="media-body info-details">
                              <h6 className="info-type">Nom</h6><span className="info-value">Eric WAGNER</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="media d-flex align-items-center"><span className="info-icon"><i
                            className="fas fa-map-pin"></i></span>
                            <div className="media-body info-details">
                              <h6 className="info-type">Localisation</h6><span className="info-value">12 rue de la Charrue, 67300 Schiltigheim</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="media d-flex align-items-center"><span className="info-icon"><i
                            className="fas fa-phone-alt"></i></span>
                            <div className="media-body info-details">
                              <h6 className="info-type">Appelez-moi</h6><span className="info-value"><a href="tel:+33695214644" onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}>+33 6 95 21 46 44</a></span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="media d-flex align-items-center"><span className="info-icon"><i
                            className="fas fa-envelope"></i></span>
                            <div className="media-body info-details">
                              <h6 className="info-type">Ecrivez -moi un mail</h6><span className="info-value"><a
                                href="mailto:contact@ericwagner.fr" onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}>contact@ericwagner.fr</a></span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* Social media icons */}
                    <div className="fixed-block d-flex animate__animated animate__jackInTheBox animate__delay-3s">
                      <ul className="list-unstyled social-icons p-3">
                        <li><Link to={'/'} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}><i className="fab fa-twitter"></i></Link></li>
                        <li><Link to={'/'} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}><i className="fab fa-facebook-square"></i></Link></li>
                        <li><Link to={'/'} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}><i className="fab fa-linkedin"></i></Link></li>
                        <li><Link to={'/'} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}><i className="fab fa-github-square"></i></Link></li>
                        <li><Link to={'/'} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}><i className="fab fa-instagram-square"></i></Link></li>
                      </ul>
                    </div>
                  </div>
                  {/* Contact info End  */}
                </div>
              </div>
              {/* Contact-Footer  */}
              <div className="row justify-content-center animate__animated animate__fadeInUp animate__delay-4s">
                <div className="col-lg-6 text-center">
                  <h5 className="footer">Copyright &copy; &#160;
                    {currentYear} <a onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}> Eric WAGNER</a>&#160;&#160;<i
                      className="fas fa-heart animate__animated animate__pulse animate__faster animate__infinite	infinite"></i>&#160;&#160;Tout droits réservés.</h5>
                </div>
              </div>
              {/* Contact-Footer End  */}
            </div>
            {/* Contact-page End  */}
          </div>
        </div>
      </section>
      {/* Contact section End  */}
    </React.Fragment>
  )
}

export default Contact