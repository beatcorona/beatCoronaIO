import Header from './Header';
import Footer from './Footer';


const layoutStyle = {
  width: '100vw',
}
const background = {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: '-1000',
}


export default function Layout(props) {
  return (
    <div style={layoutStyle}>
        <div className="background-overlay"></div>
    
      <Header />
      {props.children}
      <main>

      </main>
      <Footer />
      <style jsx>{`
        .background {
            margin: 0 auto;
            height: 100vh;
            
        }
        .background-overlay {
            width: 100vw;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
            background: #fff;
            z-index: -999;
        }

    `}</style>
    </div>
  )
}