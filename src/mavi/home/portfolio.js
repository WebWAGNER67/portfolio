import React, { useEffect } from 'react';
import mixitup from 'mixitup';
import $ from 'jquery';
import '@fancyapps/fancybox';
import Item1 from '../../images/protfolio/gestscol.png'
import Item2 from '../../images/protfolio/festivalduhoublon.png'
import Item3 from '../../images/protfolio/jeuduschlange.png'
import Item4 from '../../images/protfolio/eaufaitsacrise.png'
import Item5 from '../../images/protfolio/globethree.png'
import Item6 from '../../images/protfolio/environnementthree.png'
import { Helmet } from 'react-helmet';

const Portfolio = () => {

  useEffect(() => {
    // Initialize MixItUp
    const mixer = mixitup('.mix-container');

    // Initialize FancyBox after MixItUp has been initialized
    $('.mix-container').on('click', '[data-fancybox="gallery"]', function () {
      $.fancybox.open({
        src: $(this).attr('href'),
        type: 'image',
        opts: {
          animationEffect: 'zoom-in-out',
          transitionEffect: 'tube',
          loop: true,
        },
      });
      return false; // Prevent default click behavior
    });

    // Clean up on component unmount
    return () => {
      mixer.destroy();
    };
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        {/* SEO Page title tag */}
        <title>Portfolio Mavi - Personal Portfolio React Template</title>
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
      {/* Protfolio Section Start*/}
      <section id="portfolio" className="section active">
        <div className="homecolor-box"></div>
        <div className="common_bg animate__animated animate__fadeInLeft">
          <div className="container">
            <div className="protfolio-section text-center  ">
              {/* Protfolio-Title Start */}
              <div className="row">
                <div className="col-12">
                  <div className="section-title animate__animated animate__fadeInDown animate__delay-1s">
                    <p className="common-desctiption">Présentation de certains de mes meilleurs travaux</p>
                    <h1 className="common-title">Mon <span>Portfolio</span></h1>
                    <div className="animated-bar"></div>
                  </div>
                </div>
              </div>
              {/* Protfolio-Title Start */}
              {/* Protfolio nav-button start  */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="portfolio-menu animate__animated animate__fadeInUp animate__delay-2s">
                    <nav className="controls ">
                      <button type="button" className="control clickbtn" data-filter="all">Tout</button>
                      <button type="button" className="control clickbtn" data-filter=".seul ">Seul</button>
                      <button type="button" className="control clickbtn" data-filter=".groupe ">Groupe</button>
                      <button type="button" className="control clickbtn" data-filter=".front ">Front-End</button>
                      <button type="button" className="control clickbtn" data-filter=".back ">Back-End</button>
                    </nav>
                  </div>
                </div>
              </div>
              {/* Protfolio nav-button End  */}
              {/* Portfolio Mix Content Start */}
              <div className="row portfolio-list animate__zoomIn animate__animated animate__delay-3s">
                <div className="container">
                  <ul className="row ps-0 mix-container">
                    {/* Mix Content-Box */}
                    <li className="mix seul front back col-xl-3 col-lg-4 col-md-6">
                      <a href="https://gestscol.ericwagner.fr" target='_blank'>
                        <img src={Item1} alt="Image-description" />
                        <div className="info">
                          <h3 className="title">Gestscol</h3>
                          <span className="post">Projet</span>
                        </div>
                      </a>
                    </li>
                    {/* Mix Content-Box */}
                    <li className="mix seul front back col-xl-3 col-lg-4 col-md-6">
                      <a href="https://test.ericwagner.fr" target='_blank'>
                        <img src={Item2} alt="Image-description" />
                        <div className="info">
                          <h3 className="title">Festival du Houblon</h3>
                          <span className="post">Projet</span>
                        </div>
                      </a>
                    </li>
                    {/* Mix Content Box */}
                    <li className="mix seul front col-xl-3 col-lg-4 col-md-6">
                      <a href="https://snake.ericwagner.fr" target='_blank'>
                        <img src={Item3} alt="Image-description" />
                        <div className="info">
                          <h3 className="title">Jeu du Schlange</h3>
                          <span className="post">Projet</span>
                        </div>
                      </a>
                    </li>
                    {/* Mix Content Box */}
                    <li className="mix groupe front col-xl-3 col-lg-4 col-md-6">
                      <a href="https://eau-fait-sa-crise.ericwagner.fr/" target='_blank'>
                        <img src={Item4} alt="Image-description" />
                        <div className="info">
                          <h3 className="title">Eau fait sa crise</h3>
                          <span className="post">Projet</span>
                        </div>
                      </a>
                    </li>
                    {/* Mix Content Box */}
                    <li className="mix seul front col-xl-3 col-lg-4 col-md-6">
                      <a href="https://tp1globe.visu6.ericwagner.fr/" target='_blank'>
                        <img src={Item5} alt="Image-description" />
                        <div className="info">
                          <h3 className="title">Globe Three JS</h3>
                          <span className="post">Projet</span>
                        </div>
                      </a>
                    </li>
                    {/* Mix Content Box */}
                    <li className="mix seul front col-xl-3 col-lg-4 col-md-6">
                      <a href="http://tp2environnement.visu6.ericwagner.fr/" target='_blank'>
                        <img src={Item6} alt="Image-description" />
                        <div className="info">
                          <h3 className="title">Environnement Three JS</h3>
                          <span className="post">Projet</span>
                        </div>
                      </a>
                    </li>
                    {/* Mix Content Box */}
                  </ul>
                </div>
              </div>
              {/* Portfolio Mix Content End */}
            </div>
          </div>
        </div>
      </section>
      {/* Protfolio Section End */}
    </React.Fragment>
  )
}

export default Portfolio