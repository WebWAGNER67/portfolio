import React, { useContext, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MouseContext } from "../context/mouseContext";
import { Helmet } from 'react-helmet';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { cursorChangeHandler } = useContext(MouseContext);

  const currentYear = new Date().getFullYear();

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nqxzzeh', 'template_s763q1f', form.current, {
        publicKey: 'ZS1CUd9BryoHXTZF4',
      })
      .then(
        () => {
          // vider les champs du formulaire
          setFormData({
            user_name: '',
            user_email: '',
            message: '',
          });
          alert('Email sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <React.Fragment>
      <Helmet>
        {/* SEO Page title tag */}
        <title>Contact Mavi - Personal Portfolio React Template</title>
        {/* Meta description */}
        <meta name="description" content="Portfolio Personnel - Eric WAGNER - Développeur WEB" />;

        {/* Twitter card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="http://webwagner.fr/img/logo.svg" />
        <meta name="twitter:title" content="Eric WAGNER - Portfolio Personnel" />
        <meta name="twitter:creator" content="@webwagner67" />
        <meta name="twitter:site" content="@webwagner67" />
        <meta name="twitter:description" content="Portfolio Personnel - Eric WAGNER - Développeur WEB" />

        {/* Facebook card meta tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio.ericwagner.fr" />
        <meta property="og:title" content="Eric WAGNER - Portfolio Personnel"
        />
        <meta property="og:description" content="Portfolio Personnel - Eric WAGNER - Développeur WEB"
        />
        <meta property="og:image" content="http://webwagner.fr/img/logo.svg"
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
                    <form className="contact-form animate__animated animate__fadeInLeft animate__delay-2s" id="contact-form" ref={form} onSubmit={sendEmail}>
                      <h4 className="content-title">Me Contacter</h4>
                      <div className="row">
                        <div className="col-12 col-md-6 form-group">
                          <input
                            className="form-control"
                            id="contact-name"
                            type="text"
                            name="user_name"
                            placeholder="Nom"
                            value={formData.user_name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col-12 col-md-6 form-group">
                          <input
                            className="form-control"
                            id="contact-email"
                            type="email"
                            name="user_email"
                            placeholder="Email"
                            value={formData.user_email}
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