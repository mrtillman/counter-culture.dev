import Layout from '../components/layout';
import Link from 'next/link';

const PostLink = (props) => (
  <li>
    <Link as={`/posts/${props.id}`} href={`/post?id=${props.id}`}>
      <a>Post {props.id}</a>
    </Link>
  </li>
);

const Index = () => (
  <Layout>
    <p>geeks.counter-culture.io</p>
    <ul>
      <PostLink id="1" />
      <PostLink id="2" />
      <PostLink id="3" />
    </ul>
  </Layout>
);

export default Index;