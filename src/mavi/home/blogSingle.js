import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MouseContext } from "../context/mouseContext";
import Blog1 from '../../images/blog/01.jpg'
import { Helmet } from 'react-helmet';

const BlogSingle = () => {
  const { cursorChangeHandler } = useContext(MouseContext);
  return (
    <React.Fragment>
      <Helmet>
        {/* SEO Page title tag */}
        <title>Blog Single Page Mavi - Personal Portfolio React Template</title>
        {/* Meta description */}
        <meta name="description" content="Bootstrap 5 Responsive Blog Single Page Mavi - Personal Portfolio React Template" />;

        {/* Twitter card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://avstechnolabs.com/og-images/seo-banner.png" />
        <meta name="twitter:title" content="Blog Single Page Mavi - Personal Portfolio React Template" />
        <meta name="twitter:creator" content="@Blog Single Page mavi" />
        <meta name="twitter:site" content="@Blog Single Page mavi" />
        <meta name="twitter:description" content="Bootstrap 5 Responsive Blog Single Page Mavi - Personal Portfolio React Template" />

        {/* Facebook card meta tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mavi.avstechnolabs.com/blog-single" />
        <meta property="og:title" content="Blog Single Page Mavi - Personal Portfolio React Template"
        />
        <meta property="og:description" content="Bootstrap 5 Responsive Blog Single Page Mavi - Personal Portfolio React Template"
        />
        <meta property="og:image" content="https://avstechnolabs.com/og-images/seo-banner.png"
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
                    <p className="common-desctiption">Everything You Need To Know</p>
                    <h1 className="common-title">My Single <span>Blog</span></h1>
                    <div className="animated-bar"></div>
                  </div>
                </div>
              </div>
              {/* Blog-page Title End  */}
              {/* Blog-header  */}
              <div className="row">
                <div className="col-12  justify-content-center">
                  <div className="blog-header animate__animated animate__fadeInDown animate__delay-1s">
                    <span><i className="fa fa-user"></i> Alex Smith</span>
                    <span><i className="fa fa-tags"></i> design, webdesign, webdevelopment, business, IT industry</span>
                  </div>
                </div>
              </div>
              {/* Blog-header End  */}
              {/* Blog-Body Part Start  */}
              <div className="row">
                <div className="col-12 justify-content-center">
                  <div className=" text-center animate__animated animate__fadeInUp animate__delay-2s">
                    <img src={Blog1} alt="new-blog" className="blog-img" />
                  </div>
                  <div className="blog-body news-details animate__animated animate__fadeInLeft animate__delay-3s">
                    <span className="date">10 Dec, 2021</span>

                    <div className="animate__animated animate__fadeInLeft animate__delay-3s">
                      <h2 className="title">Women in Web Design: How To Achieve Success</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Qui debitis officia officiis illo.</p>
                      <h4>Be smart with your learning</h4>
                      <p>You can set yourself up for success at the very start of your career in web design. Being smart
                        with how you learn your trade will help you develop faster and better.
                        From understanding how you learn best to get the fundamentals under your belt quickly,
                        there's a number of routes you can take to achieve your goals.
                      </p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sodales, orci eu bibendum
                        efficitur, metus massa eleifend ex, vehicula consequat arcu libero vel leo. Vestibulum sit amet
                        felis rutrum, rhoncus justo id, semper lectus. Aliquam erat volutpat. Maecenas faucibus gravida
                        ornare. Praesent laoreet risus ac ligula volutpat, a imperdiet nunc auctor. Vivamus tincidunt eu
                        erat non scelerisque. Curabitur blandit tempus dui, ut aliquam lorem mattis vel. Duis pulvinar
                        volutpat ornare. Etiam id elementum dolor. Sed posuere eleifend massa vitae vehicula. Maecenas
                        metus felis, tincidunt sit amet lorem quis, malesuada ornare enim. Praesent a est sed purus
                        imperdiet venenatis. Ut quis sapien iaculis, tempus dui et, maximus ex. Sed in fringilla libero.
                      </p>
                      <p>Vivamus eget dolor pretium, dignissim turpis sit amet, faucibus orci. Quisque eget nunc eget
                        justo lobortis ultricies. Praesent id elit nisl. Praesent mauris magna, dapibus ut semper
                        faucibus, auctor vel quam. Maecenas facilisis ullamcorper turpis, dignissim tristique orci semper
                        eu. Vestibulum sit amet tortor vel metus congue placerat in at lorem. Suspendisse mollis tincidunt
                        dolor nec ultricies. Suspendisse potenti. Curabitur at libero purus. Aliquam lobortis tincidunt
                        risus, at ornare sapien.</p>
                      <h4>On-the-job experience</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sodales, orci eu bibendum
                        efficitur, metus massa eleifend ex, vehicula consequat arcu libero vel leo. <br />Vestibulum sit
                        amet felis rutrum, rhoncus justo id, semper lectus. Aliquam erat volutpat. Maecenas faucibus
                        gravida ornare. Praesent laoreet risus ac ligula volutpat, a imperdiet nunc auctor. Vivamus
                        tincidunt eu erat non scelerisque. Curabitur blandit tempus dui, ut aliquam lorem mattis vel. Duis
                        pulvinar volutpat ornare. Etiam id elementum dolor. Sed posuere eleifend massa vitae vehicula.
                        Maecenas metus felis, tincidunt sit amet lorem quis, malesuada ornare enim. Praesent a est sed
                        purus imperdiet venenatis. Ut quis sapien iaculis, tempus dui et, maximus ex. Sed in fringilla
                        libero.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Blog-Body Part End  */}
              {/* Contact form */}
              <div className="contact-section animate__animated animate__fadeInRight animate__delay-3s">
                <div className="row">
                  <div className="contact-form " id="contact-form">
                    <h4 className="content-title">Leave your Review</h4>
                  </div>
                </div>
                <div className="row justify-content-center text-center">
                  <div className="col-lg-6">
                    <form className="contact-form ">
                      <div className="col-12 form-group"><input className="form-control" id="contact-name" type="text" name="name" placeholder="Name" required="" /></div>
                      <div className="col-12 form-group"><input className="form-control" id="contact-email" type="email" name="email" placeholder="Email" required="" /></div>
                      <div className="col-12 form-group"><input className="form-control" id="contact-subject" type="text" name="subject" placeholder="Subject" required="" /></div>
                    </form>
                  </div>
                  <div className="col-lg-6">
                    <form className="contact-form ">
                      <div className="form-group form-message"><textarea className="form-control" id="contact-message"
                        name="message" placeholder="Message" rows="7" required=""></textarea>
                      </div>

                    </form>
                  </div>
                  <div className="mb-4 form-submit"><button className="clickbtn button-main button-scheme" id="contact-submit"
                    type="submit">Send Message</button>
                  </div>
                </div>
                {/* Social media icons */}
                <div
                  className="fixed-block d-flex animate__animated animate__jackInTheBox animate__delay-5s justify-content-center">
                  <ul className="list-unstyled social-icons p-3">
                    <li><Link to={'/'} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}><i className="fab fa-twitter"></i></Link></li>
                    <li><Link to={'/'} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}><i className="fab fa-facebook-square"></i></Link></li>
                    <li><Link to={'/'} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}><i className="fab fa-linkedin"></i></Link></li>
                    <li><Link to={'/'} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}><i className="fab fa-github-square"></i></Link></li>
                    <li><Link to={'/'} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}><i className="fab fa-instagram-square"></i></Link></li>
                  </ul>
                </div>
              </div>
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