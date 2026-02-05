const SideNav = () => (
  <div className="isolate flex flex-col items-end gap-6 text-right font-irish">
    {/* Active */}
    <div className="relative group cursor-pointer mix-blend-difference">
      <span className="text-white font-bold text-xl tracking-widest uppercase">
        Main
      </span>

      <div className="absolute -right-6 top-1/2 h-8 w-1 bg-white -translate-y-1/2" />
    </div>

    {/* Inactive */}
    {[
      "About Decent Den",
      "The Games",
      "Sponsorships",
      "Participations",
      "Inquiry",
    ].map((item) => (
      <div
        key={item}
        className="
          cursor-pointer
          text-sm
          font-medium
          tracking-wider
          uppercase
          text-white
          mix-blend-difference
          transition-all
          duration-300
          hover:tracking-widest
        "
      >
        {item}
      </div>
    ))}
  </div>
);

export default SideNav;
