import Layout from '../components/Layout';

const About = () => (
  <div className="container">
      <Layout>
          <main>
              <img src="/images/site/dr_notes.webp"></img>
              <h1>About</h1>
              <p>BeatCorona Platform -   Technology-enabled solution to provide immediate healthcare access to consumers through an app and minimise the impact of Corona/COVID-19 and other pandemics on society and the economy as a whole. 

We believe this platform will ultimately be a channel for change and transformation of the healthcare system by offering customer-friendly, technology-driven solutions and mechanisms for better collaboration to solve the industry's biggest challenges. 

The platform aims to facilitate clinical &amp; business decision making through technology - ultimately enabling a value-based health care system. </p>
<div className="pledgeButton">

<a href="https://docs.google.com/forms/d/1QZ--22IqPA3CzNmE6plmORs23Npo0ZoRySFKaAu8cH0/viewform?edit_requested=true">Make a Pledge</a>
</div>
          </main>
      </Layout>
      <style jsx>{`
                 .pledgeButton {
                    background: gold;
                    width: 200px;
                    height: 30px;
                    border: solid 2px darkbrown;
                    font-size: 1.5rem;
                    line-height: 30px;
                    text-align: center;
                  }
                  .pledgeButton a {
                    text-decoration: none;
                    color: black;
                  }
          `}</style>
  </div>
)

export default About;