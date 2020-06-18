import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "../routes";
import moment from "moment";
import { getBlogs } from "../actions";
import { shortenText } from "../helpers/utils";

class Blogs extends React.Component {
  static async getInitialProps() {
    let blogs = [];
    try {
      blogs = await getBlogs();
    } catch (err) {
      console.log(err);
    }
    return { blogs };
  }

  renderBlogs = (blogs) => {
    return blogs.map((blog, index) => (
      <div key={index} className="post-preview">
        <Link route={`/blogs/${blog.slug}`}>
          <a>
            <h2 className="post-title">{blog.title}</h2>
          </a>
        </Link>
        <div className="divide-line"></div>
        <p className="post-meta">
          Posted by {blog.author} {moment(blog.createdAt).format("LL")}
        </p>
        <h3 className="post-subtitle">{shortenText(blog.subTitle)}</h3>
        <Button color="primary" className="blog-btn">
          <Link route={`/blogs/${blog.slug}`}>
            <a>Read more</a>
          </Link>
        </Button>
      </div>
    ));
  };

  render() {
    const { blogs } = this.props;

    return (
      <BaseLayout
        title="Victoria Klimova - Newest Blogs To Read"
        {...this.props.auth}
        headerType={"landing"}
        className="blog-listing-page"
      >
        <div
          className="masthead"
          style={{ backgroundImage: "url('/static/images/blog-1.jpg')" }}
        >
          <div className="overlay"></div>
          <Container>
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1>Blog</h1>
                  <span className="subheading"></span>
                </div>
              </div>
            </div>
          </Container>
        </div>

        <BasePage className="blog-body">
          <Row>
            <Col md="10" lg="8" className="mx-auto">
              {this.renderBlogs(blogs)}
              {/* <div className="clearfix">
                <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
              </div> */}
            </Col>
          </Row>

          <footer>
            <Container>
              <Row>
                <div className="col-md-6">
                  <div className="footer-link-title">CONTACT</div>
                    <div className="footer-link-item">+375 29 108 06 71</div>
                    <div className="footer-link-item">victoriaklimova96@gmail.com</div>
                  </div>
                  <div className="col-md-6">
                    <div className="footer-link-title">SOCIAL</div>
                      <div className="footer-link-item">
                        <a target="_blank" href="https://www.linkedin.com/in/victoria-klimova-438ba31a2/">
                          linkedin
                        </a>
                      </div>
                      <div className="footer-link-item">
                        <a target="_blank" href="https://github.com/VictoriaKaa">
                          github
                        </a>
                      </div>
                  </div>
              </Row>
            </Container>
          </footer>
        </BasePage>
        <style jsx>
          {`
            @import url("https://use.fontawesome.com/releases/v5.5.0/css/all.css");
          `}
        </style>
      </BaseLayout>
    );
  }
}

export default Blogs;
