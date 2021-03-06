import React from "react";

const Partners = () => (
  <div>
{/* Bios */}
    <div className="departmentTitle">
           <h2>Partners</h2>
           </div>

           <div className="teamDepartement grid">
           <div className="card">
     
     <div className="teammateCard">
         <div className="top">
             <div className="profilePicContainer">
             <img src="/images/partners/ucl_cbt.webp" className="profilePic"></img>
             </div>
         </div>
         <div className="mid">
             <h3>UCL Centre for Blockchain Technologies</h3>
             <h4></h4>
         </div>
         <div className="bot midRow">
             <p>The UCL CBT was founded in 2016 to research the effects of Distributed Ledger Technologies and Blockchain on socio-economic systems and to promote the safe and organic development and adoption of Blockchain-based platforms.</p>
             <p>The Centre is the nucleus for DLT and Blockchain research and engagement across eight different departments at UCL as well as its Research and Industry Associate network. 

The UCL Research and Industry Associate community consists of over 180 researchers and practitioners from UCL, other academic institutions and companies utilising DLT.</p>
             </div>
             </div>
             </div>
           <div className="card">
     
     <div className="teammateCard">
         <div className="top">
             <div className="profilePicContainer">
             <img src="/images/partners/national_academy_of_engineering.webp" className="profilePic"></img>
             </div>
         </div>
         <div className="mid">
             <h3>National Academy of Engineering</h3>
             <h4></h4>
         </div>
         <div className="bot midRow">
             <p>Founded in 1964, the National Academy of Engineering (NAE) is a private, independent, nonprofit institution that provides engineering leadership. Engineering program activities cut across the many operational units of the National Academies of Sciences, Engineering, and Medicine.</p>
             <p>The NAE has more than 2,000 peer-elected members and international members, senior professionals in business, academia, and government who are among the world’s most accomplished engineers. They provide the leadership and expertise for numerous projects focused on the relationships between engineering, technology, and the quality of life.</p>
             </div>
             </div>
             </div>
           <div className="card">
     
     <div className="teammateCard">
         <div className="top">
             <div className="profilePicContainer">
             <img src="/images/partners/chal_engineering.webp" className="profilePic"></img>
             </div>
         </div>
         <div className="mid">
             <h3>Chal Engineering</h3>
             <h4></h4>
         </div>
         <div className="bot midRow">
            <p>Chal Engineering is Electrical, Electro-mechanical and communication Engineering Company based in Addis Ababa, Ethiopia. 

It has been operating in the market since 2004 and is well-known for its comprehensive portfolio in delivering full value chain of power supply system and solutions.</p>
             </div>
             </div>
             </div>
           <div className="card">
     
     <div className="teammateCard">
         <div className="top">
             <div className="profilePicContainer">
             <img src="/images/partners/global_humanitarian_initiative_association.webp" className="profilePic"></img>
             </div>
         </div>
         <div className="mid">
             <h3>Global Humanitarian Initiative Association (GHIA)</h3>
             <h4></h4>
         </div>
         <div className="bot midRow">
             <p>GHIA connects global and local communities through the mandates of education, employment, empowerment, emergency support, and exchange programs. GHIA’s first initiative, Not 15 Million, worked to provide immediate support to the most vulnerable during Ethiopia’s famine of 2016 which left over 10 million people without access to basic necessities. Through the power of community support, GHIA was able to raise significant funds for immediate food relief for the areas most affected - the Somali, Oromo, and Afar regions.   </p>
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

export default Partners;
