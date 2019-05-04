import { withRouter } from 'next/router';
import Layout from '../components/layout';

const page = withRouter(props => (
  <Layout>
    <div>
      <p>Post {props.router.query.id}</p>
    </div>
  </Layout>
));

export default page;