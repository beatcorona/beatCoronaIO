import Layout from '../components/Layout';
import EmailForm from '../components/EmailForm';
const sendMessage = function()  {

}
const Contact = () => (
  <div className="container">
      <Layout>
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
      </Layout>
  </div>
)

export default Contact;