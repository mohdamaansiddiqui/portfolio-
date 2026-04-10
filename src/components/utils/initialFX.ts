import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  // 1. Safety check for Main element
  const mainElement = document.getElementsByTagName("main")[0];
  if (!mainElement) return; 

  document.body.style.overflowY = "auto";
  if (smoother) smoother.paused(false);
  
  mainElement.classList.add("main-active");

  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  // 2. Helper function to safely split and animate
  const safeSplitAndAnimate = (selector: string | string[], delay: number) => {
    // Check if at least one element exists before splitting
    const elements = Array.isArray(selector) ? selector : [selector];
    const exists = elements.some(s => document.querySelector(s));
    
    if (!exists) return null;

    const split = new SplitText(selector, {
      type: "chars,lines",
      linesClass: "split-line",
    });

    gsap.fromTo(
      split.chars,
      { opacity: 0, y: 80, filter: "blur(5px)" },
      {
        opacity: 1,
        duration: 1.2,
        filter: "blur(0px)",
        ease: "power3.inOut",
        y: 0,
        stagger: 0.025,
        delay: delay,
      }
    );
    return split;
  };

  // Execute animations with existence checks
  safeSplitAndAnimate([".landing-info h3", ".landing-intro h2", ".landing-intro h1"], 0.3);
  
  const TextProps = { type: "chars,lines", linesClass: "split-h2" };
  const landingText2 = document.querySelector(".landing-h2-info") ? new SplitText(".landing-h2-info", TextProps) : null;

  // Simple selector animations
  if (document.querySelector(".landing-info-h2")) {
    gsap.fromTo(".landing-info-h2", { opacity: 0, y: 30 }, { opacity: 1, duration: 1.2, ease: "power1.inOut", y: 0, delay: 0.8 });
  }

  // Header and nav sections
  const navTargets = [".header", ".icons-section", ".nav-fade"].filter(s => document.querySelector(s));
  if (navTargets.length > 0) {
    gsap.fromTo(navTargets, { opacity: 0 }, { opacity: 1, duration: 1.2, ease: "power1.inOut", delay: 0.1 });
  }

  // Loop Logic - Only run if all targets exist
  const landingText3 = document.querySelector(".landing-h2-info-1") ? new SplitText(".landing-h2-info-1", TextProps) : null;
  const landingText4 = document.querySelector(".landing-h2-1") ? new SplitText(".landing-h2-1", TextProps) : null;
  const landingText5 = document.querySelector(".landing-h2-2") ? new SplitText(".landing-h2-2", TextProps) : null;

  if (landingText2 && landingText3) LoopText(landingText2, landingText3);
  if (landingText4 && landingText5) LoopText(landingText4, landingText5);
}

function LoopText(Text1: SplitText, Text2: SplitText) {
  // Check if chars actually exist to prevent GSAP "Target not found" warnings
  if (!Text1.chars.length || !Text2.chars.length) return;

  var tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(Text2.chars, { opacity: 0, y: 80 }, { opacity: 1, duration: 1.2, ease: "power3.inOut", y: 0, stagger: 0.1, delay: delay }, 0)
    .fromTo(Text1.chars, { y: 80 }, { duration: 1.2, ease: "power3.inOut", y: 0, stagger: 0.1, delay: delay2 }, 1)
    .fromTo(Text1.chars, { y: 0 }, { y: -80, duration: 1.2, ease: "power3.inOut", stagger: 0.1, delay: delay }, 0)
    .to(Text2.chars, { y: -80, duration: 1.2, ease: "power3.inOut", stagger: 0.1, delay: delay2 }, 1);
}