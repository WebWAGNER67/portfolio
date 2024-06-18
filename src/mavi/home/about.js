import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { saveAs } from 'file-saver';
import OwlCarousel from 'react-owl-carousel';
import FunFactsBox from './FunFactsBox';
import { MouseContext } from "../context/mouseContext";
import Simple from '../../images/profile/logo.png'
import Wrap from '../../images/profile/wrap.jpg'
import Partical from '../../images/profile/partical.jpg'
import Water from '../../images/profile/water.jpg'
import Glitch from '../../images/profile/glitch.jpg'
import { Helmet } from 'react-helmet';

const About = () => {

  const { cursorChangeHandler } = useContext(MouseContext);

  const [options, setOptions] = useState({
    loop: true,
    margin: 20,
    dots: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  });

  const downloadPdf = () => {
    // Replace 'filename.pdf' with the actual name of your PDF file
    const pdfFileName = 'cv_dweb_eric_wagner.pdf';

    // Construct the path to the PDF file
    const pdfPath = process.env.PUBLIC_URL + '/pdfs/' + pdfFileName;

    // Fetch the PDF file
    fetch(pdfPath)
      .then((response) => response.blob())
      .then((blob) => {
        // Save the blob as a file using file-saver
        saveAs(blob, pdfFileName);
      })
      .catch((error) => console.error('Error fetching or saving the file:', error));
  };

  // Single Item Data
  const servicesData = [
    {
      id: 1,
      icon: 'fas fa-store-alt',
      title: 'Site Vitrine',
      description: 'Un site vitrine est une présence en ligne simple, utilisée par les entreprises pour présenter leurs services et informations de base.',
    },
    {
      id: 2,
      icon: 'fas fa-globe',
      title: 'Site Institutionnel',
      description: 'Un site institutionnel présente l\'organisation, sa mission, ses valeurs, son histoire et ses services, renforçant ainsi son image de marque.',
    },
    {
      id: 3,
      icon: 'fas fa-shopping-cart',
      title: 'Site E-commerce',
      description: 'Un site e-commerce permet de vendre en ligne avec navigation, sélection, paiement sécurisé et gestion des commandes.',
    },
    {
      id: 4,
      icon: 'fas fa-network-wired',
      title: 'Site Intranet',
      description: 'Un site intranet est une plateforme privée pour l\'organisation, favorisant la communication, la collaboration et le partage de données internes.',
    },
    {
      id: 5,
      icon: 'fas fa-user',
      title: 'Site Personnel',
      description: 'Un site personnel permet de partager ses blogs, portfolios, photos et vidéos, reflétant ainsi les intérêts et les réalisations de l\'individu.',
    },
    {
      id: 6,
      icon: 'fas fa-comment-dots',
      title: 'Site Communautaire',
      description: 'Un site communautaire réunit les utilisateurs autour d\'intérêts communs via forums, groupes et partage de contenu.',
    },
    {
      id: 7,
      icon: 'fas fa-gamepad',
      title: 'Site de Jeux',
      description: 'Un site de jeu est une plateforme en ligne permettant la gestion et l\'administration d\'un serveur de jeu créé par les utilisateurs.',
    },
    {
      id: 8,
      icon: 'fas fa-info-circle',
      title: 'Autre Site',
      description: 'Proposez-moi votre service personnalisé via le formulaire dédié pour une solution adaptée à vos besoins.',
    },
  ];

  // Testimonials Data
  // const testimonialsData = [
  //   {
  //     id: 1,
  //     image: Glitch,
  //     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur, optio dolores aliquid',
  //     rating: 5,
  //   },
  //   {
  //     id: 2,
  //     image: Wrap,
  //     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur, optio dolores aliquid',
  //     rating: 5,
  //   },
  //   {
  //     id: 3,
  //     image: Water,
  //     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur, optio dolores aliquid',
  //     rating: 5,
  //   },
  //   {
  //     id: 4,
  //     image: Partical,
  //     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur, optio dolores aliquid',
  //     rating: 5,
  //   },
  // ];

  return (
    <React.Fragment>
      <Helmet>
        {/* SEO Page title tag */}
        <title>A propos - Eric WAGNER - Portfolio Personnel</title>
        {/* Meta description */}
        <meta name="description" content="Bootstrap 5 Responsive About US Mavi - Personal Portfolio React Template" />;

        {/* Twitter card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://avstechnolabs.com/og-images/seo-banner.png" />
        <meta name="twitter:title" content="About US Mavi - Personal Portfolio React Template" />
        <meta name="twitter:creator" content="@About US mavi" />
        <meta name="twitter:site" content="@About US mavi" />
        <meta name="twitter:description" content="Bootstrap 5 Responsive About US Mavi - Personal Portfolio React Template" />

        {/* Facebook card meta tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mavi.avstechnolabs.com/about" />
        <meta property="og:title" content="About US Mavi - Personal Portfolio React Template"
        />
        <meta property="og:description" content="Bootstrap 5 Responsive About US Mavi - Personal Portfolio React Template"
        />
        <meta property="og:image" content="https://avstechnolabs.com/og-images/seo-banner.png"
        />
      </Helmet>
      {/* About Section Start  */}
      <section id="about" className="section active">
        <div className="homecolor-box"></div>
        <div className="common_bg animate__animated animate__fadeInDown">
          <div className="container">
            <div className="about-content">
              {/* About Title Start */}
              <div className="row ">
                <div className="col-12 ">
                  <div className="section-title animate__animated animate__fadeInDown animate__delay-1s">
                    <p className="common-desctiption">Mon introduction</p>
                    <h1 className="common-title">A propos <span>de moi</span></h1>
                    <div className="animated-bar"></div>
                  </div>
                </div>
              </div>
              {/* About Title End  */}
              {/* About-Me  */}
              <div className="row single-section">
                <div className="col-lg-4 profile-photo animate__animated animate__fadeInLeft animate__delay-2s ">
                  <div className="row">
                    <div className="col-12 d-block col-sm-none">
                      <img src={Simple} className="img-fluid main-img-mobile" alt="my picture" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-sm-12">
                  <div className="row personal-info animate__animated animate__fadeInRight animate__delay-2s">

                    <div className="col-12">
                      <h5 className="personal-title">Qui <span>suis-je ?</span></h5>
                      <h3 className="personal-title">Je m'appelle Eric, un développeur <span>Fullstack</span> et <span>Auto entrepreneur</span></h3>
                      <p className="info">Développeur passionné, j'ai commencé mon parcours en tant qu'autodidacte, ce qui m'a permis de développer une curiosité insatiable et une solide base de compétences techniques. Par la suite, j'ai complété mon apprentissage par des formations ciblées, renforçant ainsi mes connaissances et ma maîtrise des outils et technologies du développement. Toujours en quête de perfection, je suis convaincu que l'apprentissage est un voyage sans fin. C'est pourquoi je me réjouis de chaque nouvelle opportunité d'approfondir mes compétences et de découvrir de nouvelles approches, afin de continuer à m'améliorer et à relever de nouveaux défis.</p>
                    </div>

                    <div className="row align-items-center">
                      <div className="col-lg-12">
                        <h3 className="personal-infotitle">Informations <span>personnelles</span></h3>
                      </div>

                      <div className="col-lg-6">
                        <ul className="about-you ">
                          <li>
                            <span className="title">Prénom :</span>
                            <span className="value">Eric</span>
                          </li>
                          <li>
                            <span className="title">Nom :</span>
                            <span className="value">WAGNER</span>
                          </li>
                          <li>
                            <span className="title">Adresse :</span>
                            <span className="value">12 rue de la Charrue, 67300 Schiltigheim</span>
                          </li>
                          <li>
                            <span className="title">De :</span>
                            <span className="value">Alsace, France</span>
                          </li>
                          <li>
                            <span className="title">Age :</span>
                            <span className="value">22 ans</span>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <ul className="about-you ">
                          <li>
                            <span className="title">E-mail :</span>
                            <span className="value"><a href="mailto:contact@ericwagner.fr" onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}>contact@ericwagner.fr</a></span>
                          </li>
                          <li>
                            <span className="title">Numéro de Téléphone :</span>
                            <span className="value"><a href="tel:0695214644" onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}>+33 6 95 21 46 44</a></span>
                          </li>
                          <li>
                            <span className="title">Discord :</span>
                            <span className="value">eric.wagner</span>
                          </li>
                          <li>
                            <span className="title">Langues :</span>
                            <span className="value">Français, German, English</span>
                          </li>
                          <li>
                            <span className="title">Free-lance :</span>
                            <span className="value"> Disponible</span>
                          </li>
                        </ul>
                      </div>

                      <div className="col-lg-12">
                        <div className="About-btn">
                          <button onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")} onClick={downloadPdf} className="clickbtn download-cv">Télécharger le CV <i className="fa fa-download"
                            aria-hidden="true"></i></button>
                          {/* Social media icons */}
                          <div className="col-lg-7 col-sm-6 col-12">
                            <ul className="list-unstyled social-icons">
                              <li><Link to="/" onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}><i className="fab fa-twitter"></i></Link></li>
                              <li><Link to="/" onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}><i className="fab fa-facebook-square"></i></Link></li>
                              <li><Link to="/" onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}><i className="fab fa-linkedin"></i></Link></li>
                              <li><Link to="/" onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}><i className="fab fa-github-square"></i></Link></li>
                              <li><Link to="/" onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}><i className="fab fa-instagram-square"></i></Link></li>
                            </ul>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              {/* About-Me End  */}
              {/* Resume section Start  */}
              <div className="resume-section ">
                {/* Resume title */}
                <div className="row">
                  <div className="col-12">
                    <div className="section-title animate__animated animate__fadeInUp animate__delay-3s">
                      <p className="common-desctiption">Consultez mon CV</p>
                      <h1 className="common-title ">Mon <span>CV</span></h1>
                      <div className="animated-bar "></div>
                    </div>
                  </div>
                </div>
                {/* Resume title End */}
                {/* Resume Content  */}
                <div className="row">
                  {/* Education part */}
                  <div className="col-md-6 col-12 ">
                    <div className=" col-block education ">
                      <h3 className="about-subtitle">Formations</h3>
                      <div className="resume-item"><span className="item-arrow"></span>
                        <h5 className="item-title">Bachelor universitaire de technologie</h5><span
                          className="item-details">IUT Haguenau / 2021 - 2024</span>
                        <p className="item-description">BUT métiers du Multimédia et de l'Internet</p>
                      </div>
                      <div className="resume-item"><span className="item-arrow"></span>
                        <h5 className="item-title">Brevet de Technicien Supérieur</h5><span
                          className="item-details">Lycée Couffignal / 2020 - 2021</span>
                        <p className="item-description">BTS Contrôle industriel et régulation automatique</p>
                      </div>
                    </div>
                  </div>
                  {/* Experience part */}
                  <div className="col-md-6 col-12 ">
                    <div className=" col-block education">
                      <h3 className="about-subtitle">Experience Professionnel</h3>
                      <div className="resume-item"><span className="item-arrow"></span>
                        <h5 className="item-title">Stage + Alternance</h5><span className="item-details">Jung Logistique / 2024 - Actuellement</span>
                        <p className="item-description">Développement sur l'interface Extranet de l'entreprise</p>
                      </div>
                      <div className="resume-item"><span className="item-arrow"></span>
                        <h5 className="item-title">Tuteur</h5><span className="item-details">IUT Haguenau / 2023 - 2024</span>
                        <p className="item-description">Tuteur de 2 élèves arrivant en 2ème année de BUT MMI n'ayant pas les bases en Développement WEB. (5 mois)</p>
                      </div>
                      <div className="resume-item"><span className="item-arrow"></span>
                        <h5 className="item-title">Stage</h5><span className="item-details">Mairie de Haguenau / 2023 - 2023</span>
                        <p className="item-description">Création du site complet du Festival du Houblon 2023 (Avril - Juin)</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Resume ContentEnd  */}
              </div>
              {/* / Resume section End */}
              {/* Skill Bar Section  */}
              <div className="skill-section">
                <div className="row">
                  <div className="col-12 ">
                    <div className="section-title animate__animated animate__fadeInUp animate__delay-3s">
                      <p className="common-desctiption">Mon niveau de connaissance de certains outils</p>
                      <h1 className="common-title">Mon <span>niveau</span></h1>
                      <div className="animated-bar"></div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 ">
                    <h3 className="about-subtitle">Niveau <span>Front End</span></h3>
                    <div className="skill-bars">
                      <div className="bar">
                        <div className="info">
                          <span>HTML</span>
                        </div>
                        <div className="progress-line html">
                          <span></span>
                        </div>
                      </div>
                      <div className="bar">
                        <div className="info">
                          <span>CSS</span>
                        </div>
                        <div className="progress-line css">
                          <span></span>
                        </div>
                      </div>
                      <div className="bar">
                        <div className="info">
                          <span>Javascript</span>
                        </div>
                        <div className="progress-line Javascript">
                          <span></span>
                        </div>
                      </div>
                      <div className="bar">
                        <div className="info">
                          <span>React</span>
                        </div>
                        <div className="progress-line React">
                          <span></span>
                        </div>
                      </div>
                      <div className="bar">
                        <div className="info">
                          <span>Vue</span>
                        </div>
                        <div className="progress-line Vue">
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 ">
                    <h3 className="about-subtitle">Niveau <span>Back End</span></h3>
                    <div className="skill-bars">
                      <div className="bar">
                        <div className="info">
                          <span>PHP</span>
                        </div>
                        <div className="progress-line php">
                          <span></span>
                        </div>
                      </div>
                      <div className="bar">
                        <div className="info">
                          <span>C# .Net</span>
                        </div>
                        <div className="progress-line csharp">
                          <span></span>
                        </div>
                      </div>
                      <div className="bar">
                        <div className="info">
                          <span>MySQL</span>
                        </div>
                        <div className="progress-line mysql">
                          <span></span>
                        </div>
                      </div>
                      <div className="bar">
                        <div className="info">
                          <span>Laravel</span>
                        </div>
                        <div className="progress-line laravel">
                          <span></span>
                        </div>
                      </div>
                      <div className="bar">
                        <div className="info">
                          <span>JQuery</span>
                        </div>
                        <div className="progress-line jquery">
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* / Skill Bar Section  */}
              {/* service section   */}
              <div className="services-section text-center ">
                <div className="row ">
                  <div className="col-12">
                    <div className="section-title  animate__animated animate__fadeInUp animate__slower animate__delay-3s ">
                      <p className="common-desctiption">Services que j'offre à mes clients</p>
                      <h1 className="common-title">Mes <span>Services</span></h1>
                      <div className="animated-bar"></div>
                    </div>
                    <p className="service-text">Je propose des solutions de développement sur mesure, adaptées à vos besoins spécifiques, pour créer des applications performantes, intuitives et innovantes. <br />Mon objectif est de transformer vos idées en réalité digitale, en garantissant qualité et efficacité à chaque étape du projet.
                    </p>
                  </div>
                </div>
                <div className="row animate__animated animate__zoomIn animate__slower animate__delay-3s">
                  {/* Single Item  */}
                  {servicesData.map((service) => (
                    <div key={service.id} className="col-lg-3 col-sm-6 services-box animate__animated animate__zoomIn animate__slower animate__delay-3s">
                      <div className="service-item">
                        <i className={service.icon}></i>
                        <h4><span className="service-line">{service.title}</span></h4>
                        <p>{service.description}</p>
                      </div>
                    </div>
                  ))}
                  {/* End Single Item  */}
                </div>
              </div>
              {/* / service section  */}
              {/* Testimonials  */}
              {/* <div className="row">
                <div className="col-12 animate__animated animate__fadeInDown animate__delay-3s">
                  <div className="section-title">
                    <p className="common-desctiption">Ce que disent mes clients</p>
                    <h1 className="common-title">Mes <span>Témoignages</span></h1>
                    <div className="animated-bar"></div>
                  </div>
                </div>
              </div>
              <div className="row">
                <OwlCarousel className="owl-theme" id="testimonial" {...options}>
                  {testimonialsData.map((testimonial) => (
                    <div key={testimonial.id} className="item">
                      <div className="testimonial-item">
                        <div className="quote">
                          <i className="fas fa-quote-left"></i>
                        </div>
                        <div className="testimonial-img">
                          <img src={testimonial.image} alt={`testimonial-${testimonial.id}`} />
                        </div>
                        <p>{testimonial.text}</p>
                        <div className="rating">
                          {Array.from({ length: testimonial.rating }, (_, index) => (
                            <i key={index} className="fas fa-3x fa-star"></i>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </OwlCarousel>
              </div> */}
              {/* End Testimonials section  */}
              {/* Fun Fact Section  */}
              <div className="funfacts-section">
                <div className="row">
                  <div className="col-12">
                    <div className="section-title">
                      <p className="common-desctiption">Ce sont mes côtés les plus forts</p>
                      <h1 className="common-title">Faits <span>Amusants</span></h1>
                      <div className="animated-bar"></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="funfacts-box">
                      <FunFactsBox endValue={3} />
                      <p className="fun-text">ans d'<span>expérience</span></p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="funfacts-box">
                      <FunFactsBox endValue={499} />
                      <p className="fun-text">Client satisfait(s)</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="funfacts-box">
                      <FunFactsBox endValue={15} />
                      <p className="fun-text">Projets complétés</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="funfacts-box">
                      <FunFactsBox endValue={1} />
                      <p className="fun-text">récompenses gagnées</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End  */}
    </React.Fragment>
  )
}

export default About