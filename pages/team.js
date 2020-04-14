import Layout from '../components/Layout';
import Tabs from '../components/Tabs';

const Team = () => (
    
  <div>
      <Layout>
          <main>
          <Tabs />
 
          </main>
      </Layout>
      
      <style jsx>{`
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
)

export default Team;