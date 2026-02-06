interface SectionHeaderProps {
  prefix?: string;
  prefixColor?: string; // Use Hex
  highlightColor?: string; // Use Hex
  highlight?: string;
  className?: string;
}

const SectionHeader = ({
  prefix,
  prefixColor = "#FFFFFF",
  highlightColor = "#04040E",
  highlight,
  className = "",
}: SectionHeaderProps) => {
  return (
    <div
      className={`
        text-[64px] font-irish uppercase leading-tight 
        flex flex-wrap items-center justify-center 
        w-full mx-auto 
        ${className}
      `}
    >
      {prefix && (
        <span
          style={{ color: prefixColor }}
          className="mr-3 md:mr-6" /* Standard margin for spacing */
        >
          {prefix}
        </span>
      )}

      {highlight && (
        <span
          style={{
            backgroundColor: prefixColor,
            color: highlightColor,
          }}
          className="inline-block px-3 py-1 rounded-[10px] [box-decoration-break:clone] [-webkit-box-decoration-break:clone]"
        >
          {highlight}
        </span>
      )}
    </div>
  );
};

export default SectionHeader;
