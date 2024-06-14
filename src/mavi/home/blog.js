import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { MouseContext } from "../context/mouseContext";
import Blog1 from '../../images/blog/01.jpg'
import Blog2 from '../../images/blog/02.jpg'
import Blog3 from '../../images/blog/03.jpg'
import Blog4 from '../../images/blog/04.jpg'
import Blog5 from '../../images/blog/05.jpg'
import Blog6 from '../../images/blog/06.jpg'
import { Helmet } from 'react-helmet';


const blogData = [
  {
    id: 1,
    image: Blog1,
    date: '31 Dec, 2023',
    title: 'Women in Web Design: How To Achieve Success',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    id: 2,
    image: Blog2,
    date: '28 Dec, 2023',
    title: 'The Services provide for designs',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    id: 3,
    image: Blog3,
    date: '25 Dec, 2023',
    title: 'mobile app landing design & app maintain',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    id: 4,
    image: Blog4,
    date: '20 Dec, 2023',
    title: 'How to Work Better: Efficiency Tools Every Logo Designer Needs',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    id: 5,
    image: Blog5,
    date: '10 Dec, 2023',
    title: 'Why can Hill Planet help you in the development of your website?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    id: 6,
    image: Blog6,
    date: '23 Dec, 2023',
    title: '30 Beautiful Google Fonts for Your Website',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
];

const Blog = () => {
  const { cursorChangeHandler } = useContext(MouseContext);

  return (
    <React.Fragment>
      <Helmet>
        {/* SEO Page title tag */}
        <title>Blog Mavi - Personal Portfolio React Template</title>
        {/* Meta description */}
        <meta name="description" content="Bootstrap 5 Responsive Blog Mavi - Personal Portfolio React Template" />;

        {/* Twitter card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://avstechnolabs.com/og-images/seo-banner.png" />
        <meta name="twitter:title" content="Blog Mavi - Personal Portfolio React Template" />
        <meta name="twitter:creator" content="@Blog mavi" />
        <meta name="twitter:site" content="@Blog mavi" />
        <meta name="twitter:description" content="Bootstrap 5 Responsive Blog Mavi - Personal Portfolio React Template" />

        {/* Facebook card meta tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mavi.avstechnolabs.com/blog" />
        <meta property="og:title" content="Blog Mavi - Personal Portfolio React Template"
        />
        <meta property="og:description" content="Bootstrap 5 Responsive Blog Mavi - Personal Portfolio React Template"
        />
        <meta property="og:image" content="https://avstechnolabs.com/og-images/seo-banner.png"
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
                    <p className="common-desctiption">Check Out My Latest Blog Posts</p>
                    <h1 className="common-title">My <span>Blog</span></h1>
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
                        <Link to={`/blog-single`} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}>
                          <div className="img"><img src={blog.image} alt="img" /></div>
                        </Link>
                      </div>
                      <div className="card-body post-content">
                        <div className="content-date">{blog.date}</div>
                        <div className="content-title">
                          <h5>
                            <Link to={`/blog-single`} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}>
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