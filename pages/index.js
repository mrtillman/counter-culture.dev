import Link from 'next/link';

const Index = () => (
  <div>
    <p>geeks.counter-culture.io</p>
    <Link href='/about'>
      {/* <a title="About Page">About Page</a> */}
      <button title="About Page">About Page</button>
    </Link>
  </div>
);

export default Index;