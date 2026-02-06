import React from "react";
import SectionHeader from "../../components/common/SectionHeader";

const Highlight = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={`text-black font-inika-bold text-[32px] leading-[160%] ${className}`}
  >
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
  <p className={`text-[#88ABD3] font-irish text-[40px] leading-[105%]`}>
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
  const challenges = [
    "Attacks and defense",
    "Team-based challenges",
    "Live audience voting",
    "Brand-led tasks & missions",
    "Real-time creator storytelling",
  ];

  return (
    <section className="isolation min-h-screen w-full bg-[url('/aboutBackground.png')] bg-top flex">
      <div className="bg-[#E9ECF4]/90 w-full relative flex-1 text-slate-900 px-6 flex flex-col items-center justify-between">
        <div className="mt-18 max-w-5xl w-full text-center">
          <SectionHeader
            prefix="What is"
            highlight="Decent Den?"
            prefixColor="#181C37"
            highlightColor="#FFFFFF"
          />
          {/* Main Body Text */}
          <p className="mt-15 text-2xl leading-[160%] text-slate-600 font-inika">
            Brings together <Highlight>blockchain content creators</Highlight>{" "}
            in a high-energy, <Highlight>reality-show</Highlight> format. It
            gives them a space to unite, collaborate, empower each other, and
            strengthen the <Highlight>Blockchain & Web3 ecosystem.</Highlight>{" "}
            Through highly engaging content, it helps take this technology to{" "}
            <Highlight>people who still don't know about it</Highlight> and
            trust us, <Highlight>they're in the millions.</Highlight> Brings
            together in a high-energy, format. It gives them a space to unite,
            collaborate, empower each other, and strengthen the{" "}
          </p>

          {/* Bottom Grid */}
          <div className="flex justify-between gap-12 mt-10 text-left py-10 w-full">
            {/* Why Engaging Section */}
            <div className="space-y-3 ">
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
            <div className="items-end shrink-0">
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
      </div>
    </section>
  );
};

export default AboutPage;
