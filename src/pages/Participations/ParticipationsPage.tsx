import React from "react";

interface PlatformCardProps {
  icon: string | React.ReactNode;
  title: string;
  description: string;
}

// --- Reusable Platform Card ---
const PlatformCard: React.FC<PlatformCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="bg-[#050B18] border border-blue-900/30 rounded-xl p-5 flex flex-col gap-3 transition-all hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]">
    <div className="w-10 h-10 flex items-center justify-center">
      {typeof icon === "string" ? (
        <img src={icon} alt={title} className="w-full h-full object-contain" />
      ) : (
        icon
      )}
    </div>
    <div>
      <h4 className="font-irish text-white text-xl ">{title}</h4>
      <p className="font-inika text-gray-400 text-xs leading-relaxed mt-1">
        {description}
      </p>
    </div>
  </div>
);

const ParticipationsPage: React.FC = () => {
  const platforms: PlatformCardProps[] = [
    {
      icon: "/youtube-logo.png", // Replace with your asset
      title: "YouTube",
      description: "Full episodes & extended cuts",
    },
    {
      icon: "/x-logo.png", // Replace with your asset
      title: "X (Twitter)",
      description: "Live moments & viral clips",
    },
    {
      icon: "/instagram-logo.png", // Replace with your asset
      title: "Shorts & Reels",
      description: "Bite-sized highlights",
    },
    {
      icon: (
        <div className="bg-red-600 px-2 py-1 rounded text-[10px] font-bold text-white flex items-center gap-1">
          <span className="animate-pulse">●</span> LIVE
        </div>
      ),
      title: "Live Streams",
      description: "Real-time engagement",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#04040E] flex flex-col lg:flex-row overflow-hidden">
      {/* Left Content Column */}
      <main className="w-full lg:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center">
        <h1 className="font-irish text-white text-6xl md:text-7xl uppercase italic  mb-12">
          Participations
        </h1>

        <div className="space-y-12 max-w-xl">
          {/* Who Participates Section */}
          <section>
            <h2 className="font-irish text-white text-2xl uppercase  mb-4">
              Who Participates & Watches
            </h2>
            <p className="font-inika text-gray-400 text-sm leading-relaxed mb-6">
              Decent Den brings together the most engaged and influential voices
              in the Web3 ecosystem.
            </p>
            <ul className="list-disc list-inside font-inika text-gray-200 text-xs space-y-2 opacity-90">
              <li>Crypto-native users</li>
              <li>Web3 creators</li>
            </ul>
          </section>

          {/* Platform Grid Section */}
          <section>
            <h2 className="font-irish text-white text-2xl uppercase  mb-6">
              Where the Show Lives
            </h2>
            <p className="font-inika text-gray-400 text-sm leading-relaxed mb-8">
              Multi-platform distribution ensures maximum reach and engagement
              across Web3 communities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {platforms.map((platform, index) => (
                <PlatformCard key={index} {...platform} />
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Right Hero Image Column */}
      <aside className="w-full lg:w-1/2 relative h-[500px] lg:h-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-[#04040E] via-transparent to-transparent z-10 hidden lg:block" />
        <img
          src="/participations-hero.jpg" // Replace with your asset
          alt="Participations Hero"
          className="w-full h-full object-cover"
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
