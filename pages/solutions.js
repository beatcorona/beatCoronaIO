import Layout from '../components/Layout';

const Solutions = () => (
  <div>

  <Layout>
    <div className="container">
          <main>
              <h1>Solutions</h1>
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
          </div>
      </Layout>
      <style jsx>{`

.container {
    margin-top: 50px;
    background: #fff;
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
.grid {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 3rem;
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
  

      `}</style>
  </div>
)

export default Solutions;