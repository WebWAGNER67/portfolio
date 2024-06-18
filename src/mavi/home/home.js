import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Simple from '../../images/profile/logo.png'
import { MouseContext } from "../context/mouseContext";
import { Helmet } from 'react-helmet';

const Home = () => {
  const { cursorChangeHandler } = useContext(MouseContext);
  return (
    <React.Fragment>
      <Helmet>
        {/* SEO Page title tag */}
        <title>Eric WAGNER - Portfolio Personnel</title>
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
      {/* Index-page Start  */}
      <section id="home" className="section active">
        <div className="homecolor-box"></div>
        <div className="common_bg animate__animated animate__zoomIn">
          <div className="container m-auto">
            <div className="row align-items-center">
              {/* Profile-Pic */}
              <div className=" col-xl-5 col-lg-6 col-md-6 col-12">
                <div className="home-profile animate__animated animate__fadeInLeft animate__delay-1s">
                  <img src={Simple} alt="home-profile"/>
                </div>
              </div>
              {/* Profile-Pic End */}
              {/* Profile-Information  */}
              <div className="col-xl-7 col-lg-6 col-md-6 col-12">
                <div className="home-content">
                  <p className="common-desctiption animate__animated animate__fadeInDown animate__delay-1s">Apprendre à me connaître</p>
                  <h1 className="common-title animate__animated animate__fadeInDown animate__delay-1s">Eric WAGNER</h1>
                  <div className="animated-bar animate__animated animate__fadeInDown animate__delay-2s"></div>
                  <div className="animated-text animate__animated animate__fadeInDown animate__delay-2s">
                    <h3>Développeur WEB</h3>
                    <h3>Full Stack</h3>
                    <h3>WebWAGNER</h3>
                  </div>
                  {/* Social media icons */}
                  <div className="fixed-block animate__animated animate__jackInTheBox animate__delay-2-5s">
                    <ul className="list-unstyled social-icons">
                      <li onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}><Link to="/"><i className="fab fa-twitter"></i></Link></li>
                      <li onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}><Link to="/"><i className="fab fa-facebook-square "></i></Link></li>
                      <li onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}><Link to="/"><i className="fab fa-linkedin "></i></Link></li>
                      <li onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}><Link to="/"><i className="fab fa-github-square "></i></Link></li>
                      <li onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}><Link to="/"><i className="fab fa-instagram-square"></i></Link></li>
                    </ul>
                  </div>
                  <p className="lorem-text animate__animated animate__zoomIn animate__delay-2-5s">Développeur passionné, j'ai débuté en autodidacte, développant une solide base technique et une curiosité insatiable. J'ai ensuite suivi des formations ciblées pour renforcer mes compétences. Toujours en quête de perfection, je considère l'apprentissage comme un voyage sans fin et je saisis chaque opportunité pour approfondir mes connaissances et relever de nouveaux défis.
                  </p>
                  <div className="home-btn">
                    <Link to={"/contact"} className="clickbtn hire-me animate__animated animate__fadeInTopLeft animate__delay-3s" onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}>Me contacter</Link>
                    <Link to="/about" className="clickbtn about-us animate__animated animate__fadeInTopRight animate__delay-3s" onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}>A propos de moi</Link>
                  </div>
                </div>
              </div>
              {/* Profile-Information End  */}
            </div>
          </div>
        </div>
      </section>
      {/* Index-page End */}
    </React.Fragment>
  )
}

export default Home