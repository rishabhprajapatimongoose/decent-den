import { useEffect, useRef, useState, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useAnimationControls,
  useMotionValue,
} from "framer-motion";

import SideNav from "../components/common/SideNav";

/* ---------------- Config ---------------- */

const INTRO_DELAY = 1000;

const SCROLL_RANGE_1 = 0.4;

const KING_RANGE: [number, number] = [0.2, 0.6];
const NAV_RANGE: [number, number] = [0.2, 0.6];

/* ---------------- Utils ---------------- */

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

/* ---------------- Component ---------------- */

const DecentDenLanding = () => {
  /* ---------------- Refs ---------------- */

  const containerRef = useRef<HTMLDivElement | null>(null);
  const mounted = useRef(false);

  /* ---------------- Phase ---------------- */

  const [phase, setPhase] = useState<"loading" | "intro" | "scroll">("loading");

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

  const scrollOffset = useMotionValue(0);

  const scroll = useTransform(rawScroll, (v) =>
    Math.max(0, v - scrollOffset.get()),
  );

  /* ---------------- Intro Timeline ---------------- */
  const runIntro = useCallback(async () => {
    await wait(INTRO_DELAY);

    if (!mounted.current) return;

    setPhase("intro");

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

    if (!mounted.current) return;

    scrollOffset.set(rawScroll.get());

    document.body.style.overflow = "auto";

    setPhase("scroll");
  }, [logoCtrl, weelCtrl, textCtrl, btnCtrl, rawScroll, scrollOffset]);

  /* ---------------- Lifecycle ---------------- */

  useEffect(() => {
    mounted.current = true;

    const originalOverflow = document.body.style.overflow;

    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";

    queueMicrotask(() => {
      runIntro().catch((e) => console.error("Intro failed:", e));
    });

    return () => {
      mounted.current = false;
      document.body.style.overflow = originalOverflow || "auto";
    };
  }, [runIntro]);

  /* ---------------- Resize Sync ---------------- */

  useEffect(() => {
    const syncScroll = () => {
      scrollOffset.set(rawScroll.get());
    };

    window.addEventListener("resize", syncScroll);

    return () => window.removeEventListener("resize", syncScroll);
  }, [rawScroll]);

  /* ---------------- Timeline ---------------- */

  // Logo
  const logoX = useTransform(scroll, [0, SCROLL_RANGE_1], ["0vw", "-35vw"]);

  const logoScale = useTransform(scroll, [0, SCROLL_RANGE_1], [0.8, 0.6]);

  // Wheel
  const weelScale = useTransform(scroll, [0, SCROLL_RANGE_1], [1, 0.7]);

  const weelY = useTransform(scroll, [0, SCROLL_RANGE_1], ["0%", "10%"]);

  // Text
  const textX = useTransform(scroll, [0.1, SCROLL_RANGE_1], ["0vw", "-25vw"]);

  const descOpacity = useTransform(scroll, [0.2, SCROLL_RANGE_1], [0, 1]);

  // Button
  const btnX = useTransform(scroll, [0.1, SCROLL_RANGE_1], ["0vw", "40vw"]);

  // King
  const kingOpacity = useTransform(scroll, KING_RANGE, [0, 1]);

  const kingScale = useTransform(scroll, KING_RANGE, [0.9, 1.1]);

  const kingY = useTransform(scroll, KING_RANGE, ["12%", "-5%"]);

  // Nav
  const navX = useTransform(scroll, NAV_RANGE, ["100%", "0%"]);

  const navOpacity = useTransform(scroll, NAV_RANGE, [0, 1]);

  /* ---------------- Render ---------------- */

  return (
    <div ref={containerRef} className="relative w-full h-[240vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0 select-none">
          <img
            src="/heroBackground.png"
            className="w-full h-full object-cover"
            alt="bg"
          />
        </div>

        {/* Loader */}
        {phase === "loading" && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black">
            <img src="/logoDecentDen.png" className="w-72" alt="logo" />
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
          <img src="/logoDecentDen.png" className="w-72" />
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
          <img src="/king.png" className="h-[85vh] object-contain" alt="king" />
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
            className="w-full object-contain object-top"
            alt="wheel"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={textCtrl}
          style={phase === "scroll" ? { x: textX } : undefined}
          className="absolute bottom-28 left-1/2 -translate-x-1/2 z-30 text-center w-fit"
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

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={btnCtrl}
          style={phase === "scroll" ? { x: btnX } : undefined}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2.5"
        >
          <span className="text-[10px] text-white/50 uppercase">
            Scroll Down
          </span>
        </motion.div>

        {/* Nav */}
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
