import axios from "axios";
import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendNotification = async (judul, pesan) => {
    try {
      const data = {
        subject: judul,
        message: pesan,
      };
      const response = await axios.post(
        "https://apollodev-admin.herokuapp.com/api/send-web-notification",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);
      document.querySelector(".loading").style.display = "none";
      alert("Your Message Successfully Sended !");
    } catch (error) {
      console.error(error);
      alert("Failed, There's Something Wrong");
    }
  };

  const sendMessage = async (data) => {
    try {
      const response = await axios.post(
        "https://apollodev-admin.herokuapp.com/api/messages",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    document.querySelector(".loading").style.display = "block";
    sendMessage({ name, email, subject, message });
    sendNotification(subject, message);
    setMessage("");
    setName("");
    setEmail("");
    setSubject("");
  };
  return (
    <>
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>Contact</h2>
            <p>Contact Us</p>
          </header>
          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="row gy-4">
                <div className="col-md-6">
                  <div className="info-box">
                    <i className="bi bi-geo-alt"></i>
                    <h3>Address</h3>
                    <p>
                      Jalan Cluster Bali II No. A.39, <br /> Kecamatan
                      Kiaracondong, Kota Bandung, Jawa Barat
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box">
                    <i className="bi bi-telephone"></i>
                    <h3>Call Us</h3>
                    <p>
                      +62 858-8271-5554
                      <br />
                      +62 821-1692-1204
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box">
                    <i className="bi bi-envelope"></i>
                    <h3>Email Us</h3>
                    <p>serviceapollo.idn@gmail.com</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box">
                    <i className="bi bi-clock"></i>
                    <h3>Open Hours</h3>
                    <p>
                      Monday - Friday
                      <br />
                      9:00AM - 05:00PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <form className="php-email-form" onSubmit={handleSubmit}>
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-6 ">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your Email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                      required
                      value={subject}
                      onChange={(e) => {
                        setSubject(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="6"
                      placeholder="Message"
                      required
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                    ></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
