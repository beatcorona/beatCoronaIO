import React from "react";

const Founders = () => (
  <div>

    {/* Bios */}

    <div className="departmentTitle">
                <h2>Founders</h2>
              </div>
            <div className="teamDepartment grid">
                <div className="card">

                <div className="teammateCard">
                    <div className="top">
                        <div className="profilePicContainer">
                        <img src="/images/teammates/dr_solomie_jebessa_deribessa.webp" className="profilePic"></img>
                        </div>
                    </div>
                    <div className="mid">
                        <h3>Dr. Solomie Jebessa Deribessa</h3>
                        <h4>Ethiopia</h4>
                    </div>
                    <div className="bot topRowFounders">
                        <p>      Dr. Solomie is a Paediatrician and Infectious Disease specialist with over 17 years of experience in public health management throughout Africa and the rest of the globe. As a specialist in Infectious Diseases, she is well-prepared to join BeatCorona's combat with the COVID-19 pandemic.

During her early medical career, she contributed immensely to the marked reduction of the HIV/AIDs epidemic by scaling up chronic care and preventive programs in the primary health care systems of Ethiopia. Dr Solomie has also led a national program in the reduction of maternal, newborn and childhood deaths. She has led the stream of the supply chain management and integration of biotech devices from the design of the technology to fit into the local context up to adoption within the environment.</p>
<p>She is well experienced in grant applications and managing funds from international and local donors and as well in managing human resources with at most transparency and integrity. </p>
                    <p>     Solomie holds a M.D with a specialty in Paediatrics and a Master's in Public Health Management. She is also certified in pediatrics bioethics by the prestigious Paediatrics Bioethics Center in Children’s Mercy Hospital, Kansas, Missouri.</p>
                    <p>You can find her LinkedIn <a href="http://linkedin.com/in/solomie-jebessa-deribessa-03311558">here</a>.</p>
                    </div>
                </div>
                </div>
    
            <div className="card">
     
                <div className="teammateCard">
                    <div className="top">
                        <div className="profilePicContainer">
                        <img src="/images/teammates/kume_chalchisa_chibsa.webp" className="profilePic"></img>
                        </div>
                    </div>
                    <div className="mid">
                        <h3>Kume Chalchisa Chibsa</h3>
                        <h4>Ethiopia - Canada</h4>
                    </div>
                    <div className="bot topRowFounders">
                        <p>During her early medical career, she contributed immensely to the marked reduction of the HIV/AIDs epidemic by scaling up chronic care and preventive programs in the primary health care systems of Ethiopia. Dr Solomie has also led a national program in the reduction of maternal, newborn and childhood deaths. She has led the stream of the supply chain management and integration of biotech devices from the design of the technology to fit into the local context up to adoption within the environment.</p>
                        <p>     She also used this as an opportunity to engage with higher education institutions and bring together industrial sectors with academia to inspire the idea of leapfrogging to the fourth industrial revolution. 

Previously, Kume has successfully co-founded more than 3 startups that operate in different countries, ranging from waste management digital platforms to supply chain and vendor management to technology consultancy services.</p>
                        <p>Following the recent outbreak of COVID-19, Kume wanted to contribute towards the movement of keeping people safe and saving those who are affected by the newly mutated coronavirus. As a result, she founded BeatCornona - a platform for early self-diagnosis and linkage to health care.</p>
                        <p>    Kume holds a Bachelor's degree in Computer Science from Dalhousie University in Canada and a Masters degree in Executive MBA program from Imperial College in the UK.  She is an alumna of Oxford and MIT universities where she completed Innovation & Strategy programs, in addition to credentials such as: ISO 2001 auditor, Six Sigma Green Belt, ITIL Fundamentals & advanced PMP certification. She aspires to pursue her Ph.D in Economics at LSE in the near future to complement her ever-evolving goals and ambitions to build a better world.</p>
                        <p>You can find her LinkedIn <a href="https://www.linkedin.com/in/kume-chibsa-670a55184/">here</a>.</p>
                    </div>
                </div>
            </div>
           </div>

    {/* End Bios */}
    <style jsx>{`

    h2 {
        width: 100%;
        text-align: center;
    }
      .departmentTitle {
          margin-top: 40px;
          border-bottom: groove 1px #444;
      }
      .departmentTitle h2 {
          font-size: 2rem;
          margin-top: 60px;
      }
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
              }
        
              .grid {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;
                margin-top: 1rem;
              }
              .topRowFounders {
                  height: 800px;
              }
              .topRow {
                  height: 500px;
              }
              .midRow {
                  height: 300px;
              }
              .teamDepartment {
                  padding-bottom: 30px;
              }
              .teammateCard {
                margin: 1rem;
                background: #f7b60393;
                flex-basis: 45%;
                padding: 2.5rem;
                margin-top: 100px;
                text-align: left;
                color: inherit;
                text-decoration: none;
                border: 1px solid #f7b403;
                border-radius: 10px;
                max-width: 350px;
                transition: color 0.55s ease, border-color 0.35s ease;
            }
            .teammateCard:hover {
                background: white;
            }
            .top {
                background: #f7b603;
                border-radius: 50%;
                width: 200px;
                height: 200px;
                margin-top: -100px;
                margin-left: 75px;
                padding: 1px;
            }
.profilePicContainer img{
    border-radius: 50%;
    width: 200px;
    height: 200px;
}
.mid {
    padding: 0;
    margin-left: -15%;
    width: 130%;
    text-align: center;
    padding-bottom: 15px;
    
}
.mid h4 {
    color: #444;
}
.bot {
    max-width: 350px
}
      `}
      </style>
  </div>
);

export default Founders;
