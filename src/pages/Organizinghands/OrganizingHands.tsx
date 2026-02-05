import React from "react";
import SectionHeader from "../../components/common/SectionHeader";
import OrganizingHandCard from "./components/OrganizingHandCard";
const OrganizingHands: React.FC = () => {
  const uniqueImages = ["/personOne.png", "/personTwo.png", "/personThree.png"];

  const images = Array.from({ length: 10 }, (_, i) => uniqueImages[i % 3]);

  return (
    <section className="relative w-full min-h-screen  pt-15 pb-21 flex flex-col items-center overflow-hidden">
      {/* Header Section */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* The Image Layer */}
        <img
          src="/organizingHandsBg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          aria-hidden="true"
        />

        {/* The Overlay Layer 
      Using #000000E0 (approx 88% opacity) to darken the image 
  */}
        <div className="absolute inset-0 bg-black/85 mix-blend-multiply" />
      </div>
      <div className="mb-17 flex gap-6">
        <img src="/organizingHandsLogo.png " className="h-30 2-30  " />
        <SectionHeader prefix="Organizing" highlight="Hands" />
      </div>

      {/* Accordion Container */}
      <div
        className="flex w-full max-w-[1400px] h-[600px] px-4 border-r [border-image-source:linear-gradient(180deg,#000001_0%,#59A6F3_32.21%,#59A6F3_68.75%,#010001_100%)]
[border-image-slice:1]"
      >
        {" "}
        {/* Removed 'group' here */}
        {images.map((src, index) => (
          <div
            key={index}
            className={`
        group /* Moved 'group' here so it only triggers for this specific card */
        relative h-full overflow-hidden transition-all duration-500 ease-in-out cursor-pointer
        flex-1 hover:flex-4 
      `}
          >
            <OrganizingHandCard
              src={src}
              index={index}
              name="Name"
              description="Description"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrganizingHands;
