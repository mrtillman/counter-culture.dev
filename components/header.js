import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <Link href='/oauth2/callback'>
        <a title="Sign In">Sign In</a>
      </Link>
      &nbsp;
      <Link href='/'>
        <a title="Home">Home</a>
      </Link>
      <br/><br/>
    </div>
  );
}

export default Header;