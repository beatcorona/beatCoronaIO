class EmailForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'How can we help?'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Your email has been sent! We will respond to you with 24 hours. Thank you and Stay Safe!' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <label>
            Name:
            <input value={this.state.value} onChange={this.handleChange}></input>
        </label>
        <br/>
        <label>
           Your Email Address:
            <input value={this.state.value} onChange={this.handleChange}></input>
        </label>
        <br/>
          <label>
            Message:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
        <br/>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default EmailForm;
  