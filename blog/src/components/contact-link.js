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
   * A very simple way of fooling simple spam bots
   * by decoding my email which was 
   * encoded 3 times to base64
   * 
   * I am just obscuring my email adress from code grepping here
   */
  decode(val) {
    const rounds = 3;
    let email = val;
    for(let i=0; i<rounds;i++) {
      email = atob(email);
    }
    return email;
  }
  
  show_address() {
    this.setState(state => ({
      clicked: !state.clicked
    }));
  }

  render() {
    const email_address = this.decode("V2pOV2NHSkhlR3hhUjFZeVdsZDRRVm95TVdoaFYzZDFXVEk1ZEE9PQ==");
    const email_link = this.decode("WWxkR2NHSklVblpQYldReFlWZDRjMXBYVW14a2JWWnpVVWRrZEZsWGJITk1iVTUyWWxFOVBRPT0=");
    return this.state.clicked ? (<a href={email_link}>{email_address}</a>) : (<strong className="point" onClick={this.show_address}>Click me to show an email address</strong>);
  }
}

export default ContactLink
