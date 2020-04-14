import Head from 'next/head';
import Layout from '../components/Layout';
import Header from '../components/Header';
const Home = () => (
  <div className="container">
    <Head>
      <title>BeatCorona</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>

    <main>
      <div className="index-logo">
      <img src="/images/site/beat_corona_logo.webp"></img>
      </div>
      <h3>Leading The Health Sector Transformation to Combat Epidemics</h3>

      <div className="mainSection">
      <h2>About Us</h2>
        <div className="leftSection">
        <img src="/images/site/nurse_check.webp"></img>
        </div>
        <div className="rightSection">
        <h3>Our Platform</h3>
        <p>     BeatCorona is a technology-enabled solution that will enable customers to gain immediate access to healthcare, in order to minimise the impact of COVID-19  as well as future pandemics on the economy. </p>
        <p>     BeatCorona  offers customer-friendly, technology-driven solutions and mechanisms for better collaboration across sectors including manufacturing, transport and agriculture, which will bring transformation of the healthcare system by combating epidemics and their social, environmental and economical effects after the storm. </p>
        <p>     BeatCorona aims to use technology to facilitate the decision making process in clinical and business sectors - ultimately enabling a value-based health care system. </p>
        </div>
      </div>
      <div className="mainSection">
      <h2>Background</h2>

      <p>From a  public health perspective, a pandemic is a worst-case scenario. In recent history, the Spanish flu pandemic in 1918 killed a minimum of 50 million people.</p>
      <p>Despite modern advances in the health care technology, pandemics remain a big threats  because of the continuous movement of people due to globalisation.  The current Novel Coronavirus Disease (COVID-19) has become a huge public health concern, infecting more than a third of a million people and already claiming the lives of thousands.  While social distancing, to limit the transmission rate has been the action taken globally, the challenge of early identification of the symptoms to build the fighting mechanism of the epidemic remains a global challenge. As the COVID-19 tsunami confronts the global community, innovative technology-driven solutions such as BeatCorona are critical in meeting  the demand for immediate access to healthcare services.</p>
      </div>
      <h2>Our Solution in Three Steps</h2>
      <div className="grid">
        <div className="card">
          <h3>E-Identification</h3>
          <img src="/images/site/phone_mockup_info.webp"></img>
          <p>Our application  offers an early assessment that will allow individuals to determine if they have contracted the virus, as well as their risk for severe infection. In addition, BeatCorona provides access to health care services.</p>
        </div>
        <div className="card">
          <h3>E-Coordination &#38; Advisory</h3>
          <img src="/images/site/medical_handshake.webp"></img>
          <p>The E-Advisory service provides proactive measures that can be taken to avoid contracting and spreading the virus, as well as connect individuals with healthcare  centres for timely care.</p>

<p>In addition, this platform will enable us to get a head-start on redefining the new 'normal' economically, environmentally and socially.</p>
        </div>
        <div className="card">
          <h3>E-Govenance</h3>
          <img src="/images/site/mockup_map.webp"></img>
        <p>E-Governance enables BeatCorona to  monitor capabilities in dealing with COVID-19 using enabling real-time data. It enables proactive measures and enforcement to be taken to mitigate the spread of COVID-19 and pandemics in general.</p>
        </div>


      </div>
    </main>
    </Layout>

    <style jsx>{`
    
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      
      main {
        padding: 2rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90vw;
        margin-left: 5vw;
      }

      footer {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }
      
      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      a {
        color: inherit;
        text-decoration: none;
      }
      
      .title a {
        color: #0070f3;
        text-decoration: none;
      }
      
      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }
      
      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }
      
      .title,
      .description {
        text-align: center;
        color: #f7b403;
        background: #004445a2;
        padding: 8px;
        border-radius: 12px;
        border: groove 2px #f7b403;
      }
      
      .description {
        line-height: 1.5;
        font-size: 2.5rem;
      }
      
      
      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 3rem;
      }
      
      .index-logo {
        padding: 30px;
        background: #f7b60393;
        border: solid 10px #004445;
      }
      .index-logo img {
        border-radius: 12px;

      }
      .card {
        margin: 1rem;
        background: #f7b60393;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #f7b403;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
        height: 450px;
      }
      
      .card:hover,
      .card:focus,
      .card:active {
        color: #000;
        border-color: #0070f3;
      }
      
      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }
      
      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }
      
      .help {
        background: red;
        transition: ease-in 0.5s;
      }
      .help:hover {
        transition: ease-in 0.5s;
        color: black;
        border: solid 1px red;
        box-shadow: 0 0 2px red, inset 0 0 8px white;
      }
      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }

      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
        
        * {
          box-sizing: border-box;
        }
        `}</style>
  </div>
)

export default Home
