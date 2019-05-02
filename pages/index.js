import Layout from '../components/layout';
import Link from 'next/link';

const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Index = () => (
  <Layout>
    <p>geeks.counter-culture.io</p>
    <ul>
      <PostLink title="post 1" />
      <PostLink title="post 2" />
      <PostLink title="post 3" />
    </ul>
  </Layout>
);

export default Index;