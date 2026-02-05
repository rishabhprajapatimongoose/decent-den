import React from "react";
import SectionHeader from "../../components/common/SectionHeader";
import PlatformCard from "./components/PlatformCard";

const ParticipationsPara = () => {
  return (
    <section className="space-y-3">
      <h2 className="font-inika-bold text-white text-[28px] uppercase  ">
        Who Participates & Watches
      </h2>
      <p className="font-inika text-white ">
        Decent Den brings together the most engaged and influential voices in
        the Web3 ecosystem.
      </p>
      <ul className="list-disc text-white list-inside font-inika-bold  text-sm space-y-2 leading-[160%] ">
        <li>Crypto-native users</li>
        <li>Web3 creators</li>
      </ul>
    </section>
  );
};

const ParticipationsPage: React.FC = () => {
  const platforms: PlatformCardProps[] = [
    {
      icon: "/youtubeLogo.png", // Replace with your asset
      title: "YouTube",
      description: "Full episodes & extended cuts",
    },
    {
      icon: "/twitterLogo.png", // Replace with your asset
      title: "X (Twitter)",
      description: "Live moments & viral clips",
    },
    {
      icon: "/instagramLogo.png", // Replace with your asset
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
          <SectionHeader prefix="participations" />
        </div>

        <div className="space-y-12 max-w-2xl">
          {/* Who Participates Section */}
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
      <aside className="w-auto lg:w-1/2 relative h-auto">
        <div className="absolute inset-0 z-10 block" />
        <img
          src="/ParticipationImage.png" // Replace with your asset
          alt="Participations Hero"
          className="w-auto h-full object-cover"
        />

        {/* Call to Action Button */}
        <div className="absolute bottom-12 left-0 w-full px-8 md:px-16 z-20">
          <button className="w-full bg-white text-black py-4 rounded-full font-irish text-xl uppercase st hover:bg-gray-200 transition-colors shadow-[0_10px_30px_rgba(255,255,255,0.1)]">
            Click Here To Participate
          </button>
        </div>
      </aside>
    </div>
  );
};

export default ParticipationsPage;
