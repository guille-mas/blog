import React from "react"


class ContactLink extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.show_address = this.show_address.bind(this);
  }

  /**
   * Obfuscated email address to fool some spam bots
   */
  get_email() {
    return "guilledevel" + "@" + "g" + "m" + "a" + "i" + "l" + "." + "c" + "o" + "m";
  }
  
  show_address() {
    this.setState(state => ({
      clicked: !state.clicked
    }));
  }

  render() {
    const email_address = this.get_email();
    const email_link = "m" + "a" + "i" + "l" + "t" + "o" + ":" + email_address;
    return this.state.clicked ? 
      (<a href={email_link}>{email_address}</a>) : 
      (<strong className="point" onClick={this.show_address}>Click me to show an email address</strong>);
  }
}

export default ContactLink
