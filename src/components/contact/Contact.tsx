import { Mail } from "lucide-react";
import { useColor } from "../../ColorContext";
import { MapPin } from "lucide-react";
import "./Contact.scss";
import { Linkedin } from "lucide-react";

const Contact = () => {
  const { currentColor } = useColor();
  return (
    <section id="contact" className="section flex flex-col gap-2">
      <h2 className="text-4xl font-bold text-black-primary lg:text-5xl dark:text-white-primary">
        Get in touch
      </h2>
      <div className="contact-details">
        <div className="email">
          <Mail stroke={currentColor} className="icon" />
          <span aria-label="Link to email">
            alexander.verheecke@hotmail.com{" "}
          </span>
        </div>

        <div className="location">
          <MapPin stroke={currentColor} className="icon" />

          <span>Leeds, UK</span>
        </div>
        <div className="linkedin">
          <Linkedin stroke={currentColor} className="icon" />
          <a
            href="https://www.linkedin.com/in/verheecke/"
            aria-label="Link to LinkedIn"
            rel="noreferrer noopener"
            target="_blank"
          >
            in/verheecke
          </a>
        </div>
      </div>
      {/* <div className="flex gap-4">
        <a
          href="https://github.com/hougesen"
          aria-label="Link to my Github"
          rel="noreferrer noopener"
          target="_blank"
        >
        </a>
      </div> */}
    </section>
  );
};

export default Contact;
