import Layout from '../components/Layout';
import EmailForm from '../components/EmailForm';
const sendMessage = function()  {

}
const Contact = () => (
  <div>
      <Layout>
  <div className="container">
          <main>
              <h1>Contact</h1>
{/*               <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <label>
    Email:
    <input type="text" name="name" />
  </label>
  <label>
    Message:
    <textar type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form> */}
    <EmailForm />
          </main>
          </div>
      </Layout>
      <style jsx>{`
        .container {
            margin-top: 50px;
            background: #fff;
        }
        `}</style>
  </div>
)

export default Contact;