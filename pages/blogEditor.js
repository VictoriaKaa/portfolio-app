import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import withAuth from "../components/hoc/withAuth"
import SlateEditor from "../components/slate-editor/Editor";
import { toast } from 'react-toastify';

import { createBlog } from "../actions"
import { Router } from "../routes";

class BlogEditor extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      error: undefined
    }

    this.saveBlog = this.saveBlog.bind(this)
  }

  saveBlog(story, heading) {
    const blog = {}
    blog.title = heading.title
    blog.subTitle = heading.subtitle
    blog.story = story

    this.setState({isLoading: true})

    createBlog(blog)
    .then(createdBlog => {
      this.setState({isLoading: false, error: undefined})
      toast.success('Blog saved succesfully')
      Router.pushRoute(`/blogs/${createdBlog._id}/edit`)
    })
    .catch((err) => { 
      const error = err.message || 'Server error'
      this.setState({isLoading: false, error})
      toast.error("Unexpected Error, copy your progress and refresh browser please.")
      console.log(error)
    })
  }


  render() {
    
    const {isLoading} = this.state

    return (
      <BaseLayout {...this.props.auth} className="blog-editor-body">
        <BasePage className="blog-editor-page" >
            <SlateEditor isLoading={isLoading} save={this.saveBlog} title="Save" />
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth('siteOwner')(BlogEditor);
