interface GangCardProps {
  image: string;
  name: string;
}

const GangCard = ({ image, name }: GangCardProps) => {
  return (
    <div className="flex flex-col items-center group cursor-pointer">
      <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden border-2 border-[#506191] shadow-[0_0_10px_rgba(190, 195, 235, 0.25)] ">
        {/* Replace src with your actual image paths */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
        />
        {/* Overlay for that moody atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#04040E] via-transparent to-transparent opacity-60" />
      </div>
      <h3 className="mt-6 text-2xl font-serif text-white tracking-wide uppercase">
        {name}
      </h3>
    </div>
  );
};

export default GangCard;
