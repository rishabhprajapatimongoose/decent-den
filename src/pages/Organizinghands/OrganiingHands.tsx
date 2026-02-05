import React from "react";
import SectionHeader from "../../components/common/SectionHeader";
const OrganizingHands: React.FC = () => {
  const uniqueImages = ["/hand-1.jpg", "/hand-2.jpg", "/hand-3.jpg"];

  const images = Array.from({ length: 10 }, (_, i) => uniqueImages[i % 3]);

  return (
    <section className="w-full min-h-screen bg-[#04040E] pt-15 pb-21 flex flex-col items-center overflow-hidden">
      {/* Header Section */}
      <div className="mb-17 flex gap-6">
        <img src="/organizingHandsLogo.png " className="h-30 2-30  " />
        <SectionHeader prefix="Organizing" highlight="Hands" />
      </div>

      {/* Accordion Container */}
      <div className="flex w-full max-w-[1400px] h-[600px] px-4 gap-1 group">
        {images.map((src, index) => (
          <div
            key={index}
            className={`
              relative h-full overflow-hidden transition-all duration-500 ease-in-out cursor-pointer
              /* Base width for all items */
              flex-[1] 
              /* Expand on hover */
              hover:flex-[4]
              /* Border styling to match reference */
              border-x border-blue-500/20
            `}
          >
            {/* Image Wrapper to maintain aspect ratio during flex expansion */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={src}
                alt={`Organizing Hand ${index + 1}`}
                className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-500"
              />

              {/* Subtle Blue Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-900/20 opacity-0 hover:opacity-100 transition-opacity duration-500" />

              {/* Left Side Blue Line (as seen in Figma) */}
              <div className="absolute left-0 top-0 w-[1px] h-full bg-blue-400/40" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrganizingHands;
