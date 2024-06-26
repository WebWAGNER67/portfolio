import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { MouseContext } from "../context/mouseContext";
import Item1 from '../../images/protfolio/gestscol.png'
import Item2 from '../../images/protfolio/festivalduhoublon.png'
import Item3 from '../../images/protfolio/jeuduschlange.png'
import Item4 from '../../images/protfolio/eaufaitsacrise.png'
import Item5 from '../../images/protfolio/globethree.png'
import Item6 from '../../images/protfolio/environnementthree.png'
import Item7 from '../../images/protfolio/economieetgestion.png'
import { Helmet } from 'react-helmet';
import blogData from '../../datas/blog.json'

const getBlogImage = (id) => {
  switch(id) {
    case 1:
      return Item1;
    case 2:
      return Item2;
    case 3:
      return Item3;
    case 4:
      return Item4;
    case 5:
      return Item5;
    case 6:
      return Item6;
    case 7:
      return Item7;
    default:
      return Item1; // or a default image
  }
}

const Blog = () => {
  const { cursorChangeHandler } = useContext(MouseContext);

  return (
    <React.Fragment>
      <Helmet>
        {/* SEO Page title tag */}
        <title>Projets - Eric WAGNER - Portfolio Personnel</title>
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
      {/* Blog section Start  */}
      <section id="blog" className="section active">
        <div className="homecolor-box"></div>
        <div className="common_bg animate__animated animate__fadeInDown" >
          <div className="container">
            {/* Blog-Section Title  */}
            <div className="blog-section text-center">
              <div className="row ">
                <div className="col-12">
                  <div className="section-title animate__animated animate__bounceInDown animate__delay-1s">
                    <p className="common-desctiption">Consultez mes projets les plus récents</p>
                    <h1 className="common-title">Mes <span>Projets</span></h1>
                    <div className="animated-bar"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Blog-Section Title End  */}
            {/* Blog-Content Box Start  */}
            <div className="blog-section animate__animated animate__fadeInUp animate__delay-2s">
              <div className="row justify-content-center">
                {/* Single post */}
                {blogData.map((blog) => (
                  <div key={blog.id} className="col-lg-4 col-md-6 col-sm-12">
                    <div className="single-post">
                      <div className="ih-item square effect">
                        <Link to={`/project/${blog.id}`} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}>
                          <div className="img">
                            <img src={getBlogImage(blog.id)} alt="img" />
                          </div>
                        </Link>
                      </div>
                      <div className="card-body post-content">
                        <div className="content-date">{blog.date}</div>
                        <div className="content-title">
                          <h5>
                            <Link to={`/project/${blog.id}`} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}>
                              {blog.title}
                            </Link>
                          </h5>
                        </div>
                        <div className="content-description">
                          <p>{blog.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Blog-Content Box End  */}
          </div>
        </div>
      </section>
      {/* Blog section End  */}
    </React.Fragment>
  )
}

export default Blog