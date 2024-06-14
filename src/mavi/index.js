import React from 'react'
import { Routes, Route } from "react-router-dom";
import Layout from './layout';
import Home from './home/home';
import About from './home/about';
import Portfolio from './home/portfolio';
import Blog from './home/blog';
import BlogSingle from './home/blogSingle';
import Contact from './home/contact';

const Gaspar = (props) => {
    return (
        <React.Fragment>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog-single" element={<BlogSingle />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Layout>
        </React.Fragment>
    )
}

export default Gaspar