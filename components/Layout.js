import Header from './Header';
import Footer from './Footer';


const layoutStyle = {
  width: '100vw',
}

export default function Layout(props) {
  return (
    <div style={layoutStyle}>
        <div className="background-overlay"></div>
      <div className="backdrop">
        <img src="/images/site/corona_background.webp"></img>
      </div>
      <div className="index-logo-container">

<div className="index-logo">
<img src="/images/site/beat_corona_logo.webp"></img>
</div>
</div>
      <Header />
      {props.children}
      <Footer />
      <style jsx>{`
      .backdrop {
        width: 100vw;
        position: fixed;
        z-index: -1000;
        top: 0;

      }
      .backdrop img {
       width: 100vw;
       height: 70vh;
       z-index: -999;
       margin-top: -30px;
      

      }

        .background-overlay {
            width: 100vw;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
            z-index: -998;
        }
        .mainDiv {
          background: blue;
        }
        .index-logo-container {
          width: 100%;
          padding-bottom: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 150px;
        }
        .index-logo {
          margin-top: 25px;
          padding: 10px;
          background: #fff;
          border: solid 3px #000;
        }
        .index-logo img {
          width: 100px;
          height: 100px;
  
        }
    `}</style>
    </div>
  )
}