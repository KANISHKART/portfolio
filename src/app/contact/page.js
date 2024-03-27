import "./contact.css";
import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="contact-block">
      <div className="container">
        <div className="social-links">
          <a href="mailto:kanishkar.thiruna@gmail.com" target="_blank">
            <Image src="./email.svg" height={30} width={30} alt="email" />
          </a>
          <a
            href="https://www.linkedin.com/in/kanishkarthirunavukkarasu"
            target="_blank"
          >
            <Image src="./linkedin.svg" height={30} width={30} alt="linkedin" />
          </a>
          <a href="https://github.com/KANISHKART" target="_blank">
            {" "}
            <Image src="./github.svg" height={30} width={30} alt="github" />
          </a>
        </div>

        <div className="title">
          {" "}
          Designed & Developed by Kanishkar T 🤙 2024
        </div>
      </div>
    </section>
  );
}
