import React from "react";
import SectionHeader from "../../components/common/SectionHeader";
import PlatformCard, {
  type PlatformCardProps,
} from "./components/PlatformCard";
import ParticipationsPara from "./components/ParticipationsPara";

const ParticipationsPage: React.FC = () => {
  const platforms: PlatformCardProps[] = [
    {
      icon: "/youtubeLogo.png",
      title: "YouTube",
      description: "Full episodes & extended cuts",
    },
    {
      icon: "/twitterLogo.png",
      title: "X (Twitter)",
      description: "Live moments & viral clips",
    },
    {
      icon: "/instagramLogo.png",
      title: "Shorts & Reels",
      description: "Bite-sized highlights",
    },
    {
      icon: "/liveLogo.png",
      title: "Live Streams",
      description: "Real-time engagement",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#010511] flex flex-col lg:flex-row overflow-hidden">
      {/* Left Content Column */}
      <main className="w-full lg:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center">
        <div className="mb-18">
          <SectionHeader prefix="participations" className="justify-start" />
        </div>

        <div className="space-y-12 max-w-2xl">
          {/* Participates para */}
          <ParticipationsPara />

          {/* Platform Grid Section */}
          <section>
            <h2 className="font-inika-bold  text-white text-[28px] uppercase  mb-3">
              Where the Show Lives
            </h2>
            <p className="font-inika text-white text-base lleading-[100%] mb-10">
              Multi-platform distribution ensures maximum reach and engagement
              across Web3 communities.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {platforms.map((platform, index) => (
                <PlatformCard key={index} {...platform} />
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Right Image Column */}
      <aside className="w-1/3 relative h-auto border-4 border-[#506191]">
        <div className="absolute inset-0 z-10 block" />
        <img
          src="/ParticipationImage.png"
          alt="Participations Hero"
          className="w-auto h-full object-cover"
        />

        {/* butn */}
        <div className="absolute bottom-14.5 left-0 w-full px-16 z-20">
          <button className="w-full bg-white text-black py-4 rounded-full font-irish text-xl uppercase st hover:bg-gray-200 transition-colors">
            Click Here To Participate
          </button>
        </div>
      </aside>
    </div>
  );
};

export default ParticipationsPage;
