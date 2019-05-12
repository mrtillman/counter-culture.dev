import Layout from '../components/layout';
import Link from 'next/link';

const AppRegistrationLink = (props) => (
  <li>
    <Link href={`/register`}>
      <a>Register a new application</a>
    </Link>
  </li>
);

const Index = (props) => {
  return (
    <Layout>
      <ul>
        <AppRegistrationLink />
      </ul>
    </Layout>
  );
};

export default Index;