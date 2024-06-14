import React, { useEffect } from 'react';
import mixitup from 'mixitup';
import $ from 'jquery';
import '@fancyapps/fancybox';
import Item1 from '../../images/protfolio/item-1.jpg'
import Item2 from '../../images/protfolio/item-2.jpg'
import Item3 from '../../images/protfolio/item-3.jpg'
import Item4 from '../../images/protfolio/item-4.jpg'
import Item5 from '../../images/protfolio/item-5.jpg'
import Item6 from '../../images/protfolio/item-6.jpg'
import Item7 from '../../images/protfolio/item-7.jpg'
import Item8 from '../../images/protfolio/item-8.jpg';
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
        <meta name="description" content="Bootstrap 5 Responsive Portfolio Mavi - Personal Portfolio React Template" />;

        {/* Twitter card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://avstechnolabs.com/og-images/seo-banner.png" />
        <meta name="twitter:title" content="Portfolio Mavi - Personal Portfolio React Template" />
        <meta name="twitter:creator" content="@Portfolio mavi" />
        <meta name="twitter:site" content="@Portfolio mavi" />
        <meta name="twitter:description" content="Bootstrap 5 Responsive Portfolio Mavi - Personal Portfolio React Template" />

        {/* Facebook card meta tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mavi.avstechnolabs.com/portfolio" />
        <meta property="og:title" content="Portfolio Mavi - Personal Portfolio React Template"
        />
        <meta property="og:description" content="Bootstrap 5 Responsive Portfolio Mavi - Personal Portfolio React Template"
        />
        <meta property="og:image" content="https://avstechnolabs.com/og-images/seo-banner.png"
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
                      <a href="https://test.ericwagner.fr">
                        <img src={Item2} alt="Image-description" />
                        <div className="info">
                          <h3 className="title">Festival du Houblon</h3>
                          <span className="post">Projet</span>
                        </div>
                      </a>
                    </li>
                    {/* Mix Content Box */}
                    <li className="mix uiuxdesign graphic col-xl-3 col-lg-4 col-md-6">
                      <a href={Item3} data-fancybox="gallery">
                        <img src={Item3} alt="Image-description" />
                        <div className="info">
                          <h3 className="title">UI-UX Design</h3>
                          <span className="post">project</span>
                        </div>
                      </a>
                    </li>
                    {/* Mix Content Box */}
                    <li className="mix webdevelopment webdesign col-xl-3 col-lg-4 col-md-6">
                      <a href={Item4} data-fancybox="gallery">
                        <img src={Item4} alt="Image-description" />
                        <div className="info">
                          <h3 className="title">Web Develoment</h3>
                          <span className="post">project</span>
                        </div>
                      </a>
                    </li>
                    {/* Mix Content Box */}
                    <li className="mix webdesign col-xl-3 col-lg-4 col-md-6">
                      <a href={Item5} data-fancybox="gallery">
                        <img src={Item5} alt="Image-description" />
                        <div className="info">
                          <h3 className="title">Web Design</h3>
                          <span className="post">project</span>
                        </div>
                      </a>
                    </li>
                    {/* Mix Content Box */}
                    <li className="mix graphic col-xl-3 col-lg-4 col-md-6">
                      <a href={Item6} data-fancybox="gallery">
                        <img src={Item6} alt="Image-description" />
                        <div className="info">
                          <h3 className="title">Graphic Design</h3>
                          <span className="post">project</span>
                        </div>
                      </a>
                    </li>
                    {/* Mix Content Box */}
                    <li className="mix uiuxdesign webdevelopment webdesign graphic col-xl-3 col-lg-4 col-md-6">
                      <a href={Item7} data-fancybox="gallery">
                        <img src={Item7} alt="Image-description" />
                        <div className="info">
                          <h3 className="title">UI-UX Design</h3>
                          <span className="post">project</span>
                        </div>
                      </a>
                    </li>
                    {/* Mix Content Box */}
                    <li className="mix graphic col-xl-3 col-lg-4 col-md-6">
                      <a href={Item8} data-fancybox="gallery">
                        <img src={Item8} alt="Image-description" />
                        <div className="info">
                          <h3 className="title">Graphic Design</h3>
                          <span className="post">project</span>
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