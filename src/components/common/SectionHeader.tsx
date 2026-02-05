interface SectionHeaderProps {
  prefix?: string;
  highlight?: string;
  isDark?: boolean; // for light/dark theme
}

const SectionHeader = ({
  prefix,
  highlight,
  isDark = false,
}: SectionHeaderProps) => {
  return (
    <div
      className={` text-[64px] font-irish text-wrap space-x-6 mx-auto wrap-break-words items-center uppercase  ${
        isDark ? "text-[#04040E]" : "text-[#ffffff]"
      }`}
    >
      {prefix && <span className="whitespace-nowrap">{prefix}</span>}
      {highlight && (
        <span
          className={`px-2.5 inline gap-2.5 rounded-[10px] [box-decoration-break:clone] [-webkit-box-decoration-break:clone]  ${
            isDark
              ? "bg-[#04040E] text-[#ffffff]"
              : "bg-[#ffffff] text-[#04040E]"
          }`}
        >
          {highlight}
        </span>
      )}
    </div>
  );
};

export default SectionHeader;
