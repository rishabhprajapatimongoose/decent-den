import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useAnimationControls,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";

import SideNav from "../components/common/SideNav";

/* -----------------------------------------
   Utility
------------------------------------------ */
function wait(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

/* -----------------------------------------
   Component
------------------------------------------ */
const DecentDenLanding = () => {
  /* ---------------- Refs ---------------- */

  const containerRef = useRef<HTMLDivElement | null>(null);
  const mountedRef = useRef(false);

  /* ---------------- State ---------------- */

  const [phase, setPhase] = useState<"loading" | "intro" | "scroll">("loading");

  /* ---------------- Motion Pref ---------------- */

  const prefersReducedMotion = useReducedMotion();

  /* ---------------- Controls ---------------- */

  const logoCtrl = useAnimationControls();
  const weelCtrl = useAnimationControls();
  const textCtrl = useAnimationControls();
  const btnCtrl = useAnimationControls();

  /* ---------------- Scroll ---------------- */

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const rawScroll = useSpring(scrollYProgress, {
    stiffness: 170,
    damping: 24,
    mass: 0.9,
  });

  // Offset for intro freeze
  const scrollOffset = useMotionValue(0);

  const scroll = useTransform(rawScroll, (v) =>
    Math.max(0, v - scrollOffset.get()),
  );

  /* -----------------------------------------
     Intro / Loader Logic (SAFE)
  ------------------------------------------ */
  useEffect(() => {
    mountedRef.current = true;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    window.scrollTo({
      top: 0,
      behavior: "instant" as ScrollBehavior,
    });

    const runIntro = async () => {
      try {
        /* Loader delay */
        await wait(800);

        if (!mountedRef.current) return;

        setPhase("intro");

        /* Skip heavy animation if reduced motion */
        if (!prefersReducedMotion) {
          await Promise.all([
            logoCtrl.start({
              y: "8vh",
              scale: 0.8,
              transition: { duration: 0.8, ease: "easeOut" },
            }),

            weelCtrl.start({
              y: "0%",
              opacity: 1,
              transition: { duration: 0.9, ease: "easeOut" },
            }),

            textCtrl.start({
              y: 0,
              opacity: 1,
              transition: { duration: 0.7 },
            }),

            btnCtrl.start({
              y: 0,
              opacity: 1,
              transition: { duration: 0.6 },
            }),
          ]);
        }

        if (!mountedRef.current) return;

        // Freeze scroll at current position
        scrollOffset.set(rawScroll.get());

        setPhase("scroll");
      } catch (err) {
        console.error("Intro animation failed:", err);
      } finally {
        document.body.style.overflow = originalOverflow || "auto";
      }
    };

    runIntro();

    /* Cleanup */
    return () => {
      mountedRef.current = false;
      document.body.style.overflow = originalOverflow || "auto";
    };
  }, []);

  /* -----------------------------------------
     Resize Stabilizer
  ------------------------------------------ */
  useEffect(() => {
    const handleResize = () => {
      scrollOffset.set(rawScroll.get());
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [rawScroll]);

  /* -----------------------------------------
     Scroll Timeline
  ------------------------------------------ */

  const R1 = 0.4;

  // Logo
  const logoX = useTransform(scroll, [0, R1], ["0vw", "-35vw"]);
  const logoScale = useTransform(scroll, [0, R1], [0.8, 0.6]);

  // Wheel
  const weelScale = useTransform(scroll, [0, R1], [1, 0.7]);
  const weelY = useTransform(scroll, [0, R1], ["0%", "10%"]);

  // Text
  const textX = useTransform(scroll, [0.1, R1], ["0vw", "-25vw"]);
  const descOpacity = useTransform(scroll, [0.2, R1], [0, 1]);

  // Button
  const btnX = useTransform(scroll, [0.1, R1], ["0vw", "40vw"]);

  // King
  const kingOpacity = useTransform(scroll, [0.2, 0.6], [0, 1]);
  const kingScale = useTransform(scroll, [0.2, 0.6], [0.9, 1.1]);
  const kingY = useTransform(scroll, [0.2, 0.6], ["12%", "-5%"]);

  // Nav
  const navX = useTransform(scroll, [0.2, 0.6], ["100%", "0%"]);
  const navOpacity = useTransform(scroll, [0.2, 0.6], [0, 1]);

  /* -----------------------------------------
     Render
  ------------------------------------------ */

  return (
    <div ref={containerRef} className="relative w-full h-[240vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 w-full select-none">
          <img
            src="/heroBackground.png"
            alt="Background"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        {/* Loader */}
        {phase === "loading" && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black">
            <img src="/logoDecentDen.png" alt="Loading" className="w-72" />
          </div>
        )}

        {/* Logo */}
        <motion.div
          initial={{ y: "45vh", scale: 1.2 }}
          animate={logoCtrl}
          style={
            phase === "scroll" ? { x: logoX, scale: logoScale } : undefined
          }
          className="absolute left-1/2 -translate-x-1/2 z-40"
        >
          <img src="/logoDecentDen.png" alt="Logo" className="w-72" />
        </motion.div>

        {/* King */}
        <motion.div
          style={{
            opacity: kingOpacity,
            scale: kingScale,
            y: kingY,
          }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10"
        >
          <img
            src="/king.png"
            alt="King"
            onError={(e) => (e.currentTarget.style.display = "none")}
            className="h-[85vh] object-contain"
          />
        </motion.div>

        {/* Wheel */}
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={weelCtrl}
          style={
            phase === "scroll" ? { scale: weelScale, y: weelY } : undefined
          }
          className="absolute bottom-0 z-20 w-full h-[65vh] flex justify-center origin-bottom"
        >
          <img
            src="/layerWeel.png"
            alt="Wheel"
            className="w-full object-contain object-top"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={textCtrl}
          style={phase === "scroll" ? { x: textX } : undefined}
          className="absolute bottom-28 left-1/2 -translate-x-1/2 z-30 text-center"
        >
          <p className="text-white text-xl md:text-2xl font-irish">
            They Call It Decent. By Name Only!
          </p>

          <motion.p
            style={{ opacity: descOpacity }}
            className="text-gray-400 text-xs md:text-sm mt-2 font-irish"
          >
            A Reality show for Blockchain content creators with Live Streaming &
            Social Media Votings
          </motion.p>
        </motion.div>

        {/* Scroll Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={btnCtrl}
          style={phase === "scroll" ? { x: btnX } : undefined}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2.5"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 3C13.3478 3..."
              fill="#A9B4CF"
            />
          </svg>

          <span className="text-[10px] text-white/50 uppercase">
            Scroll Down
          </span>
        </motion.div>

        {/* Side Nav */}
        <motion.div
          style={{ x: navX, opacity: navOpacity }}
          className="fixed right-10 top-1/2 -translate-y-1/2 z-50"
        >
          <SideNav />
        </motion.div>
      </div>
    </div>
  );
};

export default DecentDenLanding;
