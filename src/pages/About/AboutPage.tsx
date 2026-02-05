import React from "react";

const Highlight = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span className={`text-black font-inika-bold text-[32px] ${className}`}>
    {children}
  </span>
);

const GridHeading = ({
  lightText,
  darkText,
}: {
  lightText: string;
  darkText: string;
}) => (
  <p className={`text-blue-600 font-irish text-[40px] leading-[105%]`}>
    {lightText} <span className={"text-slate-900 text-nowrap"}>{darkText}</span>
  </p>
);

/** List item for the "Inside the Den" section */
const DenListItem = ({ text }: { text: string }) => (
  <li className="flex items-center gap-2.5">
    <span className="">✓</span> {text}
  </li>
);

// --- Main Page Component ---

const AboutPage = () => {
  const base = "text-black leading-[160%]";

  const challenges = [
    "Attacks and defense",
    "Team-based challenges",
    "Live audience voting",
    "Brand-led tasks & missions",
    "Real-time creator storytelling",
  ];

  return (
    <section className="isolation min-h-screen w-full bg-[url('/aboutBackground.png')] bg-top flex">
      <div className="bg-white/90 w-full relative flex-1 text-slate-900 px-6 flex flex-col items-center justify-between">
        <div className="mt-18 max-w-5xl w-full text-center">
          {/* Main Title */}
          <h2 className="text-[64px] font-irish">
            WHAT IS{" "}
            <span className="bg-slate-900 text-white p-2.5 rounded-[10px]">
              DECENT DEN?
            </span>
          </h2>

          {/* Main Body Text */}
          <p className="mt-15 text-2xl leading-[160%] text-slate-600 font-inika">
            Brings together{" "}
            <Highlight className={base}>blockchain content creators</Highlight>{" "}
            in a high-energy,{" "}
            <Highlight className={base}>reality-show</Highlight> format. It
            gives them a space to unite, collaborate, empower each other, and
            strengthen the{" "}
            <Highlight className={base}>Blockchain & Web3 ecosystem.</Highlight>{" "}
            Through highly engaging content, it helps take this technology to{" "}
            <Highlight className={base}>
              people who still don't know about it
            </Highlight>{" "}
            and trust us,{" "}
            <Highlight className={base}>they're in the millions.</Highlight>{" "}
            Brings together in a high-energy, format. It gives them a space to
            unite, collaborate, empower each other, and strengthen the{" "}
          </p>

          {/* Bottom Grid */}
          <div className="grid md:grid-cols-2 gap-12 mt-10 text-left py-10 w-full">
            {/* Why Engaging Section */}
            <div className="space-y-3">
              <GridHeading
                lightText="did you say,"
                darkText="WHY IS IT ENGAGING?"
              />
              <p className="text-base text-slate-500">
                You start as an individual. You earn your place in a team but
                not everyone makes it so while you play together, then betrayals
                force you back into survival mode.
              </p>
            </div>

            {/* You'll Face Section */}
            <div className="items-end">
              <GridHeading
                lightText="inside the den,"
                darkText="YOU'LL FACE:"
              />
              <ul className="space-y-2 text-xl mt-3">
                {challenges.map((item) => (
                  <DenListItem key={item} text={item} />
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Abstract Bitcoin Watermark Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
          <img src="/aboutBackground.png" className="w-full" alt="Watermark" />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
