import React, { Component } from 'react';

class Contact extends Component {
  render() {
    const fields = this.props;
    const fullname = this.props.fullname
    const email = this.props.email
    const phone = this.props.phone
    console.log('contactprops',fields);
    return(
      <div className="fields">
        <div className="seven wide field">
          <div className="ui fluid input field">
            <div className="ui left icon input">
              <input {...fullname.input} error={fullname.meta.error && fullname.meta.touched} type="text" placeholder="Full name" required/>
              <i className="user icon"></i>
            </div>
          </div>
        </div>
        <div className="five wide field">
          <div className="ui fluid input field">
            <div className="ui left icon input">
              <input {...email.input} error={email.meta.error && email.meta.touched} type="text" placeholder="Email" required/>
              <i className="envelope icon"></i>
            </div>
          </div>
        </div>
        <div className="four wide field">
          <div className="ui fluid input field">
            <div className="ui left icon input">
              <input {...phone.input} error={email.meta.error && email.meta.touched} type="text" placeholder="Phone Number" required/>
              <i className="call icon"></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Contact;