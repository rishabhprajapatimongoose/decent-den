export interface PlatformCardProps {
  icon: string;
  title: string;
  description: string;
}

// --- Reusable Platform Card ---
const PlatformCard: React.FC<PlatformCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="bg-[#50619114] border-[1.6px] min-w-62.5 border-[#506191] rounded-xl p-5 flex flex-col gap-5">
    <div className="h-10 w-full ">
      <img src={icon} alt={title} className="h-full w-min object-contain" />
    </div>
    <div className="space-y-1.75">
      <h4 className="font-irish text-white text-2xl ">{title}</h4>
      <p className="text-white">{description}</p>
    </div>
  </div>
);

export default PlatformCard;
