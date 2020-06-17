import React from "react";
import BaseLayout from "../../../components/layouts/BaseLayout";
import BasePage from "../../../components/BasePage";

import { getBlogBySlug } from '../../../actions'
import { Row, Col } from "reactstrap";

class blogDetail extends React.Component {

  static async getInitialProps({query}) {
    let blog = {}
    const slug = query.id
    
    try {
      blog = await getBlogBySlug(slug)
    } catch(err) {
      console.log(err)
    }
    return { blog }
  }

  render() {
    const { blog } = this.props
    
    return (
      <BaseLayout {...this.props.auth} className="blog-detail-base-page">
        <BasePage className="blog-detail-page">
          <Row>
            <Col md={{ size: 8, offset: 2 }}>
              <div dangerouslySetInnerHTML={{__html: blog.story}}></div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default blogDetail;
