import { withRouter } from 'next/router';
import Layout from '../components/layout';
import fetch from 'isomorphic-unfetch';

const endpoint = 'https://jsonplaceholder.typicode.com/todos';

const Post = props => (
  <Layout>
    <div>
      <p>Post {props.post.id}</p>
      <p>{props.post.title}</p>
    </div>
  </Layout>
);

Post.getInitialProps = async ({ req, query }) => {
  
  let id = '';
  
  if(req){
    id = req.params.id;
  }

  if(query){
    id = query.id;
  }
  
  const res = await fetch(`${endpoint}/${id}`);
  const post = await res.json();
  return { post };
  
}

export default withRouter(Post);