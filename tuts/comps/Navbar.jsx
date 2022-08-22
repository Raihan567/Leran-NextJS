import Link from "next/Link";
const Navbar = () => {
  return (
    <nav className="paddin nav">
      <div className="logo">
        <h1>Raihan</h1>
      </div>
      <div className="links">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/subroute">
          <a>Listing</a>
        </Link>
      </div>
      
    </nav>
  );
};

export default Navbar;
