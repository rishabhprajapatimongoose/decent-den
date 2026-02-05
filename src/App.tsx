import AboutPage from "./pages/About/AboutPage";
import BornFirePage from "./pages/BornFirePage";
import DecentDenLanding from "./pages/DecentDenLoading";
import TheDenSpacePage from "./pages/DenSpace/TheDenSpacePage";

const App = () => {
  return (
    <div className="font-inika">
      <DecentDenLanding />
      <AboutPage />
      <BornFirePage />
      <TheDenSpacePage />
    </div>
  );
};

export default App;
