import React, { useState } from "react";
import "../styles/Styles.css";

import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaComment,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const templateParams = {
        user_name: name,
        user_email: email,
        user_phone: phone,
        user_message: message,
      };

      // Use your own SERVICE_ID, TEMPLATE_ID, and USER_ID from EmailJS
      await emailjs.send(
        "service_ta5qvuw",
        "template_vjia2om",
        templateParams,
        "R-GLIk7hTpNZg4el6"
      );

      alert("Form submitted successfully!");
      // Reset the form after successful submission
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container">
      <section className="contact row  col-lg-12 px-2 " id="contact">
        <div className="contact-content section-content col-lg-6 col-md-6 col-sm-6 ">
          <p className="section-subtitle">Contact</p>

          <h2 className="h3 section-title">
            Have You Any Project? Please Drop a Message
          </h2>

          <p className="section-text">
            Get in touch and let me know how i can help. Fill out the form and
            i’ll be in touch as soon as possible.
          </p>

          <ul className="contact-list">
            <li className="contact-list-item">
              <div className="contact-item-icon">
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <div className="wrapper">
                <h3 className="h4 contact-item-title">Address:</h3>

                <address className="contact-info">
                  1/3 Gobichettipalayam, Erode, TamilNadu, Pincode :638453
                </address>
              </div>
            </li>

            <li className="contact-list-item">
              <div className="contact-item-icon">
                <ion-icon name="call-outline"></ion-icon>
              </div>

              <div className="wrapper">
                <h3 className="h4 contact-item-title">Phone:</h3>

                <a href="tel:01234567789" className="contact-info">
                  +91 8428016510
                </a>

                <a href="tel:09765432200" className="contact-info">
                  +91 8760214737
                </a>
              </div>
            </li>

            <li className="contact-list-item">
              <div className="contact-item-icon">
                <ion-icon name="mail-outline"></ion-icon>
              </div>

              <div className="wrapper">
                <h3 className="h4 contact-item-title">Email:</h3>

                <Link href="mailto:info@jack.com" className="contact-info">
                  Selvarajnirmalraj@gmail.com
                </Link>
              </div>
            </li>

            <li>
              <ul className="contac-social-list gap-5 mt-5">
                <li>
                  <a
                    href=" http://www.linkedin.com/in/nirmalraj-s-554489184"
                    className="contact-social-link"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <div className="tooltip">LinkedIn</div>
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Nirmalraj2530?tab=repositories"
                    className="contact-social-link"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <div className="tooltip">GitHub</div>

                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a href="#" className="contact-social-link">
                    <div className="tooltip">Facebook</div>

                    <FaFacebook />
                  </a>
                </li>
              </ul>
              {/* <li>
                  <a href="#" className="contact-social-link">
                    <div className="tooltip"></div>

                    <FaFacebook />
                  </a>
                </li> */}
            </li>
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="contact-form col-lg-6 col-md-6 col-sm-6"
        >
          <div className="form-wrapper">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <div className="input-wrapper">
              <FaUserCircle className="Iconposition" size={20} />
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Name"
                className="input-field"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="form-wrapper">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <div className="input-wrapper">
              <FaEnvelope className="Iconposition" size={20} />
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Email"
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="form-wrapper">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <div className="input-wrapper">
              <FaPhone className="Iconposition" size={20} />
              <input
                type="number"
                name="phone"
                id="phone"
                required
                placeholder="Phone Number"
                className="input-field"
                value={phone}
                onChange={(e) => {
                  const inputText = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                  setPhone(inputText.slice(0, 10)); // Restrict to 10 digits
                }}
                maxLength={10}
                pattern="\d*" // Allow only numeric input
              />
            </div>
          </div>

          <div className="form-wrapper">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <div className="input-wrapper">
              <FaComment className="Iconposition" size={20} />
              <textarea
                name="message"
                id="message"
                required
                placeholder="Write message..."
                className="input-field"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="btnfirst btn1-primary"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;

// import React, { useState } from "react";
// import {
//   FaUserCircle,
//   FaEnvelope,
//   FaPhone,
//   FaComment,
//   FaFacebook,
//   FaLinkedin,
//   FaGithub,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Contact = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [message, setMessage] = useState("");

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();

//   //   // Construct the WhatsApp message link
//   //   const whatsappMessage = `Hello, my name is ${name}. My email is ${email}. My phone number is ${phone}. Message: ${message}`;
//   //   const whatsappLink = `https://wa.me/+918428449794?text=${encodeURIComponent(
//   //     whatsappMessage
//   //   )}`;

//   //   // Open WhatsApp link in a new tab
//   //   window.open(whatsappLink, "_blank");
//   // };
//   const handleSubmit = () => {
//     const whatsappMessage = `Hello, my name is ${name}. My email is ${email}. My phone number is ${phone}. Message: ${message}`;
//     const whatsappLink = `https://wa.me/+918428016510?text=${encodeURIComponent(
//       whatsappMessage
//     )}`;

//     // Open WhatsApp link
//     window.location.href = whatsappLink;
//   };

//   return (
//     <div className="container">
//       <section className="contact row col-lg-12 px-2" id="contact">
//         <div className="contact-content section-content col-lg-6 col-md-6 col-sm-6">
//           <p className="section-subtitle">Contact</p>
//           <h2 className="h3 section-title">
//             Have You Any Project? Please Drop a Message
//           </h2>
//           <p className="section-text">
//             Get in touch and let me know how I can help. Fill out the form, and
//             I’ll be in touch as soon as possible.
//           </p>

//           {/* ... (your existing contact information) */}

//           <ul className="contac-social-list gap-5 mt-5">
//             <li>
//               <a
//                 href="http://www.linkedin.com/in/nirmalraj-s-554489184"
//                 className="contact-social-link"
//               >
//                 <div className="tooltip">LinkedIn</div>
//                 <FaLinkedin />
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://github.com/Nirmalraj2530?tab=repositories"
//                 className="contact-social-link"
//               >
//                 <div className="tooltip">GitHub</div>
//                 <FaGithub />
//               </a>
//             </li>
//             <li>
//               <a href="#" className="contact-social-link">
//                 <div className="tooltip">Facebook</div>
//                 <FaFacebook />
//               </a>
//             </li>
//           </ul>
//         </div>

//         <form
//           onSubmit={handleSubmit}
//           className="contact-form col-lg-6 col-md-6 col-sm-6"
//         >
//           <div className="form-wrapper">
//             <label htmlFor="name" className="form-label">
//               Name
//             </label>
//             <div className="input-wrapper">
//               <FaUserCircle className="Iconposition" size={20} />
//               <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 required
//                 placeholder="Name"
//                 className="input-field"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//           </div>

//           <div className="form-wrapper">
//             <label htmlFor="email" className="form-label">
//               Email
//             </label>
//             <div className="input-wrapper">
//               <FaEnvelope className="Iconposition" size={20} />
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 required
//                 placeholder="Email"
//                 className="input-field"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//           </div>

//           <div className="form-wrapper">
//             <label htmlFor="phone" className="form-label">
//               Phone
//             </label>
//             <div className="input-wrapper">
//               <FaPhone className="Iconposition" size={20} />
//               <input
//                 type="tel"
//                 name="phone"
//                 id="phone"
//                 required
//                 placeholder="Phone Number"
//                 className="input-field"
//                 value={phone}
//                 onChange={(e) => {
//                   const inputText = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
//                   setPhone(inputText.slice(0, 10)); // Restrict to 10 digits
//                 }}
//                 maxLength={10}
//                 pattern="\d*" // Allow only numeric input
//               />
//             </div>
//           </div>

//           <div className="form-wrapper">
//             <label htmlFor="message" className="form-label">
//               Message
//             </label>
//             <div className="input-wrapper">
//               <FaComment className="Iconposition" size={20} />
//               <textarea
//                 name="message"
//                 id="message"
//                 required
//                 placeholder="Write message..."
//                 className="input-field"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//               ></textarea>
//             </div>
//           </div>

//           <button type="submit" className="btnfirst btn1-primary">
//             Send WhatsApp Message
//           </button>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default Contact;
