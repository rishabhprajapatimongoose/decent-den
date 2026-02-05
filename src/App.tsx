import { useEffect } from "react";
import Footer from "./components/common/Footer";
import AboutPage from "./pages/About/AboutPage";
import BornFirePage from "./pages/BornFirePage";
import CommunityPartners from "./pages/CommunityPartnersPage";
import ParticipationInquiryPage from "./pages/Contact/ParticipationInquiryPage";
import DecentDenLanding from "./pages/DecentDenLoading";
import TheDenSpacePage from "./pages/DenSpace/TheDenSpacePage";
import OrganizingHands from "./pages/Organizinghands/OrganizingHands";
import ParticipationsPage from "./pages/Participations/ParticipationsPage";

const App = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 10);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="font-inika">
      <DecentDenLanding />
      <AboutPage />
      <BornFirePage />
      <TheDenSpacePage />
      <OrganizingHands />
      <CommunityPartners />
      <ParticipationsPage />
      <ParticipationInquiryPage />
      <Footer />
    </div>
  );
};

export default App;
