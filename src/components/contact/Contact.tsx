import { Github, Mail } from "lucide-react";
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

          <span>Leeds, UK (soon relocating to London)</span>
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
        <div className="github">
          <Github stroke={currentColor} className="icon" />
          <a
            href="https://github.com/AlexanderVerheecke"
            aria-label="Link to GitHub"
            rel="noreferrer noopener"
            target="_blank"
          >
            AlexanderVerheecke
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
