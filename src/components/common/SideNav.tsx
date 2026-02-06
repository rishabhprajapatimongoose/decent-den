const SideNav = () => {
  return (
    <div className="flex flex-col items-end text-right font-irish select-none">
      {/* Active Item */}
      <div className="relative mb-6 cursor-pointer mix-blend-difference">
        <span className="text-white font-bold text-2xl tracking-widest uppercase">
          Main
        </span>

        {/* Active Bar */}
        <div
          className="
            absolute
            -right-5
            top-1/2
            h-10
            w-1
            bg-white
            -translate-y-1/2
            rounded
          "
        />
      </div>

      {/* Menu Items */}
      <div className="flex flex-col items-end gap-5">
        {[
          "About Decent Den",
          "The Den Space",
          "Organizing Hands",
          "Participations",
          "Inquiry",
        ].map((item) => (
          <div
            key={item}
            className="
              cursor-pointer
              text-lg
              tracking-wide
              uppercase
              text-white

              mix-blend-difference

              transition-all
              duration-300
              hover:translate-x-1
            "
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
