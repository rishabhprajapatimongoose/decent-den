interface GangCardProps {
  image: string;
  name: string;
}

const GangCard = ({ image, name }: GangCardProps) => {
  return (
    <div className="flex flex-col items-center group cursor-pointer">
      <div className=" w-full max-w-[271px] rounded-lg overflow-hidden border-2 border-[#506191] shadow-card-glow">
        <img src={image} alt={name} className="w-full h-full  object-cover " />
      </div>
      <h3 className="mt-7 text-4xl font-inika-bold text-center text-white uppercase">
        {name}
      </h3>
    </div>
  );
};

export default GangCard;
