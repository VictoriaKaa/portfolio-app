import React from "react";
import BaseLayout from "../../../components/layouts/BaseLayout";
import BasePage from "../../../components/BasePage";
import withAuth from "../../../components/hoc/withAuth"
import SlateEditor from "../../../components/slate-editor/Editor";
import { toast } from 'react-toastify';

import { getBlogById, updateBlog } from "../../../actions"
import { Router } from "../../../routes";


class BlogEditorUpdate extends React.Component {

    static async getInitialProps({query}) {
        const blogId = query.id;
        let blog = {}

        try {
          blog = await getBlogById(blogId)
        } catch(err) {
          console.log(err)
        }
        return {blog}
    }

  constructor(props) {
    super(props)

    this.state = {
      isLoading: false
    }

    this.updateBlog = this.updateBlog.bind(this)
  }

  
  updateBlog(story, heading) {
    const blog = {}
    blog.title = heading.title
    blog.subTitle = heading.subtitle
    blog.story = story
    
    this.setState({isLoading: true})
    updateBlog(blog, this.props.blog._id)
    .then(blog => {
      toast.success('Blog saved succesfully')
      this.setState({isLoading: false})
    })
    .catch((err) => { 
      const error = err.message || 'Server error'
      this.setState({isLoading: false})
      toast.error("Unexpected Error, copy your progress and refresh browser please.")
      console.log(error)
    })
  }


  render() {
    const { blog } = this.props
    const {isLoading} = this.state
    
    return (
      <BaseLayout {...this.props.auth} className="blog-editor-body">
        <BasePage className="blog-editor-page" >
            <SlateEditor initialValue={blog.story} isLoading={isLoading} save={this.updateBlog} title="Update" />
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth('siteOwner')(BlogEditorUpdate);
