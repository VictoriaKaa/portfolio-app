import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import { Container, Row, Col, Button } from "reactstrap";
import withAuth from "../components/hoc/withAuth"
import PortButtonDropdown from "../components/ButtonDropdown"

import { getUserBlogs, updateBlog, deleteBlog } from "../actions/index"
import { Link } from "../routes";
import { Router } from "../routes";

class UserBlogs extends React.Component {

  static async getInitialProps({req}) {
    let blogs = []
    try {
      blogs = await getUserBlogs(req)

    } catch(err) {
      console.log(err)
    }
    return { blogs }
  }

  changeBlogStatus(blogId, status)  {
    updateBlog({status}, blogId)
      .then(() => {
        Router.pushRoute('/userblogs')
      })
      .catch(err => {
        console.error(err.message)
      })
  }
  deleteBlog(blogId) {
    deleteBlog(blogId)
      .then(status => {
        Router.pushRoute('/userblogs')
      })
      .catch(err => {
        console.error(err.message)
      })
  }
  deleteBlogWarning(blogId)  {
    const res = confirm('Are you sure you want to delete this blog post?')
    if (res) {
      this.deleteBlog(blogId)
    }
  }

  separateBlogs(blogs) {
    const published = []
    const drafts = []

    blogs.forEach(blog => {
      blog.status === "draft" ? drafts.push(blog) : published.push(blog)
    });
    return { published, drafts }
  }

  createStatus(status) {
    return status === "draft" ? {view: 'Publish Story', value: 'published'}
                              : {view: 'Make a Draft', value: "draft"}
  }
  dropdownOptions = (blog) => {
    const status = this.createStatus(blog.status)

    return [
      {text: status.view, handlers: { onClick: () => this.changeBlogStatus(blog._id, status.value) }},
      {text: 'Delete', handlers: { onClick: () => this.deleteBlogWarning(blog._id) }}
    ]
  }

  renderBlogs(blogs) {
    return(
      <ul className="user-blogs-list">
        {
          blogs.map((blog, index) => (
            <li key={index}>
              <Link route={`/blogs/${blog._id}/edit`}>
                <a>{blog.title}</a>
              </Link>
              <PortButtonDropdown items={this.dropdownOptions(blog)} />
            </li>
            )
          )
        }
      </ul>
    )
  }

  render() {
    const { blogs } = this.props
    const { published, drafts } = this.separateBlogs(blogs)
    return (
        <BaseLayout {...this.props.auth} headerType={'landing'}
        className="blog-listing-page">
          <div className="masthead" style={{"backgroundImage": "url('/static/images/blog-2-min.jpg')"}}>
            <div className="overlay"></div>
            <Container>
              <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                  <div className="site-heading">
                    <h1>Blogs Dashboard</h1>
                    <span className="subheading">Let's write some blogs{' '}
                      <Link route='/blogeditor' as='/new'>
                        <Button color="primary">Create new blog</Button>
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </Container>
          </div>
          <BasePage className="blog-user-page">
            <Row className="blog-user-row">
                <Col md="6" className="mx-auto text-center">
                    <h2 className="blog-status-title">Published Blogs </h2>
                    {this.renderBlogs(published)}
                </Col>
                <Col md="6" className="mx-auto text-center">
                    <h2 className="blog-status-title">Draft Blogs</h2>
                    {this.renderBlogs(drafts)}
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
        </BaseLayout>
    );
  }
}

export default withAuth('siteOwner')(UserBlogs);
