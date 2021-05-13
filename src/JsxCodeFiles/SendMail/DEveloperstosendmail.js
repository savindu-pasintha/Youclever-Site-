import React, { useState } from "react";
import { SMTPClient } from "emailjs";

// send the message and get a callback with an error or details of the message that was sent

// you can continue to send more messages with successive calls to 'client.send',
// they will be queued on the same smtp connection

// or instead of using the built-in client you can create an instance of 'smtp.SMTPConnection'

export default function DEveloperstosendmail() {
  const [val, setVal] = useState({
    sendername: "",
    senderemail: "",
    senderemessage: "",
    err: "",
  });
  //get username
  const getsendername = (e) => {
    setVal({
      ...val,
      sendername: e.target.value,
    });
  };
  const getsenderemail = (e) => {
    setVal({
      ...val,
      senderemail: e.target.value,
    });
  };

  const getsenderemessage = (e) => {
    setVal({
      ...val,
      senderemessage: e.target.value,
    });
  };
  const onsubmitpreventrefresh = (e) => {
    e.preventDefault();
  };

  const sendmethod = () => {
    const client = new SMTPClient({
      user: "user",
      password: "password",
      host: "smtp.your-email.com",
      ssl: true,
    });
    const message = {
      text: "i hope this works",
      from: "youcleverweb@gmail.com",
      to: "savindupasingtha@gmail.com",
      cc: "else <else@your-email.com>",
      subject: "testing emailjs",
      attachment: [
        {
          data: "<html>i <i>hope</i> this works!</html>",
          alternative: true,
        },
        {
          path: "path/to/file.zip",
          type: "application/zip",
          name: "renamed.zip",
        },
      ],
    };
    client.send(message, function (err, message) {
      console.log(err || message);
      alert("Your mail is Not sent!" + err || message);
    });
  };

  return (
    <div>
      <div className="container">
        <form onSubmit={onsubmitpreventrefresh}>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
              <input
                onChange={getsendername}
                type="text"
                className="form-control"
                placeholder="Name"
                name="user_name"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                onChange={getsenderemail}
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="user_email"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                onChange={getsenderemessage}
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <textarea
                className="form-control"
                id=""
                cols="30"
                rows="8"
                placeholder="Your message"
                name="message"
                onChange={getsenderemessage}
              />
            </div>
            <div className="col-8 pt-3 mx-auto">
              <input
                type="submit"
                className="btn btn-info"
                value="Send Message "
                onClick={sendmethod}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
