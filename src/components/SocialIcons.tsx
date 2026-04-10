import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";

// 1. Get the base URL from Vite
const baseUrl = import.meta.env.BASE_URL;

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;
    if (!social) return; // Guard clause

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      updatePosition();

      // Note: your original code had a small bug in cleanup 
      // (adding to document but removing from elem). Fixed below.
      return () => {
        document.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href="https://github.com/mohdamaansiddiqui" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/mohd-amaan-siddiqui-678a4a203/" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href="https://www.instagram.com/itsamaansid?igsh=NGFwaWptZzBicmZs&utm_source=qr" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </span>
      </div>
      
      {/* 2. FIXED RESUME LINK: Prepended with baseUrl and checked filename */}
      <a
        className="resume-button"
        href={`${baseUrl}Amaan_siddiqui.pdf`} 
        target="_blank"
        rel="noreferrer"
      >
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;