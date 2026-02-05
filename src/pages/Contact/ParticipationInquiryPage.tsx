import SectionHeader from "../../components/common/SectionHeader"; // Using the reusable header we made
import DirectContact from "./components/DirectContact";
import InquiryForm from "./components/InquiryForm";
import WhyPartnerUs from "./components/WhyPartnerUs";

const ParticipationInquiryPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#030F1F] text-white px-8 py-16 md:px-24">
      {/* Page Header */}
      <div className="mb-23 mx-auto flex items-center">
        <SectionHeader
          prefix="Become Part of the"
          highlight="Decent Den Story"
        />
      </div>

      <div className="flex gap-30 max-w-7xl">
        {/* Left Column */}
        <InquiryForm />
        {/* Right Column*/}
        <div className="flex flex-col gap-12 justify-center">
          <DirectContact />
          <WhyPartnerUs />
        </div>
      </div>
    </div>
  );
};

export default ParticipationInquiryPage;
