import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { MouseContext } from "../context/mouseContext";
import Item1 from '../../images/protfolio/gestscol.png'
import Item2 from '../../images/protfolio/festivalduhoublon.png'
import Item3 from '../../images/protfolio/jeuduschlange.png'
import Item4 from '../../images/protfolio/eaufaitsacrise.png'
import Item5 from '../../images/protfolio/globethree.png'
import Item6 from '../../images/protfolio/environnementthree.png'
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
    default:
      return Item1; // or a default image
  }
}

const BlogSingle = () => {
  const { id } = useParams();
  const { cursorChangeHandler } = useContext(MouseContext);
  const currentYear = new Date().getFullYear();
  const blog = blogData.find(blog => blog.id === parseInt(id));
  return (
    <React.Fragment>
      <Helmet>
        {/* SEO Page title tag */}
        <title>{blog.title} {blog.author} - Personal Portfolio React Template</title>
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
      {/* Blog-page Section Start  */}
      <section id="blog-page" className="section active">
        <div className="homecolor-box"></div>
        {/* Blog-content Start */}
        <div className="common_bg animate__animated animate__fadeInDown">
          <div className="container">
            {/* blog-content  */}
            <div className="blog-content">
              {/* Blog-page Title  */}
              <div className="row ">
                <div className="col-12 ">
                  <div className="section-title  animate__animated animate__fadeInDown animate__delay-0.8s">
                    <p className="common-desctiption">Tout ce que vous devez savoir</p>
                    <h1 className="common-title">Projet <span>{blog.id}</span></h1>
                    <div className="animated-bar"></div>
                  </div>
                </div>
              </div>
              {/* Blog-page Title End  */}
              {/* Blog-header  */}
              <div className="row">
                <div className="col-12  justify-content-center">
                  <div className="blog-header animate__animated animate__fadeInDown animate__delay-1s">
                    <span><i className="fa fa-user"></i> {blog.author}</span>
                    <span><i className="fa fa-tags"></i> {blog.tags.map((tag) => (
                      <span>{tag},</span>
                    ))}</span>
                  </div>
                </div>
              </div>
              {/* Blog-header End  */}
              {/* Blog-Body Part Start  */}
              <div className="row">
                <div className="col-12 justify-content-center">
                  <div className=" text-center animate__animated animate__fadeInUp animate__delay-2s">
                    <img src={getBlogImage(blog.id)} alt="new-blog" className="blog-img" />
                  </div>
                  <div className="blog-body news-details animate__animated animate__fadeInLeft animate__delay-3s">
                    <span className="date">{blog.date}</span>

                    <div className="animate__animated animate__fadeInLeft animate__delay-3s">
                      <h2 className="title">{blog.title}</h2>
                      <p>{blog.description}</p>
                      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                    </div>
                  </div>
                </div>
              </div>
              {/* Blog-Body Part End  */}
            </div>
          </div>
        </div>
        {/* Blog-content End */}
      </section>
      {/* Blog-page Section End */}
    </React.Fragment>
  )
}

export default BlogSingle