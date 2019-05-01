import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <Link href='/'>
        <a title="Home">Home</a>
      </Link> &nbsp; | &nbsp;
      <Link href='/about'>
        <a title="About">About</a>
      </Link>
      <br/><br/>
    </div>
  );
}

export default Header;