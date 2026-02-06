import SectionHeader from "../components/common/SectionHeader";

interface Partner {
  id: number;
  name: string;
  hasBackground: boolean;
  image?: string; // Made optional to handle the fallback
}

const PartnerCard = ({ partner }: { partner: Partner; index: number }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center p-8 rounded-xl transition-all duration-300
        aspect-3/2 w-full max-w-76
        ${partner.hasBackground ? "bg-[#04040E0A]" : "bg-transparent"}
      `}
    >
      {partner.image ? (
        /* Show image if available */
        <img
          src={partner.image}
          alt={partner.name}
          className="w-full h-full object-contain"
        />
      ) : (
        /* Fallback text */
        <div className="flex flex-col items-center gap-1">
          <span className="font-irish text-[40px] text-black uppercase tracking-tighter">
            LOGO
          </span>
          <p className="font-inika text-2xl text-gray-800 text-center">
            {partner.name}
          </p>
        </div>
      )}
    </div>
  );
};

const CommunityPartners = () => {
  const partners: Partner[] = [
    { id: 1, name: "Name of Brand", hasBackground: true, image: "/king.png" },
    { id: 2, name: "Name of Brand", hasBackground: false }, // Fallback trigger
    { id: 3, name: "Name of Brand", hasBackground: true, image: "/king.png" },
    { id: 4, name: "Name of Brand", hasBackground: false },
    { id: 5, name: "Name of Brand", hasBackground: false },
    { id: 6, name: "Name of Brand", hasBackground: true, image: "/king.png" },
    { id: 7, name: "Name of Brand", hasBackground: false },
    { id: 8, name: "Name of Brand", hasBackground: true, image: "/king.png" },
    { id: 9, name: "Name of Brand", hasBackground: true },
    { id: 10, name: "Name of Brand", hasBackground: false },
    { id: 11, name: "Name of Brand", hasBackground: true },
    { id: 12, name: "Name of Brand", hasBackground: false },
  ];

  return (
    <section className="w-full min-h-screen bg-white py-25 px-10 flex flex-col items-center overflow-hidden">
      <SectionHeader
        prefix="Our Community"
        highlight="Partners"
        prefixColor="#000000"
        highlightColor="#ffffff"
      />

      <div className="mt-22 grid grid-cols-4 gap-x-5 gap-y-7 max-w-7xl mx-auto pb-36">
        {partners.map((partner, index) => (
          <PartnerCard key={partner.id} partner={partner} index={index} />
        ))}
      </div>
    </section>
  );
};

export default CommunityPartners;
