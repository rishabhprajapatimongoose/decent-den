import GangCard from "./components/GangCard";

const PageHeader = () => {
  return (
    <header className="relative z-10 text-[32px] font-irish">
      <div className="flex items-center gap-2 text-[#ffffff]">
        <span className="uppercase">The</span>
        <span className="text-[#04040E] bg-[#ffffff] px-1.5 rounded-[10px] flex gap-2.5 uppercase">
          Den Space
        </span>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <section className="mt-25 text-center w-full flex flex-col items-center px-4 pb-12  ">
      <div className="flex items-center justify-center gap-6 w-full ">
        <div className="h-1 flex-1 bg-linear-to-r from-transparent to-[#506191]" />

        <h2 className="text-[64px] font-irish text-white uppercase ">
          Three Gangs
        </h2>

        <div className="h-1 flex-1 bg-linear-to-l from-transparent to-[#506191]" />
      </div>

      <p className="text-xl ">
        Each gang has a boss, chosen by respect and power. But in the world of
        blockchain, the final word belongs to the community vote.
      </p>
    </section>
  );
};

type Gang = {
  name: string;
  image: string;
};

const Main = () => {
  const gangs: Gang[] = [
    { name: "Gang Hammer", image: "/CardGangHammer.jpg" },
    { name: "Gang Knife", image: "/CardGangKnife.jpg" },
    { name: "Gang Pistol", image: "CardGangPistol.jpg" },
  ];
  return (
    <main className="mt-36 relative z-10 max-w-6xl w-full grow flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-24 w-full px-4 md:px-12">
        {gangs.map((gang) => (
          <GangCard key={gang.name} name={gang.name} image={gang.image} />
        ))}
      </div>
    </main>
  );
};

const TheDenSpacePage = () => {
  return (
    <div className="relative w-full min-h-screen  text-gray-300 px-8 py-18 flex flex-col items-center overflow-x-hidden">
      {/* backround image  */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/decentDenBg.png"
          alt=""
          className="w-full h-full object-cover select-none pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Header */}
      <PageHeader />

      {/* Main Content */}
      <Main />

      {/* Footers */}
      <Footer />
    </div>
  );
};

export default TheDenSpacePage;
