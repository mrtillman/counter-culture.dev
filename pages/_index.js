import Layout from '../components/layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const endpoint = 'https://jsonplaceholder.typicode.com/todos';

const PostLink = (props) => (
  <li>
    <Link as={`/posts/${props.id}`} href={`/post?id=${props.id}`}>
      <a>Post {props.id}</a>
    </Link>
  </li>
);

const Style = (props) => (
  <style jsx>{`
    p {
      text-decoration: underline;
    }
  `}</style>
);

const Index = (props) => {
  const links = props.posts.map(post => (
    <PostLink key={post.id} id={post.id} />
  ));
  return (
    <Layout>
      <p>geeks.counter-culture.io</p>
      {/* 
        TODO: add sign-in page, 
              require login, 
              incorporate passport.js
      */}
      <ul>
        {links}
      </ul>
      <Style/>
    </Layout>
  );
};

Index.getInitialProps = async () => {
  const res = await fetch(endpoint);
  let posts = await res.json();
  posts = posts.slice(0,3);
  return { posts }
}

export default Index;