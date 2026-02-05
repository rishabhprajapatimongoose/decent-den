import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useAnimationControls,
  useMotionValue,
} from "framer-motion";

import SideNav from "../components/common/SideNav";

const DecentDenLanding = () => {
  const containerRef = useRef(null);

  /* ---------------- PHASE ---------------- */

  const [phase, setPhase] = useState<"loading" | "intro" | "scroll">("loading");

  /* ---------------- CONTROLS ---------------- */

  const logoCtrl = useAnimationControls();
  const weelCtrl = useAnimationControls();
  const textCtrl = useAnimationControls();
  const btnCtrl = useAnimationControls();

  /* ---------------- SCROLL ---------------- */

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Raw scroll
  const raw = useSpring(scrollYProgress, {
    stiffness: 170,
    damping: 24,
    mass: 0.9,
  });

  // Freeze until intro ends
  const scrollOffset = useMotionValue(0);

  const scroll = useTransform(raw, (v) => Math.max(0, v - scrollOffset.get()));

  /* ---------------- INTRO ---------------- */

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";

    const run = async () => {
      // Loader
      await wait(1000);
      setPhase("intro");

      // Intro animations
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

      // Capture current scroll
      scrollOffset.set(raw.get());

      document.body.style.overflow = "auto";
      setPhase("scroll");
    };

    run();
  }, []);

  /* ---------------- TIMELINE ---------------- */

  const R1 = 0.4;

  // Logo
  const logoX = useTransform(scroll, [0, R1], ["0vw", "-35vw"]);
  const logoScale = useTransform(scroll, [0, R1], [0.8, 0.6]);

  // weel
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

  return (
    <div
      ref={containerRef}
      className="isolation relative w-full h-[240vh] bg-pink-300"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0 w-full selection:none">
          <img src="/heroBackground.png" className="w-full h-full" />
        </div>

        {/* iNITIAL LOADER  */}
        {phase === "loading" && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black">
            <img src="/logoDecentDen.png" className="w-72 " />
          </div>
        )}

        {/* LOGO */}
        <motion.div
          initial={{ y: "45vh", scale: 1.2 }}
          animate={logoCtrl}
          style={phase === "scroll" ? { x: logoX, scale: logoScale } : {}}
          className="absolute left-1/2 -translate-x-1/2 z-40"
        >
          <img src="/logoDecentDen.png" className="w-72" />
        </motion.div>

        {/* KING */}
        <motion.div
          style={{
            opacity: kingOpacity,
            scale: kingScale,
            y: kingY,
          }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10"
        >
          <img src="/king.png" className="h-[85vh] object-contain" />
        </motion.div>

        {/* weel */}
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={weelCtrl}
          style={phase === "scroll" ? { scale: weelScale, y: weelY } : {}}
          className="absolute bottom-0 z-20 w-full h-[65vh] flex justify-center origin-bottom"
        >
          <img
            src="/layerWeel.png"
            className="w-full object-contain object-top"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={textCtrl}
          style={phase === "scroll" ? { x: textX } : {}}
          className="absolute bottom-28 left-1/2 -translate-x-1/2 z-30 text-center w-fit"
        >
          <p className="text-center text-white text-xl md:text-2xl font-irish">
            They Call It Decent.. By Name Only!
          </p>

          <motion.p
            style={{ opacity: descOpacity }}
            className="text-gray-400 text-xs md:text-sm mt-2 font-irish"
          >
            A Reality show for Blockchain content creators with Live Streaming &
            Social Media Votings
          </motion.p>
        </motion.div>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={btnCtrl}
          style={phase === "scroll" ? { x: btnX } : {}}
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
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16 3C13.3478 3 10.8043 4.02723 8.92893 5.85571C7.05357 7.68419 6 10.1641 6 12.75V19.25C6 21.8359 7.05357 24.3158 8.92893 26.1443C10.8043 27.9728 13.3478 29 16 29C18.6522 29 21.1957 27.9728 23.0711 26.1443C24.9464 24.3158 26 21.8359 26 19.25V12.75C26 10.1641 24.9464 7.68419 23.0711 5.85571C21.1957 4.02723 18.6522 3 16 3ZM8 12.75C8 10.6813 8.84285 8.69735 10.3431 7.23457C11.8434 5.77178 13.8783 4.95 16 4.95C18.1217 4.95 20.1566 5.77178 21.6569 7.23457C23.1571 8.69735 24 10.6813 24 12.75V19.25C24 21.3187 23.1571 23.3026 21.6569 24.7654C20.1566 26.2282 18.1217 27.05 16 27.05C13.8783 27.05 11.8434 26.2282 10.3431 24.7654C8.84285 23.3026 8 21.3187 8 19.25V12.75Z"
              fill="#A9B4CF"
            />
            <path
              d="M15.2939 21.7044C15.4814 21.8916 15.7356 21.9968 16.0006 21.9968C16.2656 21.9968 16.5197 21.8916 16.7072 21.7044L19.7072 18.7057C19.8839 18.5161 19.98 18.2654 19.9755 18.0063C19.9709 17.7473 19.866 17.5001 19.6827 17.3169C19.4995 17.1337 19.2523 17.0287 18.9933 17.0241C18.7342 17.0196 18.4835 17.1157 18.2939 17.2924L16.0006 19.5817L13.7072 17.2897C13.6149 17.1942 13.5046 17.1181 13.3825 17.0658C13.2605 17.0134 13.1293 16.9859 12.9965 16.9848C12.8637 16.9837 12.7321 17.0091 12.6092 17.0594C12.4863 17.1097 12.3747 17.184 12.2808 17.278C12.187 17.3719 12.1128 17.4836 12.0626 17.6065C12.0123 17.7294 11.9871 17.8611 11.9883 17.9939C11.9895 18.1267 12.0172 18.2579 12.0697 18.3799C12.1221 18.5019 12.1984 18.6122 12.2939 18.7044L15.2939 21.7044ZM16.0006 12.0737C15.7177 12.0737 15.4464 11.9613 15.2463 11.7613C15.0463 11.5612 14.9339 11.2899 14.9339 11.007C14.9339 10.7241 15.0463 10.4528 15.2463 10.2528C15.4464 10.0527 15.7177 9.94037 16.0006 9.94037C16.2835 9.94037 16.5548 10.0527 16.7548 10.2528C16.9549 10.4528 17.0672 10.7241 17.0672 11.007C17.0672 11.2899 16.9549 11.5612 16.7548 11.7613C16.5548 11.9613 16.2835 12.0737 16.0006 12.0737ZM14.9339 14.7617C14.9339 14.9018 14.9615 15.0405 15.0151 15.1699C15.0687 15.2993 15.1473 15.4169 15.2463 15.5159C15.3454 15.615 15.463 15.6936 15.5924 15.7472C15.7218 15.8008 15.8605 15.8284 16.0006 15.8284C16.1406 15.8284 16.2794 15.8008 16.4088 15.7472C16.5382 15.6936 16.6558 15.615 16.7548 15.5159C16.8539 15.4169 16.9324 15.2993 16.986 15.1699C17.0396 15.0405 17.0672 14.9018 17.0672 14.7617C17.0672 14.4788 16.9549 14.2075 16.7548 14.0075C16.5548 13.8074 16.2835 13.695 16.0006 13.695C15.7177 13.695 15.4464 13.8074 15.2463 14.0075C15.0463 14.2075 14.9339 14.4788 14.9339 14.7617Z"
              fill="#A9B4CF"
            />
          </svg>

          <span className="text-[10px] tracking-widest text-white/50 uppercase">
            Scroll Down
          </span>
        </motion.div>

        {/* NAV */}
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

function wait(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

export default DecentDenLanding;
