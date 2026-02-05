import React from "react";
import SectionHeader from "../components/common/SectionHeader";

interface Partner {
  id: number;
  name: string;
  hasBackground: boolean;
}

const PartnerCard: React.FC<{ partner: Partner; index: number }> = ({
  partner,
}) => {
  return (
    <div
      className={`flex flex-col items-center aspect-3/2 justify-center p-8 rounded-xl transition-all duration-300
        ${partner.hasBackground ? "bg-[#04040E0A]" : "bg-transparent"}
      `}
    >
      <img src="/king.png" className="w-full h-full" />
    </div>
  );
};

const CommunityPartners = () => {
  const partners: Partner[] = [
    { id: 1, name: "Name of Brand", hasBackground: true },
    { id: 2, name: "Name of Brand", hasBackground: false },
    { id: 3, name: "Name of Brand", hasBackground: true },
    { id: 4, name: "Name of Brand", hasBackground: false },
    { id: 5, name: "Name of Brand", hasBackground: false },
    { id: 6, name: "Name of Brand", hasBackground: true },
    { id: 7, name: "Name of Brand", hasBackground: false },
    { id: 8, name: "Name of Brand", hasBackground: true },
    { id: 9, name: "Name of Brand", hasBackground: true },
    { id: 10, name: "Name of Brand", hasBackground: false },
    { id: 11, name: "Name of Brand", hasBackground: true },
    { id: 12, name: "Name of Brand", hasBackground: false },
  ];

  return (
    <section className="w-full min-h-screen bg-white py-25 px-10 flex flex-col items-center overflow-hidden">
      {/* Header */}
      <SectionHeader
        prefix="Our Community"
        highlight="Partners"
        isDark={true}
      />

      {/* Grid Container */}
      <div className="mt-[94px] grid grid-cols-4 gap-x-5 gap-y-7 max-w-7xl mx-auto pb-24">
        {partners.map((partner, index) => (
          <PartnerCard key={partner.id} partner={partner} index={index} />
        ))}
      </div>
    </section>
  );
};

export default CommunityPartners;
