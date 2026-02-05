import AboutPage from "./pages/About/AboutPage";
import BornFirePage from "./pages/BornFirePage";
import CommunityPartners from "./pages/CommunityPartnersPage";
import ParticipationInquiryPage from "./pages/Contact/ParticipationInquiryPage";
import DecentDenLanding from "./pages/DecentDenLoading";
import TheDenSpacePage from "./pages/DenSpace/TheDenSpacePage";
import ParticipationsPage from "./pages/Participations/ParticipationsPage";

const App = () => {
  return (
    <div className="font-inika">
      <DecentDenLanding />
      <AboutPage />
      <BornFirePage />
      <TheDenSpacePage />
      <CommunityPartners />
      <ParticipationsPage />
      <ParticipationInquiryPage />
    </div>
  );
};

export default App;
