 
 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; // Assuming you want brand icons

 
 

const Contacts = () => {
  return (
    <div className="Contacts">
      <header>
        <h1>Contact Me</h1>
      </header>

      <section className="contact-form">
        <h2>Send me an Email</h2>
        <form action="#" method="POST">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          /><br />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          /><br />

          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Message"
            required
          ></textarea><br />

          <input
            type="submit"
            value="Send"
          />
        </form>
      </section>

      <section className="social-icons">
        <h2>Connect with me</h2>
        <a
          href="www.linkedin.com/in/sid-philip-cabador-1a2a34194"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="larger-icons" />
        </a>
        <a
          href="https://github.com/SidPhilip"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="larger-icons" />
        </a>
      </section>
    </div>
  );
}

export default Contacts;
