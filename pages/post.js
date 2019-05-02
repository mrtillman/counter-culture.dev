import { withRouter} from 'next/router';
import Layout from '../components/layout';

const page = withRouter(props => (
  <Layout>
    <div>
      <p>{props.router.query.title}</p>
    </div>
  </Layout>
));

export default page;