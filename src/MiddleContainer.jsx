import React, { useEffect } from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { faFileCode } from "@fortawesome/free-solid-svg-icons";
// import { faSketch} from '@fortawesome/free-solid-svg-icons'
import AOS from "aos";
import "aos/dist/aos.css";

function MiddleContainer() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div>
      <div id="middle-container" class="middle-container">
        <h1 className="adverts">Web Design & Development</h1>

        <div className="advert">
          <div className="adver" data-aos="zoom-in-down" data-aos-duration="2000">
            <FontAwesomeIcon
              className="social-icon"
              icon={faLaptopCode}
              size="6x"
              color="black"
            />
            <h4 className="fast">Web Design</h4>
            <p className="fasts">
              Whether you already have a vision in mind or want me to create one from scratch, I'll
              create a beautiful, easy-to-use, mobile and tablet responsive website with
              excellent user experience in mind.
            </p>
          </div>

          <div className="adver" data-aos="zoom-in-down" data-aos-duration="2000">
            <FontAwesomeIcon
              className="social-icon"
              icon={faPencilRuler}
              size="6x"
              color="black"
            />
            <h4 className="fast">UX / UI Design</h4>
            <p className="fasts">
              Attracting users/clients to your website and having them returning to your website is probably your number one goal.  From  the design of your logo to 
              the placement of images and videos whilst adhering to varying color pallets I will assist you in designing or redesigning your company/brand.
            </p>
          </div>

          <div className="adver" data-aos="zoom-in-down" data-aos-duration="2000">
            <FontAwesomeIcon
              className="social-icon"
              icon={faFileCode}
              size="6x"
              color="black"
            />
            <h4 className="fast">Web Development</h4>
            <p className="fasts">
              Now that we have an idea of the direction you want to go, it's time for me to get to work. I'll write and create clean and clear code using the best and most up-to-date coding
              languages to make sure your website functions exactly how you want it to.
            </p>
          </div>
        </div>

        <button className="started-button">
          <a href="./contact" title="Contact me">
            Let's get started!
          </a>
        </button>
      </div>
    </div>
  );
}

export default MiddleContainer;
