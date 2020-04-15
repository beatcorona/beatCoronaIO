import Link from 'next/link';

const linkStyle = {
  color: '#fff',
  fontSize: '1.2rem',
  textDecoration: 'none',
  fontFamily: 'Menlo, Monaco, DejaVu Sans Mono',
  textAlign: 'center',
  width: '20%'
}; 


const headerStyle = {
    border: '1px solid #111',
    paddingTop: 10,
    paddingBottom: 10,
    height: 65,
    position: 'absolute',
    width: '100vw',
    top: 0,
    zIndex: 100
  }

   
const Header = () => (
  <div style={headerStyle} className="header">
      
    <Link href="/">
      <a title="BeatCorona" style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a title="About Us" style={linkStyle}>About Us</a>
    </Link>
    <Link href="/background">
      <a title="Ecosystem" style={linkStyle}>Ecosystem</a>
    </Link>
    <Link href="/solutions">
      <a title="Solutions" style={linkStyle}>Solutions</a>
    </Link>
    <Link href="/team">
      <a title="The Team" style={linkStyle}>The Team</a>
    </Link>
    <Link href="/contact">
      <a title="Contact Us" style={linkStyle}>Contact Us</a>
    </Link>

  <style jsx>
      {`
        .header {
            width: 100%;
            background: #161616;
            display: flex;
            justify-content: center;
            align-items: center;
        }
          .headerStyle a {
              text-align: center;
        }

            `}
  </style>
</div>
);

export default Header;