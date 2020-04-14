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
      <Footer />
      <style jsx>{`
        .background {
            margin: 0 auto;
            height: 110vh;
        }
        .background-overlay {
            width: 110vw;
            height: 110vh;
            position: fixed;
            top: 0;
            left: 0;
            background: #00444588;
            z-index: -999;
        }
    `}</style>
    </div>
  )
}